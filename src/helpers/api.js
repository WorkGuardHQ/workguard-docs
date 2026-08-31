// import axios from "axios";

// export const publicApi = axios.create({
// //   baseURL: "https://YOUR-BACKEND-URL/api",
// //مؤقتا لحين رفع الباك
//  baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


import axios from "axios";

export const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});