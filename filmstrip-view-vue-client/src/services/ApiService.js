const axios = require("axios");
import { BASE_URL } from "../url-config";

// Create axiosInstance to use the API in vue
export const axiosCreate = axios.create({
  baseURL: BASE_URL,
});
