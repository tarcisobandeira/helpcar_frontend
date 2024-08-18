import { useQuery } from "react-query";
import { Usuario } from "@/interfaces/usuario";
import axios, { AxiosPromise, AxiosResponse } from "axios";

const API_URL = "http://192.168.1.162:8080"

const getData = async (): AxiosPromise<Usuario[]>=> {
    const response = axios.get(API_URL + "/user/all");
    return response;
}

export function GetAllUser(){
    const query = useQuery({
        queryFn: getData,
        queryKey: ['help-car'],
        retry: 2
    });
    
    return{
        ...query,
        data: query.data?.data
    } 
}