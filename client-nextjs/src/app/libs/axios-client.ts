"use client";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://hif-api.onrender.com/api/v1",
});

axiosClient.interceptors.request.use(
  function (config) {
    const tokenUser = localStorage.getItem("user-login-blog");
    if (tokenUser) {
      config.headers.Authorization = `Bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosClient;
