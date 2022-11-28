import api from "./apiConfig.js";
import axios from "axios";

const form = {
  title: "TESTING FROM REACT123",
  body: "this is my body"
}

export const getPosts = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const makePost = async () => {
  try {
    const response = await api.post("/api/posts/", form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

