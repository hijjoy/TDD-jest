import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
