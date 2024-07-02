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
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [deleteItem]);
  const deleteContact = async (id) => {
    console.log("delete Id", id);
    const res = await deleteContactData(id);
    console.log(res);
    if (res) {
    }
    setDeleteItem((pre) => !pre);
  };
  return (
    <div className=" flex flex-col justify-center items-center p-3 gap-y-5">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            items.data.map((el) => (
              <ContactCardComponents
                deleteContact={deleteContact}
                key={el.id}
                item={el}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
