import React, { useEffect, useState } from "react";
import { getContactData } from "../service/contact.service";
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
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      console.log(res);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, []);
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
              <ContactCardComponents key={el.id} item={el} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
