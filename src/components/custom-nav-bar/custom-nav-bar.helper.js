import { HttpGet } from "../../services/api-services";
import { BASE_URI, GET_USER } from "../../constants/endpoints";

export const fetchLoggedInUserDetails = async () => {
  try {
      let credentials = "Bearer " + localStorage.getItem("token");
      let apiUrl = BASE_URI + GET_USER + localStorage.getItem("loginId");
      let headers = {
          "Authorization": credentials
      }
      let response = await HttpGet(apiUrl, {}, headers)
    //   let response = {
    //       data: {
    //           "usersDto": [
    //               {
    //                   "loginId": "sainag98",
    //                   "firstName": "Sainag",
    //                   "lastName": "Chunduru",
    //                   "emailId": "sainagchunduru23@gmail.com",
    //                   "password": "Dsf",
    //                   "contactNumber": 9098765432,
    //                   "loggedIn": null
    //               }
    //           ]
    //       }
    //   }
      return response.data.usersDto[0];
  } catch (e) {
      throw e;
  }
}
