import { Usuario } from "@/interfaces/usuario";
import api from "@/services/api"
import { AxiosPromise } from "axios";

export const getUser = async (setData:any, setLoading:any, setError:any) => {
    setLoading(true);
    try{
        const response = await api.get("/user/all");
        setData(response?.data);
        setLoading(false);
        return response;
    }catch (e){
        setError(true);
        setLoading(false);
    }
}