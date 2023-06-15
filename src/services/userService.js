import http from "./httpService";
// import { apiUrl } from "../config.json";
import config from "../config.json";
// import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";
// const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
