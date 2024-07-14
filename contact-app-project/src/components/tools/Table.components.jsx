import React from "react";
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
const TableComponents = ({ data }) => {
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
          {data.map((el) => (
            <TableRow key={el.id}>
              <TableCell className="font-medium">{el.id}</TableCell>
              <TableCell className="font-medium">{el.name}</TableCell>
              <TableCell className="font-light">{el.email}</TableCell>
              <TableCell className="text-right font-light">
                {el.phone}
              </TableCell>
              <TableCell className="font-light">{el.address}</TableCell>
              <TableCell className=" font-semibold flex justify-end gap-x-3 items-center">
                <button className=" border border-basic p-1 rounded hover:bg-basic group active:scale-90 duration-200">
                  <CiEdit className=" h-4 w-4 text-basic group-hover:text-white stroke-1 pointer-events-none" />
                </button>
                <button className=" border border-danger p-1 rounded hover:bg-danger group active:scale-90 duration-200">
                  <CiTrash className=" h-4 w-4 text-danger group-hover:text-white stroke-1 pointer-events-none" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponents;
