import { api } from "./api";

export const Register = async (regData) => {
  try {
    const res = await api.post("/register", regData);
    return res;
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const Login = async (loData) => {
  try {
    const res = await api.post("/login", loData);
    const { data } = res;
    if (data.token) {
      localStorage.setItem("auth", JSON.stringify(data.token));
    }
    return res;
  } catch (error) {
    return { error: true, msg: error.message };
  }
};
export const getProfile = async () => {
  try {
    const res = await api.get("/user-profile");
    return res;
  } catch (error) {
    return { error: true, msg: error.message };
  }
};
