import http from "./httpService";
import config from "../config.json";
// import { apiUrl } from "../config.json";

const apiEndpoint = config.apiUrl + '/genres';

export function getGenres() {
    // return http.get(config.apiUrl + "/genres");
    return http.get(apiEndpoint);
    // return http.get(apiUrl + "/genres");
}
