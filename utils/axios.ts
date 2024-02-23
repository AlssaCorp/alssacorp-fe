import axios from "axios";

const backendAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
});

export { backendAxios };
