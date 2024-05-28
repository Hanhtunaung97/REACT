import React from "react";

const BookListComponents = ({
  data: { id, book, image, author, slug, description },
}) => {
  return (
    <div className="border-2 border-slate-300 rounded-none  w-[300px] h-[600px] overflow-y-hidden">
      <img src={image} alt="novels" className=" w-full h-2/3  object-center" />
      <div className="  text-green-600 p-3 ">
        <h3 className=" text-xl font-semibold mb-1">{book}</h3>
        <p className=" text-sm  text-green-400">{author}</p>
        <div className=" text-slate-500 ">
          <p className=" mb-1 font-semibold">{slug}</p>
          <p className=" mb-0 text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookListComponents;
