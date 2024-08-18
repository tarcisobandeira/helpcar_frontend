import { useQuery } from "react-query";
import axios, { AxiosPromise } from "axios";
import { Usuario } from "@/interfaces/usuario";

const API_URL = "http://192.168.1.162:8080";
let email:string;

const getData = async (): AxiosPromise<Usuario> => {
    const response = axios.get(API_URL + "/user/all/" + email);
    return response;
}

export function GetExistUser(i:string){
    email=i;

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