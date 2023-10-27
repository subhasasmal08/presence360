import axios from "axios";
import { encryptStorage } from "./storage";

let host = window.location.host;
// export const API_URL = "http://" + host + "/api/v1/";
// export const SOCKET_URL = "http://" + host;
export const API_URL = "http://192.168.1.132:8000/api/v1/";
export const SOCKET_URL = "http://192.168.1.132:8000/";

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
};
export const axiosApiInstance = axios.create(defaultOptions);

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const data = encryptStorage.getItem("UID");
    config.headers.Authorization = "Basic " + data.token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  }
);

