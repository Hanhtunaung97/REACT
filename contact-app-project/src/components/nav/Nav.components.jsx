import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navComponents = () => {
  return (
    <nav className=" fixed w-full h-16 border-b shadow bg-white">
      <div className=" container mx-auto flex justify-between items-center  h-full">
        <h1 className=" font-headings font-semibold text-basic text-lg">MMS-IT</h1>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default navComponents;
