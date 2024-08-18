import { useMutation, useQuery, useQueryClient } from "react-query";
import { Usuario } from "@/interfaces/usuario";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://192.168.1.162:8080"

const postData = async (data: Usuario): AxiosPromise<any>=> {
    const response = axios.post(API_URL + "/user/save", data);
    return response;
}

export function PostAddUsuario(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        }
    });
    return mutate;
}