import { Api } from "./baseUrl.service";

export const Auth = async (arg, form) => {
  try {
    const { data } = await Api.get(arg);
    const finder = data.find((el) => el.email === form.email);
    if (!finder) {
      throw new Error("Email not correct!");
    }
    const comparePassword = finder.password === form.password;
    if (!comparePassword) {
      throw new Error("Password not correct");
    }
    // console.log(data);
    return finder;
  } catch (error) {
    throw new Error(error.message);
  }
};
