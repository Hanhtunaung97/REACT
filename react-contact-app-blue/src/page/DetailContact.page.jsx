import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../service/contact.service";
import LoadingComponents from "../components/Loading.components";
import ErrorComponents from "../components/Error.components";

const DetailContactPage = () => {
  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getSingleData(id);
      // console.log(res);
      if (res) {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      } else {
        setItems((pre) => ({ ...pre, error: res.msg }));
      }
    })();
  }, [id]);
  return (
    <div className="w-2/5">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <div>
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            <div className=" w-full text-blue-500 flex flex-col gap-y-3 justify-center items-center border border-blue-200 rounded-lg p-5 shadow hover:bg-blue-50  hover:shadow hover:border-0 hover:scale-110">
              <h1 className=" font-heading font-semibold">{items.data.name}</h1>
              <p>{items.data.phone}</p>
              <p>{items.data.email}</p>
              <p>{items.data.address}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailContactPage;
