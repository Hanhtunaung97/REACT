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
import { Register } from "../service/auth.service";

const RegisterPage = () => {
  const nav = useNavigate();
  const { dealingApi, loading, error, data } = useApi(Register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dealingApi(formData);
    // console.log(formData);
  };
  console.log(loading, error, data);
  return (
    <PreventComponents go={"/home"} tokenCheck={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center ">
            <div className=" h-auto w-2/6 space-y-5">
              <h1 className=" text-xl font-heading text-center font-bold text-blue-700">
                Register Your Contact
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5 ">
                <InputFormComponents
                  onChange={handleInputChange}
                  label={"Enter Username"}
                  type={"name"}
                  placeholder=" Your Name"
                  name={"name"}
                  value={formData.name}
                />
                <InputFormComponents
                  onChange={handleInputChange}
                  label={"Enter Email"}
                  type={"email"}
                  placeholder="example@gmail.com"
                  name={"email"}
                  value={formData.email}
                />
                <InputFormComponents
                  onChange={handleInputChange}
                  label={"Enter Password"}
                  type={"password"}
                  placeholder="password"
                  name={"password"}
                  value={formData.password}
                />
                <InputFormComponents
                  onChange={handleInputChange}
                  label={"Confirm Password"}
                  type={"password"}
                  placeholder="Confirm password"
                  name={"password_confirmation"}
                  value={formData.password_confirmation}
                />
                <ButtonComponents type="submit">Register</ButtonComponents>
              </form>
              <p className=" text-blue-400 font-heading ">
                You have an account ! plz sign in{" "}
                <button
                  onClick={() => nav("/")}
                  className=" text-blue-500 underline active:underline-offset-4 duration-200"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;
