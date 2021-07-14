import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://uplandshut.herokuapp.com/v1/",
  // timeout: 1000,
});
