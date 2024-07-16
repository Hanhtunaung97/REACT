import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/services/EndPoints/auth.endpoints";
import { useNavigate } from "react-router-dom";
import LoadingComponents from "../tools/Loading.components";
const AuthGuard = ({ check, token, children, path = "/" }) => {
  const nav = useNavigate();
  const { isError, isLoading, data, isSuccess } = useProfileQuery();
  useEffect(() => {
    console.log(isError, isLoading, data, isSuccess);
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (isError) {
      nav(path);
    } else if (data && localStorage.getItem("token")) {
      nav("/home");
    }
  }, [check, data, isError]);
  return <>{isLoading ? <LoadingComponents /> : <>{children}</>}</>;
};

export default AuthGuard;
