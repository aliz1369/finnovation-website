import apiClient from "./apiClient";

export const fetchHomePage = async () => {
  const response = await apiClient.get("/pages/home/");
  return response.data;
};

export const fetchAboutPage = async () => {
  const response = await apiClient.get("/pages/about-us/");
  return response.data;
};

export const fetchdegerlerimizPage = async () => {
  const response = await apiClient.get("/pages/degerlerimiz/");
  return response.data;
};

export const fetchsurdurulebilirlikPage = async () => {
  const response = await apiClient.get("/pages/surdurulebilirlik/");
  return response.data;
};

export const fetchUzmanlikAlanlarimizPage = async () => {
  const response = await apiClient.get("/pages/uzmanlik-alanlarimiz/");
  return response.data;
};

export const fetchSurecIzlemePage = async () => {
  const response = await apiClient.get("/pages/surec-izleme/");
  return response.data;
};

export const fetchProjeBazliPage = async () => {
  const response = await apiClient.get("/pages/proje-bazli-entegrasyon/");
  return response.data;
};

export const fetchFinAcademyPage = async () => {
  const response = await apiClient.get("/pages/finacademy/");
  return response.data;
};
