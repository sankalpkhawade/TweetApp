import { HttpGet } from "../../../services/api-services";
import { GraphManager } from "../../../Helpers/GraphManager";
import { getURL, checkNotNull } from "../../../Helpers/common-helpers";
import { updatePlantID, updateUserData, updateProfilePic } from "../../../redux/actions/global.actions";

export const initialiseData = async (dispatch, token) => {

  try {
    // let token = await extractMSALToken();
    let userData = await getUserData(token); 
    // userData.displayName = "Ken Hicks"
    // userData.mail = "ken.hicks@gerdau.com"
    // userData.officeLocation = "US10 Cartersville Steel Mill"
    dispatch(updateUserData(userData));
    let plantId = "1327";
    if (checkNotNull(userData.officeLocation)) {
      let result = await getPlantID(userData.officeLocation)
      if (checkNotNull(result)) {
        if (result === "7320") {
          plantId = "1327"
        } else {
          plantId = result;
        }
      }
    }
    dispatch(updatePlantID(plantId));
    let imageURL = await getProfilePic(token);
    dispatch(updateProfilePic(imageURL))
  } catch (err) {
    console.log(err);
    throw err;
  }
}
const getUserData = async (token) => {
  try {
    let userData = await GraphManager.getUserAsync(token);
    return userData;
  }
  catch (err) {
    throw err;
  }
}

const getPlantID = async (officeLocation) => {
  try {
    let encodedValue = encodeURI(officeLocation)
    let apiURL = getURL("/plants/names/" + encodedValue)
    let result = await HttpGet(apiURL);
    return result.data.message.data.plants[0].code;
  } catch (err) {
    return null;
  }
}

const getProfilePic = async (token) => {
  try {
    let blob = await GraphManager.getPhotoAsync(token);
    return window.URL.createObjectURL(blob)
  } catch (e) {
    throw e;
  }
}