import { api } from "../../service/api";
import { Login } from "../../service/auth.service";

export const loginAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Login(formData);
    // const res=await api.post("/login",formData)
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (error) {
    dispatch({ type: "error", payload: res.msg });
  }
};
