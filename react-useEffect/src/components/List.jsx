import React from "react";

const List = ({ course: { id, title, fee, status, student_count } }) => {
  return (
    <div className=" text-center mb-3 p-3 border border-gray-200 flex">
      <div>
        {title} : {fee}
      </div>
    </div>
  );
};

export default List;
