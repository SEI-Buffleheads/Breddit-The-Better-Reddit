import api from "./apiConfig";
// import jwtDecode from "jwt-decode";
import axios from "axios";

export const getUser = async (id) => {
  try {
    const res = await api.get(`/api/user/${id}`);
    const user = res.data
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id) => {
  try {
    const res = await axios.get(`/api/user/${id}`);
    const user = {
      access: localStorage.getItem("token"),
      refresh: localStorage.getItem("refresh"),
      user: res.data,
    };
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/api/auth/register/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    const user = {
      access: res.data.access,
      refresh: res.data.refresh,
      user: res.data.user,
    };
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const res = await api.post("/api/auth/login/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    const user = {
      access: res.data.access,
      refresh: res.data.refresh,
      user: res.data.user,
    };
    return user;
  } catch (error) {
    return error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    return true;
  } catch (error) {
    throw error;
  }
};




