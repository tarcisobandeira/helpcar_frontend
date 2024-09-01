import { useQuery } from "react-query";
import { AxiosPromise } from "axios";
import api from "@/services/api";
import { Categoria } from "@/interfaces/categoria";

const getData = async (): AxiosPromise<Categoria[]>=> {
    const response = api.get("/categoria/all");
    return response;
}

export function GetAllCategoria(){
    const query = useQuery({
        queryFn: getData,
        queryKey: ['help-car-categoria'],
        retry: 2
    });
    
    return{
        ...query,
        data: query.data?.data
    } 
}