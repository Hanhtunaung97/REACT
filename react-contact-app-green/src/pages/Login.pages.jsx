import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  InputFormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Login } from "../service/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/action/auth.action";

const LoginPages = () => {
  // const { apiDealing, loading, error, data } = useApi(Login);
  const nav = useNavigate();
  const {loading,error,data}=useSelector((store) =>store.auth )
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log(loading,error,data);
  useEffect(() => {
    data && nav("/home");
  }, [data]);
  const handleInput = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    loginAction(dispatch, formData);
    // console.log(formData);
    // apiDealing(formData);
  };

  return (
    <PreventComponents check={localStorage.getItem("auth")} go={"/home"}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className=" w-2/5 h-auto space-y-5">
              <h1 className=" text-center text-2xl font-heading text-green-800 font-semibold">
                Login Your Contact
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
                <InputFormComponents
                  label={"Enter Your Email :"}
                  type={"email"}
                  name={"email"}
                  placeholder={"example@gmail.com"}
                  value={formData.email}
                  onChange={handleInput}
                />
                <InputFormComponents
                  label={"Enter Password :"}
                  type={"password"}
                  name={"password"}
                  value={formData.password}
                  onChange={handleInput}
                />
                <ButtonComponents type="submit">Login</ButtonComponents>
              </form>
              <p className=" text-green-500 select-none">
                You haven't account yet! Plz sign up{" "}
                <button
                  className=" text-green-700 underline active:scale-90 active:underline-offset-4 duration-300 font-semibold active:text-green-600"
                  onClick={() => nav("/register")}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPages;
