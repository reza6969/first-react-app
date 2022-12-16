import axios from 'axios';
// import Raven from 'raven-js';
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    // console.log('INTERCEPTOR CALLED');
    const expectedError = 
      error.response && 
      error.response.status >= 400 && 
      error.response.status < 500;
  
    if(!expectedError) {
      // console.log('Logging the error', error);
      // Raven.captureException(error);
      logger.log(error);
      // alert('An unexpected erro occurred.');
      toast.error("An unexpected erro occurred.");
    }
  
    return Promise.reject(error);
  });

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}