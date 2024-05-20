import { Api } from "./baseUrl.service";

export const getBookData = async (arg) => {
  try {
    const { data } = await Api.get(arg);
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
