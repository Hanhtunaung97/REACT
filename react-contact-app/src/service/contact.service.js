import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const addNewContact = async (newData) => {
  try {
    const res = await api.post("/contact", newData);
    if (res.data) {
      return res.data.success;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const getSingleData = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    // console.log(res);
    if (res.data) {
      return res.data.contact;
    }
    console.log(res);
  } catch (error) {
    return { error: true, msg: error.message };
  }
};
