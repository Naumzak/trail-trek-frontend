import axios from "axios";

export const baseApiUrl = 'http://localhost:3000'
export const ownApi = axios.create({
  baseURL: baseApiUrl,
});
