import { HttpGet, HttpPost } from "../../services/api-services";
import { BASE_URI, FORGOT_PASSWD } from "../../constants/endpoints";

export const forgotPassword = async (email, password) => {
    try {
        let apiUrl = BASE_URI + FORGOT_PASSWD;
        await HttpPost(apiUrl, {
            userDto: {
                loginId: email,
                password: password
            }
        })
    } catch (e) {
        throw e;
    }
}

