import { HttpGet } from "../../services/api-services";
import { BASE_URI, AUTHENTICATE } from "../../constants/endpoints";

export const authenticate = async (email, password) => {
    try {
        let credentials = "Basic " + btoa(email + ":" + password);
        console.log(credentials)
        let apiUrl = BASE_URI + AUTHENTICATE;
        let headers = {
            "Authorization": credentials
        }
        let response = {
            data:{
                token: "qwertyuknbvyhn b"
            }
        }
        // let response = await HttpGet(apiUrl, {}, headers)
        return response.data.token;
    } catch (e) {
        throw e;
    }
}

