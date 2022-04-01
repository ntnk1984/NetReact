import { DOMAIN, TOKEN } from "../utils/contants/serviceContant";

export default class BaneService {
    post = (url, data) => {
        return fetch(url, {
            method: "POST",
            body: data,
            headers: { "Content-Type": "application/json" },
        });
    };

    get = (url) => {
        return fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
    };

    put = (url, data) => {
        return fetch(url, {
            method: "PUT",
            body: data,
            headers: { "Content-Type": "application/json" },
        });
    };

    delete = (url) => {
        return fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
    };
}