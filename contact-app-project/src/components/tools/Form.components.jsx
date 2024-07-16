import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import * as yup from "yup";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from "../../store/services/EndPoints/contact.endpoints";
const FormComponents = ({ editData, handleClose }) => {
  const [addFun, data] = useCreateContactMutation();
  const [updateFun, updateData] = useUpdateContactMutation();
  const initialValue = {
    name: editData.upData?.name || "",
    email: editData.upData?.email || "",
    phone: editData.upData?.phone || "",
    address: editData.upData?.address || "",
  };
  const closeRef = useRef();
  const handleSubmit = async (values) => {
    if (editData.edit) {
      await updateFun({ id: editData.upData?.id, ...values });
    } else {
      await addFun(values);
    }
    closeRef.current.click();
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .min(9, "Number must be at least 9 digits")
      .max(11, "Number must be at least 9 digits"),
    address: yup.string().required("Address is required"),
  });
  useEffect(() => {
    console.log(updateData);
  }, [updateData]);
  return (
    <div className="h-full">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values, handleBlur, handleChange, isSubmitting, handleReset }) => (
          <>
            <Form>
              <div className="grid w-full items-center gap-5">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="focus-visible:ring-blue-400"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="name"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-blue-400"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="email"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="focus-visible:ring-blue-400"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="phone"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    value={values.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="focus-visible:ring-blue-400"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="address"
                    className=" text-danger text-xs"
                  />
                </div>
                <div className=" flex justify-between items-center gap-x-3">
                  <SheetClose asChild ref={closeRef}>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={handleClose}
                      className=" w-auto  bg-transparent text-basic border-blue-300 hover:bg-blue-50 hover:text-basic border mt-3 block duration-300 active:scale-95"
                    >
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-auto  bg-basic mt-3 flex items-center gap-x-2 hover:bg-blue-400 duration-300 active:scale-95"
                  >
                    {isSubmitting && (
                      <Loader2 className=" ml-2 h-4 w-4 animate-spin" />
                    )}
                    {editData?.edit ? "Edit" : "Create"}
                  </Button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormComponents;
