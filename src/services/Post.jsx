import api from "./apiConfig.js";
import axios from "axios";

const form = {
  title: "",
  body: "",
}

export const getPosts = async () => {
  try {
    const response = await axios.get("https://betterreddit-backend-production.up.railway.app/api/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/api/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/api/posts/", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await api.put(`/api/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/api/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};