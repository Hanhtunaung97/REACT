import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/services/EndPoints/auth.endpoints";
import { useNavigate } from "react-router-dom";
import LoadingComponents from "../tools/Loading.components";
const AuthGuard = ({ check, token, children }) => {
  const nav = useNavigate();
  const data = useProfileQuery();
  useEffect(() => {
    // console.log(isError, isLoading, data);
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (data?.data) {
      nav("/home");
    } else if (data?.isError) {
      nav("/");
    }
  }, [check, data?.data, data?.isError]);
  return (
    <>
      {data.isLoading ? (
        <LoadingComponents />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthGuard;
