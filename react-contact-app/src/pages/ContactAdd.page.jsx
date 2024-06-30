import React, { useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";
import { addNewContact } from "../service/contact.service";
import { useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addNewContact(formData);
    console.log(res);
    if(res){
      nav("/home")
    }
    // console.log(formData);
  };
  return (
    <div className="Center ">
      <div className=" w-2/5 h-auto p-5 border shadow rounded-lg">
        <h1 className=" text-center text-2xl font-heading text-green-800 font-semibold">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
          <InputFormComponents
            label={"Name :"}
            type={"text"}
            name={"name"}
            placeholder={"Your name"}
            value={formData.name}
            onChange={handleInput}
          />
          <InputFormComponents
            label={"Phone :"}
            type={"number"}
            name={"phone"}
            placeholder={"+959....."}
            value={formData.phone}
            onChange={handleInput}
          />
          <InputFormComponents
            label={"Email :"}
            type={"email"}
            name={"email"}
            placeholder={"example@gmail.com"}
            value={formData.email}
            onChange={handleInput}
          />
          <InputFormComponents
            label={"Address :"}
            type={"text"}
            name={"address"}
            placeholder={"Your address"}
            value={formData.address}
            onChange={handleInput}
          />
          <ButtonComponents type="submit">Create</ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
