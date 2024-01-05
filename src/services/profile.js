import axiosInstance from ".";

export const profileFetch = () => axiosInstance.get("account/info");
