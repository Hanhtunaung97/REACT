import React from "react";
import {
  AuthGuard,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  LottieComponents,
  NavComponents,
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
  console.log(isLoading, isError, data, isSuccess);
  const contactData = data?.contacts?.data;
  console.log(contactData);
  return (
    <AuthGuard>
      <Sheet>
        <div className=" h-screen bg-slate-50">
          <NavComponents />
          <div className="h-16"></div>
          <div className="container mx-auto">
            <SheetTrigger asChild>
              <div className="mt-5 flex justify-end items-center ">
                <Button className="flex gap-x-2 bg-basic active:scale-90 duration-300 hover:bg-blue-400">
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
                    {contactData.length !== 0 ? (
                      <h1>hello</h1>
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
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-basic  font-headings">
                Contact Information
              </SheetTitle>
              <SheetDescription className=" text-basic font-light">
                Make your Contact here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 h-full">
              <FormComponents />
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
