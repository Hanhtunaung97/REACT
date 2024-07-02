import React, { useEffect, useState } from "react";
import { deleteContactData, getContactData } from "../service/contact.service";
import {
  ContactCardComponents,
  ErrorComponents,
  LoadingComponents,
} from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [deleteItem, setDeleteItem] = useState(false);
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      // console.log(res);
      if (res) {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      }
    })();
  }, [deleteItem]);
  const handleDelete = async (id) => {
    await deleteContactData(id);
    setDeleteItem((pre) => !pre);
  };
  return (
    <div className=" w-full h-full ">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <div className=" flex gap-5  h-full flex-col items-center justify-center">
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            items.data?.map((el) => (
              <ContactCardComponents
                handleDelete={handleDelete}
                key={el.id}
                data={el}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
