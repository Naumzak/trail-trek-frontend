import axios from "axios";

const baseApiUrl = process.env.API_URL
export const ownApi = axios.create({
  baseURL: baseApiUrl,
});
