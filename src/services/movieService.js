import http from "./httpService";
import config from "../config.json";
// import { apiUrl } from "../config.json";

// const apiEndpoint = 'http://localhost:3900/api/movies';
const apiEndpoint = config.apiUrl + '/movies';
// const apiEndpoint = apiUrl + '/movies';

export function getMovies() {
    return http.get(apiEndpoint);
}

export function getMovie(movieId) {
    return http.get(apiEndpoint + '/' + movieId);
}

export function saveMovie() {}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId);
}