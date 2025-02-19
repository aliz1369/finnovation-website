import apiClient from "./apiClient";

export const fetchHomePage = async () => {
  const response = await apiClient.get("/pages/home/");
  return response.data;
};

export const fetchAboutPage = async () => {
  const response = await apiClient.get("/pages/about-us/");
  return response.data;
};
