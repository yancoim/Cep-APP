import axios from "axios";
import Home from "@/pages";

export const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})