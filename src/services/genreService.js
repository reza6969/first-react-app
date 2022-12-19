import http from "./httpService";
import config from "../config.json";
// import { apiUrl } from "../config.json";

export function getGenres() {
    return http.get(config.apiUrl + "/genres");
    // return http.get(apiUrl + "/genres");
}
