import api from "./apiConfig.js";
import jwtDecode from "jwt-decode";

const getOwnerId = () => {
  const decoded = jwtDecode(localStorage.getItem("token"));
  const id = decoded.user_id
  return id
}

export const getComments = async () => {
  try {
    const response = await api.get("/api/comments/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {
  try {
    const response = await api.get(`/api/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (commentData) => {
  const ownerId = getOwnerId()
  commentData.owner = ownerId

  try {
    const response = await api.post("/api/comments/", commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (id, commentData) => {
  try {
    const response = await api.put(`/api/comments/${id}/`, commentData);
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