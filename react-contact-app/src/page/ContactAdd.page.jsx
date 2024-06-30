import React, { useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";
import { addNewContact } from "../service/contact.service";
import { useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addNewContact(formData);
    console.log(res);
    // console.log(formData);
    if (res) {
      nav("/home");
    }
  };
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className=" h-auto w-2/6 space-y-5">
      <h1 className=" text-xl font-heading text-center font-bold text-blue-700">
        Create Your Contact
      </h1>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5 ">
        <InputFormComponents
          onChange={handleInputChange}
          label={"Name"}
          type={"name"}
          placeholder=" Your Name"
          name={"name"}
          value={formData.name}
        />
        <InputFormComponents
          onChange={handleInputChange}
          label={"Email"}
          type={"email"}
          placeholder="example@gmail.com"
          name={"email"}
          value={formData.email}
        />
        <InputFormComponents
          onChange={handleInputChange}
          label={"Phone"}
          type={"number"}
          placeholder="+95979...."
          name={"phone"}
          value={formData.phone}
        />
        <InputFormComponents
          onChange={handleInputChange}
          label={"Address"}
          type={"text"}
          placeholder="Your address"
          name={"address"}
          value={formData.address}
        />
        <ButtonComponents type="submit">Create</ButtonComponents>
      </form>
    </div>
  );
};

export default ContactAddPage;
