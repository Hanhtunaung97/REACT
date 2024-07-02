import React from "react";
import ButtonComponents from "./Button.components";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";
const ContactCardComponents = ({ data,handleDelete }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };
  // const handleDelete=async() => {
  //   const res=await deleteContactData(data.id)
  //   console.log(res);
  //   if(res){
  //     nav("/home")
  //   }
  // }
  return (
    <div className=" w-1/3 shadow p-3 hover:bg-white hover:text-blue-500 hover:border-blue-400 flex items-center justify-between">
      <ButtonComponents
        onClick={handleRedirect}
        style={
          "!w-1/2  mx-0 hover:bg-white hover:text-blue-500 hover:border-blue-400 "
        }
      >
        <div>
          <h1 className=" font-heading font-semibold">{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </ButtonComponents>
      <div className=" flex items-center gap-x-3">
        <ButtonComponents
          onClick={handleEdit}
          style={
            "!w-auto duration-200 bg-blue-50  active:bg-blue-50  hover:bg-white hover:border-blue-400 group"
          }
        >
          <CiEdit className=" stroke-blue-500 stroke-2 " />
        </ButtonComponents>
        <ButtonComponents
        onClick={handleDelete.bind(this,data.id)}
          style={
            "!w-auto duration-200 bg-blue-50  active:bg-blue-50  hover:bg-white hover:border-blue-400 group"
          }
        >
          <CiTrash className=" stroke-blue-500 stroke-2 " />
        </ButtonComponents>
      </div>
    </div>
  );
};

export default ContactCardComponents;
