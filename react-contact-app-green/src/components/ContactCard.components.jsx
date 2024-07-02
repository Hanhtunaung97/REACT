import React from "react";
import { useNavigate } from "react-router-dom";
import { CiTrash, CiEdit } from "react-icons/ci";

const ContactCardComponents = ({ item, deleteContact }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${item.id}`);
  };
  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, item, id: item.id } });
  };
  const handleDelete = () => {
    deleteContact(item.id);
  };
  return (
    <div className="w-1/3 flex items-center justify-between  h-auto text-green-500 border shadow text-center rounded-lg p-5">
      <button
        onClick={handleRedirect}
        className=" w-1/2 block  active:scale-95 hover:scale-95 duration-200 hover:bg-green-500 hover:text-white rounded-lg "
      >
        <div className="  p-2">
          <h3 className=" font-heading  font-semibold">{item.name}</h3>
          <p>{item.phone}</p>
        </div>
      </button>
      <div className="flex items-center gap-x-5 justify-center ">
        <button
          onClick={handleEdit}
          className="hover:scale-95 duration-200 hover:bg-green-500 hover:text-white rounded-lg p-2 border-green-100 active:scale-110 border-2"
        >
          <CiEdit className=" w-4 h-4 stroke-2" />
        </button>
        <button
          onClick={handleDelete}
          className="hover:scale-95 duration-200 hover:bg-green-500 hover:text-white rounded-lg p-2 border-green-100 active:scale-110 border-2"
        >
          <CiTrash className=" w-4 h-4 stroke-2" />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
