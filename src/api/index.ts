import axios from "axios";

export const baseApiUrl = process.env.API_URL
export const ownApi = axios.create({
  baseURL: baseApiUrl,
});
