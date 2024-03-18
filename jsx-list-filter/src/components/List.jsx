import React from "react";

const List = ({ id, title, rating }) => {
    const backGroundClasses=rating <=5 ? 'bg-red-100 border-red-300':'bg-sky-100'
  return (
   rating >=5 &&
   <div className={` ${backGroundClasses} border-s-4 border-sky-300 font-mono font-semibold p-2 mb-3`}>
   {`  ${title} ${"-"} ${rating}`}
 </div>
  );
};

export default List;
