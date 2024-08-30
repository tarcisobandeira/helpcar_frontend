import { Usuario } from "@/interfaces/usuario";
import api from "@/services/api"
import { AxiosPromise } from "axios";

const getUser = async (): AxiosPromise<Usuario[]> => {
    const response = await api.get("/user/all");
    return response;
}