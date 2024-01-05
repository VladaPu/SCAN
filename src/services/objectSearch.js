import axiosInstance from ".";

export const histogramsFetch = (data) =>
  axiosInstance.post("objectsearch/histograms", data);
