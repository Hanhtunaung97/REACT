import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading";
import { apiContext } from "../../store/ApiContextProvider";

const DetailBookPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { loading, error, data } = useContext(apiContext);
  const [item, setItem] = useState();
  useEffect(() => {
    const finder = data?.find((el) => el.slug === slug);
    setItem(finder);
  }, [slug, data]);
  const nav = useNavigate();
  const handleBackBtn = () => {
    nav(-1);
  };
  return (
    <div>
      <button
        onClick={handleBackBtn}
        className=" mb-3 border border-green-300 rounded-none px-3 py-1 active:bg-green-200 active:text-white active:scale-95 duration-200 hover:bg-green-100 hover:text-green-700"
      >
        Go Back
      </button>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="border-2 border-slate-300 rounded-none   overflow-y-hidden">
              <img
                src={item?.image}
                alt="novels"
                className=" w-full h-2/3  object-center"
              />
              <div className="  text-green-600 p-3 ">
                <h3 className=" text-xl font-semibold mb-1">{item?.book}</h3>
                <p className=" text-sm  text-green-400">{item?.author}</p>
                <div className=" text-slate-500 ">
                  <p className=" mb-1 font-semibold">{item?.slug}</p>
                  <p className=" mb-0 text-slate-400">{item?.description}</p>
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
