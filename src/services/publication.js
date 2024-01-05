import axiosInstance from ".";

export const publicationFetch = (data) =>
  axiosInstance.post("objectsearch", data);
