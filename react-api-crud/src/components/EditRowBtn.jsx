import React, { useContext, useState } from "react";
import { dataContext } from "../contexts/DataContext";

const EditRowBtn = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggleEditDrawer,setEditCourse } = useContext(dataContext);
  const handleEditBtn =async () => {
    setIsLoading(true);
    const res=await fetch('http://localhost:5173/api/courses/'+id)
    const json=await res.json();
    setEditCourse(json);
    toggleEditDrawer();
    setIsLoading(false);
  };
  return (
    <button
      onClick={handleEditBtn}
      disabled={isLoading}
      type="button"
      className="record-edit-btn disabled:opacity-75 disabled:pointer-events-none group px-3 py-2 text-xs font-medium text-center text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 block group-disabled:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 hidden group-disabled:block animate-spin"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </button>
  );
};

export default EditRowBtn;
