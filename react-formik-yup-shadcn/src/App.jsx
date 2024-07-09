import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const App = () => {
  const [date, setDate] = useState();
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(4, "password must be longer than 4")
      .max(8, "password must be shorter than 8")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
  });
  return (
    <div className=" flex flex-col justify-center items-center gap-y-5 my-10">
      <Formik
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "email is required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "invalid email address";
        //   }
        //   if (!values.password) {
        //     errors.password = "password is required";
        //   }
        //   return errors;
        // }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <Form className=" flex flex-col gap-y-5 w-[400px]">
              <label htmlFor="email">Email</label>
              <Field
                className="p-2 border border-blue-300 rounded-lg outline-none"
                type="text"
                name="email"
                id="email"
              />
              <ErrorMessage
                component={"p"}
                className=" text-red-500"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <Field
                className="p-2 border border-blue-300 rounded-lg outline-none"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                component={"p"}
                className=" text-red-500"
                name="password"
              />
              <button
                disabled={isSubmitting}
                className=" mx-auto w-auto border border-blue-400 px-3 py-1 rounded-lg"
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
      <Button variant="outline">BUTTON</Button>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
