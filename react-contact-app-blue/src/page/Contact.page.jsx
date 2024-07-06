import React, { useEffect, useState } from "react";
// import { deleteContactData, getContactData } from "../service/contact.service";
import {
  ContactCardComponents,
  ErrorComponents,
  LoadingComponents,
} from "../components";
import {
  useDeleteContactMutation,
  useGetContactQuery,
} from "../store/services/endpoints/contact.endpoints";

const ContactPage = () => {
  const { isError, isLoading, data, isSuccess } = useGetContactQuery();
  const [deleteFunction, deleteData] = useDeleteContactMutation();
  const [deleteItem, setDeleteItem] = useState(false);

  // const [items, setItems] = useState({
  //   loading: true,
  //   data: null,
  //   error: null,
  // });
  // useEffect(() => {
  // (async () => {
  //   // setItems((pre) => ({ ...pre, loading: true }));
  //   // const res = await getContactData();
  //   // // console.log(res);
  //   // if (res) {
  //   //   setItems((pre) => ({ ...pre, loading: false, data: res }));
  //   // } else {
  //   //   setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
  //   // }
  // })();
  // }, [deleteItem]);

  const handleDelete = async (id) => {
    await deleteFunction(id);
    setDeleteItem((pre) => !pre);
  };
  return (
    <div className=" w-full h-full ">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <div className=" flex gap-5  h-full flex-col items-center justify-center">
          {isError ? (
            <ErrorComponents>{isError.message}</ErrorComponents>
          ) : (
            data.contacts.data.map((el) => (
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
