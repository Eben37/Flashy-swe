// api.js
import axios from 'axios';

const API_URL = 'http://100.66.37.131:5000';  // Replace with your local IP address or production URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,  // Set a timeout for requests
    headers: {
        'Content-Type': 'multipart/form-data',  // Default content type, can be overridden per request
    },
});

export default axiosInstance;
