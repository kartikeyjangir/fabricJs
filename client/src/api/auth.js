import api from "./index";
import axios from "axios";

export const addUser = async (formData) =>
  await axios.post(api + "/user/signup", formData);
export const verifyUser = async (data) =>
  axios.post(api + "/user/signin", data);
