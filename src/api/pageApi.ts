import apiClient from "./apiClient";

export const fetchHomePage = async () => {
  const response = await apiClient.get("/pages/ana-sayfa/");
  return response.data;
};
