import axios from "axios";

export const publicApi = axios.create({
//   baseURL: "https://YOUR-BACKEND-URL/api",
//مؤقتا لحين رفع الباك
 baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});