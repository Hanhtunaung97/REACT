import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { getBookData } from "../../service/bookUrl.service";
import Loading from "../../Loading";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const handleBackBtn = () => {
    nav(-1);
  };
  const { data, error, loading } = useFetch(getBookData, `books/${id}`);
  console.log(data);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              <button
                onClick={handleBackBtn}
                className=" mb-3 border border-green-300 rounded-none px-3 py-1 active:bg-green-200 active:text-white active:scale-95 duration-200 hover:bg-green-100 hover:text-green-700"
              >
                Go Back
              </button>
              <div className="border-2 border-slate-300 rounded-none min-h-screen ">
                <img
                  src={data.image}
                  alt="novels"
                  className=" w-full h-1/3 object-center"
                />
                <div className="  text-green-600 p-3 ">
                  <h3 className="text-2xl font-semibold mb-1">{data.book}</h3>
                  <p className=" text-green-400">{data.author}</p>
                  <div className=" text-slate-500 ">
                    <p className=" mb-1 font-semibold">{data.slug}</p>
                    <p className=" mb-0 text-slate-400">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
