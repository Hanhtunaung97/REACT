import { Api } from "./baseUrl.service";

export const getBookData = async (arg) => {
  try {
    const { data } = await Api.get(arg);
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
