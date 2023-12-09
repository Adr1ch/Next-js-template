import { baseUrl } from "@/utils/const";

const getBaseUrl = () => {
  return process.env.NODE_ENV === "development" ? baseUrl : "";
};

export default getBaseUrl;
