import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiEdit, CiTrash } from "react-icons/ci";
import { SheetTrigger } from "@/components/ui/sheet";
import SweetAlert2 from "react-sweetalert2";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useDeleteContactMutation } from "../../store/services/EndPoints/contact.endpoints";
const TableComponents = ({ apiData, handleEditForm }) => {
  const { toast } = useToast();
  const [delFun, data] = useDeleteContactMutation();
  // console.log(data);
  const [swalProps, setSwalProps] = useState({});
  const handleEdit = (id) => {
    handleEditForm(id);
  };
  const handleDelete = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2f89fc",
      cancelButtonColor: "#ff304f",
      confirmButtonText: "Yes, delete it!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        setSwalProps({
          show: false,
        });
        const res = await delFun(id);
        if (res.data?.success) {
          // console.log(res.data.message);
          const msg = res.data.message;
          toast({
            variant: "destructive",
            title: "Your contact successfully deleted !",
            description: msg,
          });
        }
      },
    });
  };
  return (
    <div className="mt-5 bg-white rounded-lg p-5 shadow">
      <Table>
        <TableCaption className="mt-10 font-semibold text-basic">
          A list of your Contact Information.
        </TableCaption>
        <TableHeader>
          <TableRow className="text-white hover:bg-blue-400 ">
            <TableHead className="w-[100px] text-white rounded-s-lg">
              No
            </TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-right text-white">Phone</TableHead>
            <TableHead className="text-white">Address</TableHead>
            <TableHead className="text-right text-white rounded-e-lg">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" border-b ">
          {apiData?.map((el) => (
            <TableRow key={el.id} className="hover:bg-blue-50">
              <TableCell className="font-medium">{el.id}</TableCell>
              <TableCell className="font-medium">{el.name}</TableCell>
              <TableCell className="font-light">{el.email}</TableCell>
              <TableCell className="text-right font-light">
                {el.phone}
              </TableCell>
              <TableCell className="font-light">{el.address}</TableCell>
              <TableCell className=" font-semibold flex justify-end gap-x-3 items-center">
                <SheetTrigger asChild>
                  <button
                    onClick={() => handleEdit(el.id)}
                    className=" border border-basic p-1 rounded hover:bg-basic group active:scale-90 duration-200"
                  >
                    <CiEdit className=" h-4 w-4 text-basic group-hover:text-white stroke-1 pointer-events-none" />
                  </button>
                </SheetTrigger>
                <button
                  onClick={handleDelete.bind(null, el.id)}
                  className=" border border-danger p-1 rounded hover:bg-danger group active:scale-90 duration-200"
                >
                  <CiTrash className=" h-4 w-4 text-danger group-hover:text-white stroke-1 pointer-events-none" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SweetAlert2 {...swalProps} />
      <Toaster />
    </div>
  );
};

export default TableComponents;
