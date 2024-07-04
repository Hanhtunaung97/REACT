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
import { issue, login, processing } from "../store/slice/auth.slice";

const LoginPage = () => {
  const { loading, data, error, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();
  // const { dealingApi, loading, error, data } = useApi(Login);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  // console.log(store);
  useEffect(() => {
    data && nav("/home");
  }, [data]);
  const handleSubmit =async (e) => {
    e.preventDefault();
    dispatch(processing())
    const res=await Login(formData)
    if(res.data){
      dispatch(login(res.data))
    }else{
      dispatch(issue(res.msg))
    }
    // loginAction(dispatch, formData);
    // dealingApi(formData);
    // console.log(formData);
  };
  return (
    <PreventComponents go={"/home"} tokenCheck={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className=" w-2/5 h-auto space-y-5">
              <h1 className=" font-heading text-2xl text-center font-bold text-blue-700">
                Login Your Contact
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
                <InputFormComponents
                  onChange={handleInputChange}
                  value={formData.email}
                  label={"Enter Your Email"}
                  type={"email"}
                  name={"email"}
                  placeholder="example@gmail.com"
                />
                <InputFormComponents
                  onChange={handleInputChange}
                  value={formData.password}
                  label={"Enter Password"}
                  type={"password"}
                  name={"password"}
                  placeholder="password"
                />
                <ButtonComponents type="submit">Login</ButtonComponents>
              </form>
              <p className=" text-blue-400 font-heading ">
                You haven't account yet ! plz sign up{" "}
                <button
                  onClick={() => nav("/register")}
                  className=" text-blue-500 underline active:underline-offset-4 duration-200"
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

export default LoginPage;
