import React from "react";
import { AuthGuard, LottieComponents, NavComponents } from "../../components";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const HomePage = () => {
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
            <div className="mt-5 bg-white shadow rounded h-[500px] justify-center items-center flex flex-col gap-y-3">
              <LottieComponents />
              <p className=" text-blue-300 font-headings  text-lg">
                There is no lists....
              </p>
            </div>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Contact Information</SheetTitle>
              <SheetDescription className=" text-basic">
                Make your Contact here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
