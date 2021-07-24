import axios from "axios";

const token = JSON.parse(localStorage.getItem("currentUser"));
const baseURL = "https://uplandshut.herokuapp.com/v1/";

export const axiosInstance = axios.create({ baseURL });

export const axiosWithAuth = (config) =>
  axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
      ...config,
    },
  });
