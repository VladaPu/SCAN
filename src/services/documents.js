import axiosInstance from ".";

export const documentsFetch = (data) => axiosInstance.post("documents", data);
