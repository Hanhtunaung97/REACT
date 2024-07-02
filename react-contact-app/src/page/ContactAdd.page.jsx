import React, { useEffect, useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";
import { addNewContact, updateContactData } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const location = useLocation();
  // console.log(location);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.data;
      setFormData({ name, phone, email, address });
    }
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await updateContactData(location.state.id, formData);
      console.log(res);
    } else {
      res = await addNewContact(formData);
    }
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
        {location.state?.edit ? "Edit Your Contact" : "Create Your Contact"}
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
        <ButtonComponents type="submit">
          {location.state?.edit ? "Edit" : "Create"}
        </ButtonComponents>
      </form>
    </div>
  );
};

export default ContactAddPage;
