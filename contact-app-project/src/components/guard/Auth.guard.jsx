import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/services/EndPoints/auth.endpoints";
import { useNavigate } from "react-router-dom";
import LoadingComponents from "../support/Loading.components";

const AuthGuard = ({ check, token, children }) => {
  const nav = useNavigate();
  const { isError, isLoading, data } = useProfileQuery();
  console.log(isError, isLoading, data);
  useEffect(() => {
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (data) {
      nav("/home");
    } else if (isError) {
      nav("/");
    }
  }, [check, data, isError]);
  return <>{isLoading ? <LoadingComponents /> : <>{children}</>}</>;
};

export default AuthGuard;
