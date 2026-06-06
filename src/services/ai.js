import axios from "axios";

const API = "http://localhost:5000";

export const generateSummary = async (payload) => {
  return await axios.post(`${API}/api/ai/summary`, payload);
};