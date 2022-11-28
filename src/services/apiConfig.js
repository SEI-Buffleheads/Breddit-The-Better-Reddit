import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`JWT ${localStorage.getItem("token") || null}`);
  });
};

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://127.0.0.1:8000/"
      : "http://127.0.0.1:8000/",
});

api.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
