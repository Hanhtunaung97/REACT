import React from "react";
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
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../store/services/EndPoints/auth.endpoints";
import { ErrorComponents, LoadingComponents } from "../../components";
const LoginPage = () => {
  const [signInFun, { isLoading, isError, isSuccess, data }] =
    useSignInMutation();
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    console.log(values);
    await signInFun(values);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be longer than 8 letters"),
  });
  return (
    <div className=" w-3/5 mx-auto  flex justify-center items-center h-full">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {isError ? (
            <ErrorComponents>{isError.message}</ErrorComponents>
          ) : (
            <Card className=" basis-1/2">
              <CardHeader className=" flex justify-between items-center flex-row mb-3 ">
                <CardTitle>Sign In</CardTitle>
                <CardDescription className="text-basic">
                  <Link to={"/register"}>I don't have an account!</Link>
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
                  }) => (
                    <>
                      <Form>
                        <div className="grid w-full items-center gap-5">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Enter your email"
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
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="password"
                              type="password"
                              name="password"
                              placeholder="Enter password"
                            />{" "}
                            <ErrorMessage
                              component={"p"}
                              name="email"
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
                            Sign In
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
  );
};

export default LoginPage;
