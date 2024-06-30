import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../service/contact.service";
import { ErrorComponents, LoadingComponents } from "../components";

const ContactDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState({
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getSingleData(id);
      console.log(res);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);

  return (
    <div className=" flex flex-col justify-center items-center p-3 gap-y-5">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            <div className=" w-2/6 h-auto text-green-500 border shadow text-center rounded-lg p-3 hover:scale-95 duration-200 hover:bg-green-500 hover:text-white ">
              <h3 className=" font-heading  font-semibold">
                {items.data?.name}
              </h3>
              <p>{items.data?.phone}</p>
              <p>{items.data?.email}</p>
              <p>{items.data?.address}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactDetailPage;
