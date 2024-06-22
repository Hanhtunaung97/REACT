import React, { useState } from "react";
import {
  ContainerComponents,
  InputFormComponents,
  ButtonComponents,
} from "../components";

const RegisterPages = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInputChange = (e) =>{
    console.log(e.target.value);
   return setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }
const handleSubmit=(e) => {
    e.preventDefault();
    console.log("hello");
    console.log(formData);
}
  return (
    <ContainerComponents>
      <div className="Center">
        <div className=" w-2/5 h-auto space-y-5">
          <h1 className=" text-2xl font-semibold font-heading text-green-800 text-center">
            Register Your Contact
          </h1>
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
        </div>
      </div>
    </ContainerComponents>
  );
};

export default RegisterPages;
