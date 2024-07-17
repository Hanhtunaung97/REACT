import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../store/services/EndPoints/auth.endpoints";
import {
  AuthGuard,
  ErrorComponents,
  LoadingComponents,
} from "../../components";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
const RegisterPage = () => {
  const nav = useNavigate();
  const [registerFun, data] = useSignUpMutation();
  const { toast } = useToast();
  const initialValue = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const handleSubmit = async (values) => {
    // console.log(values);
    await registerFun(values);
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be longer than 8 letters"),
    password_confirmation: yup
      .string()
      .required("need to confirm your password !")
      .oneOf(
        [yup.ref("password"), null],
        "Confirm password must be same your password"
      ),
  });
  useEffect(() => {
    if (data.error) {
      const msg = data.error.data.message;
      console.log(msg);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: msg,
        action: (
          <ToastAction altText="Sign In">
            <Link to={"/"}>Sign In</Link>
          </ToastAction>
        ),
      });
    } else if (data.data) {
      nav("/");
    }
  }, [data]);
  return (
    <AuthGuard path={"/register"}>
      <div className=" w-full  xl:w-3/5 xl:mx-auto my-60 md:my-0 md:flex justify-center items-center h-full">
        {data.isLoading ? (
          <LoadingComponents />
        ) : (
          <>
            {data.isError ? (
              <>
                <ErrorComponents />
                <Toaster />
              </>
            ) : (
              <Card className=" block w-full basis-1/2">
                <CardHeader className=" flex justify-between items-center flex-row mb-3 ">
                  <CardTitle className=" font-headings">Sign Up</CardTitle>
                  <CardDescription className="text-basic">
                    <Link to={"/"}>I already have an account!</Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                  >
                    {({
                      handleBlur,
                      handleChange,
                      isSubmitting,
                      handleReset,
                      values,
                    }) => (
                      <>
                        <Form>
                          <div className="grid w-full items-center gap-5">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="name"
                                type="name"
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
                            <div className="flex flex-col space-y-1.5">
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
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="password">Password</Label>
                              <Input
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className="focus-visible:ring-blue-400"
                              />{" "}
                              <ErrorMessage
                                component={"p"}
                                name="password"
                                className=" text-danger text-xs"
                              />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="password_confirmation">
                                Confirm Password
                              </Label>
                              <Input
                                value={values.password_confirmation}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm your password"
                                className="focus-visible:ring-blue-400"
                              />{" "}
                              <ErrorMessage
                                component={"p"}
                                name="password_confirmation"
                                className=" text-danger text-xs"
                              />
                            </div>
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className=" w-full bg-basic mt-3 flex items-center gap-x-5"
                            >
                              {isSubmitting && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Sign Up
                            </Button>
                          </div>
                        </Form>
                      </>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </AuthGuard>
  );
};

export default RegisterPage;
