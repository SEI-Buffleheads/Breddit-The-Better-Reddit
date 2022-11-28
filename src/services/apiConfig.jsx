import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://betterreddit-backend-production.up.railway.app/"
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

console.log(api)

export default api;