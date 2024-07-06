import React, { useEffect, useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";
import { addNewContact, updateContactData } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddContactMutation,
  useEditContactMutation,
} from "../store/services/endpoints/contact.endpoints";

const ContactAddPage = () => {
  const [addFunction, { isError, isLoading, data }] = useAddContactMutation();
  console.log(isError, isLoading, data);
  const [editFunction] = useEditContactMutation();
  const nav = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.item;
      setFormData({ name, phone, email, address });
    }
  }, [location]);
  const handleInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editFunction(location.state.id, formData);
      console.log(res);
    } else {
      res = await addFunction(formData);
    }
    if (res) {
      nav("/home");
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
