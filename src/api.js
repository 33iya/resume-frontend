import axios from "axios";

const API = axios.create({
  // ❌ Agar yahan onrender ka link hai toh use hataiye
  // ✅ Localhost ka link daliye:
  baseURL: "https://resume-backend-3-pfp2.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;