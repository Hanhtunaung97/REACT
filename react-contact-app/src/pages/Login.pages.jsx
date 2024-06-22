import React, { useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  InputFormComponents,
} from "../components";

const LoginPages = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInput = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerComponents>
      <div className="Center">
        <div className=" w-2/5 h-auto space-y-5">
          <h1 className=" text-center text-2xl font-heading text-green-800 font-semibold">
            Login Your Contact
          </h1>
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
        </div>
      </div>
    </ContainerComponents>
  );
};

export default LoginPages;
