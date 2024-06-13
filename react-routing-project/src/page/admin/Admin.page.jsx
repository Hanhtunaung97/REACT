import React, { useEffect, useState } from "react";
import { Auth } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await Auth("users", formData);
    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };
  const handleEmailInput = (e) => {
    setFormData((pre) => ({ ...pre, email: e.target.value }));
  };
  const handlePasswordInput = (e) => {
    setFormData((pre) => ({ ...pre, password: e.target.value }));
  };
  return (
    <div>
      <div className=" min-h-screen w-full  p-5">
        <form
          onSubmit={handleFormSubmit}
          className=" p-3 border-2 rounded-lg border-green-200 w-2/3 mx-auto flex flex-col gap-5 justify-center items-center"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className=" text-green-500 font-semibold">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleEmailInput}
              className=" p-2 border-2 border-green-100 outline-green-300 rounded-lg"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className=" text-green-500 font-semibold">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handlePasswordInput}
              className=" p-2 border-2 border-green-100 outline-green-300 rounded-lg"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <button
              className=" mb-3 rounded-lg text-green-500 border border-green-300  px-3 py-1 active:bg-green-200 active:text-white active:scale-95 duration-200 hover:bg-green-100 hover:text-green-700"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
