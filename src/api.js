import axios from "axios";

const API = axios.create({
  // ✅ Humne render ka link hata kar localhost ka link daal diya hai
  baseURL: "https://resume-backend-3-pfp2.onrender.com" 
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;