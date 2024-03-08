import axios from "axios";

export const peinadosApi = axios.create({
  baseURL: "http://cbinfo.no-ip.info:9018",
  headers: {
    "Content-Type": "text/plain; charset=UTF-8; application/json",
    // "Content-Type": "application/json",
    Accept: "*",
    Authorization: localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : "NADA",
  },
});
