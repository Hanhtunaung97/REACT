import React, { useEffect, useState } from "react";
import {
  ContainerComponents,
  InputFormComponents,
  ButtonComponents,
  LoadingComponents,
  ErrorComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import useApi from "../hook/useApi";
import { Register } from "../service/auth.service";

const RegisterPages = () => {
  const { apiDealing, loading, error, data } = useApi(Register);
  const nav = useNavigate();
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
    // console.log(e.target.value);
    return setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    apiDealing(formData);
  };
  console.log(loading, error, data);
  return (
    <PreventComponents check={localStorage.getItem("auth")} go={"/home"}>
      <ContainerComponents>
      {loading ? (
        <LoadingComponents />
      ) : (
        <div className="Center">
          <div className=" w-2/5 h-auto space-y-5">
            <h1 className=" text-2xl font-semibold font-heading text-green-800 text-center">
              Register Your Contact
            </h1>
            {error && <ErrorComponents>{error}</ErrorComponents>}
            <form onSubmit={handleSubmit} className=" flex flex-col gap-y-3">
              <InputFormComponents
                onChange={handleInputChange}
                value={formData.name}
                label={"Enter Your Name :"}
                type={"name"}
                name={"name"}
              />
              <InputFormComponents
                onChange={handleInputChange}
                value={formData.email}
                label={"Enter Email :"}
                type={"email"}
                name={"email"}
                placeholder={"example@gmail.com"}
              />
              <InputFormComponents
                onChange={handleInputChange}
                value={formData.password}
                label={"Enter Password :"}
                type={"password"}
                name={"password"}
              />
              <InputFormComponents
                onChange={handleInputChange}
                value={formData.password_confirmation}
                label={"Confirm Password"}
                type={"password"}
                name={"password_confirmation"}
              />
              <ButtonComponents type="submit">Register</ButtonComponents>
            </form>
            <p className=" text-green-500 select-none">
              You have account! Plz login up{" "}
              <button
                className=" text-green-700 underline active:scale-90 active:underline-offset-4 duration-300 font-semibold active:text-green-600"
                onClick={() => nav("/")}
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

export default RegisterPages;
