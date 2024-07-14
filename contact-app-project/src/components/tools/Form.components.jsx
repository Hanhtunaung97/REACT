import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as yup from "yup";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCreateContactMutation } from "../../store/services/EndPoints/contact.endpoints";
const FormComponents = () => {
  const [addFun, data] = useCreateContactMutation();
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const handleSubmit = async (values, action) => {
    console.log(values);
    await addFun(values);
    action.reset();
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
    console.log(data);
  }, [data]);
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
                  <Button
                    variant="outline"
                    type="button"
                    onClick={handleReset}
                    className=" w-auto  bg-transparent text-basic border-blue-300 hover:bg-blue-50 hover:text-basic border mt-3 block duration-300 active:scale-95"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-auto  bg-basic mt-3 flex items-center gap-x-2 hover:bg-blue-400 duration-300 active:scale-95"
                  >
                    {isSubmitting && (
                      <Loader2 className=" ml-2 h-4 w-4 animate-spin" />
                    )}
                    Create
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
