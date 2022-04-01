import { DOMAIN, STATUS_CODE } from "../utils/contants/serviceContant";
import BaneService from "./baneService";
import { history } from "../utils/libs/history"

class LoginService extends BaneService {
    constructor() {
            super();
        }
        //handle
    postLogin = async(data) => {
        let res = await this.post(`${DOMAIN}api/Account/Login`, data);
        console.log(res)
        if (res.status === STATUS_CODE.SUCCESS) {
            res = await res.json();
            history.push("/home")
        }
    };
}

export const loginService = new LoginService();