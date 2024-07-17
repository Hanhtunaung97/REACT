import React, { useState } from "react";
import {
  AuthGuard,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  LottieComponents,
  NavComponents,
  TableComponents,
} from "../../components";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetAllContactsQuery } from "../../store/services/EndPoints/contact.endpoints";

const HomePage = () => {
  const { isLoading, isError, data, isSuccess } = useGetAllContactsQuery();
  const [editData, setEditData] = useState({
    edit: false,
    upData: null,
  });
  // console.log(isLoading, isError, data, isSuccess);
  const contactData = data?.contacts?.data;
  // console.log(contactData);
  const handleEditForm = (id) => {
    console.log(id);
    const contactsData = data?.contacts?.data;
    const finder = contactsData.find((el) => el.id === id);
    console.log(finder);
    setEditData({ edit: true, upData: finder });
  };
  const handleClose = () => {
    setEditData({ edit: false, upData: null });
  };
  return (
    <AuthGuard>
      <Sheet>
        <div className=" h-screen bg-slate-50">
          <NavComponents />
          <div className="h-16"></div>
          <div className="container mx-auto h-full">
            <SheetTrigger asChild>
              <div className="mt-5 flex justify-end items-center ">
                <Button className="flex gap-x-2 bg-basic text-white active:scale-90 duration-300 hover:bg-blue-400">
                  <FaPlus /> Create Contact
                </Button>
              </div>
            </SheetTrigger>
            {isLoading ? (
              <LoadingComponents />
            ) : (
              <>
                {isError ? (
                  <ErrorComponents />
                ) : (
                  <>
                    {contactData?.length !== 0 ? (
                      <TableComponents
                        handleEditForm={handleEditForm}
                        apiData={contactData}
                      />
                    ) : (
                      <div className="mt-5 bg-white shadow rounded h-[500px] justify-center items-center flex flex-col gap-y-3">
                        <LottieComponents />
                        <p className=" text-blue-300 font-headings  text-lg">
                          There is no lists....
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <SheetContent onClose={handleClose}>
            <SheetHeader>
              <SheetTitle className="text-basic  font-headings">
                Contact Information
              </SheetTitle>
              <SheetDescription className=" text-basic font-light">
                Make your Contact here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 h-full">
              <FormComponents editData={editData} handleClose={handleClose} />
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
