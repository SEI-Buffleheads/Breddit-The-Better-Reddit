import api from "./apiConfig.js";
import axios from "axios";

const form = {
  title: "",
  body: "",
}

export const getComments = async () => {
  try {
    const response = await axios.get("https://betterreddit-backend-production.up.railway.app/api/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {
  try {
    const response = await api.post(`/api/comments/${id}`, form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await api.post("/api/comments", commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (id, commentData) => {
  try {
    const response = await api.put(`/api/comments/${id}`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/api/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};