import http from "./httpService";
import config from "../config.json";
// import config from "../config.json";
// import { apiUrl } from "../config.json";

// const apiEndpoint = 'http://localhost:3900/api/movies';
const apiEndpoint = config.apiUrl + '/movies';
// const apiEndpoint = '/movies';
// const apiEndpoint = apiUrl + '/movies';

function movieUrl(id) {
    // return apiEndpoint + '/' + id;
    return `${apiEndpoint}/${id}`
}

export function getMovies() {
    return http.get(apiEndpoint);
}

export function getMovie(movieId) {
    // return http.get(apiEndpoint + '/' + movieId);
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if(movie._id) {
       const body = {...movie};
       delete body._id;
    //    return http.put(apiEndpoint + '/' + movie._id, body);
       return http.put(movieUrl(movie._id), body);
    }

    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    // return http.delete(apiEndpoint + '/' + movieId);
    return http.delete(movieUrl(movieId));
}