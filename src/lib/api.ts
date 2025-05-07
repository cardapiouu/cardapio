import axios from "axios";

const config = {
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const api = axios.create(config);
