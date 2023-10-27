import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://job-marketplace.vercel.app/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  },
});

export default newRequest;
