import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLogOutMutation } from "../../store/services/EndPoints/auth.endpoints";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const navComponents = () => {
  const nav = useNavigate();
  const [logoutFun, data] = useLogOutMutation();
  const handleLogoutBtn = () => {
    localStorage.removeItem("token");
    logoutFun();
    nav("/");
    toast.success("Logout Successfully !");
  };

  return (
    <nav className=" fixed z-50 w-full h-16 border-b shadow bg-white ">
      <div className=" container mx-auto flex justify-between items-center  h-full">
        <h1 className=" font-headings font-semibold text-basic text-lg">
          MMS-IT
        </h1>
        <div className="flex justify-between items-center gap-x-5 h-full">
          <Button
            onClick={handleLogoutBtn}
            variant="outline"
            className=" w-auto bg-transparent text-basic border border-blue-300 duration-300 active:scale-95 hover:bg-basic hover:text-white"
          >
            Sign Out
          </Button>
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
