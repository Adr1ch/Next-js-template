const getBaseUrl = () => {
  return process.env.NODE_ENV === "development" ? "http://localhost:1337" : "";
};

export default getBaseUrl;
