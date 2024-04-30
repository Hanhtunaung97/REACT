import React, { useContext, useRef, useState } from "react";
import { dataContext } from "../contexts/DataContext";

const CreateDrawer = () => {
  const { createDrawer, toggleCreateDrawer, addCourse } =
    useContext(dataContext);
  const handleCreateDrawerBtn = () => {
    toggleCreateDrawer();
  };
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const handleForm = async (event) => {
    event.preventDefault();
    // console.log(formRef.current);
    const formData = new FormData(formRef.current);
    const newCourse = {
      title: formData.get("title"),
      short_name: formData.get("short_name"),
      fee: formData.get("fee"),
    };
    // console.log(newCourse);
    setIsLoading(true);
    const res = await fetch("http://localhost:5173/api/courses", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newCourse),
    });
    const json = await res.json();
    addCourse(json);
    setIsLoading(false);
    formData.get("close") && toggleCreateDrawer();
    formRef.current.reset();
  };
  return (
    <div
      id="drawer-right-example"
      className={`shadow fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
        createDrawer && "translate-x-full"
      }`}
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
      aria-hidden="true"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-4 h-4 me-2.5 pointer-events-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Create New Courses
      </h5>
      <button
        type="button"
        onClick={handleCreateDrawerBtn}
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form ref={formRef} onSubmit={handleForm} id="createCourseForm">
        <div className="mb-5">
          <label
            htmlFor="courseTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Title
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="courseTitle"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-75"
            placeholder="eg. Premium Ui Design"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="shortName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Short Name
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="shortName"
            name="short_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-75"
            placeholder="eg.BUD"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fee"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fee
          </label>
          <input
            disabled={isLoading}
            type="number"
            id="fee"
            name="fee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-75"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <input
              name="close"
              id="default-checkbox"
              type="checkbox"
              defaultValue
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm  text-gray-900 dark:text-gray-300 font-semibold"
            >
              Close after submit!
            </label>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="group flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-75 disabled:before:w-4 disabled:before:h-4 disabled:before:rounded-full disabled:before:border-2 disabled:before:border-blue-100 disabled:before:border-l-blue-400 disabled:before:animate-spin"
          >
            <span className="hidden group-disabled:inline">loading..</span>
            <span className="inline group-disabled:hidden">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDrawer;
