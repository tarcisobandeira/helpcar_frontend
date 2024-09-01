import { useMutation, useQueryClient } from "react-query";
import { Usuario } from "@/interfaces/usuario";
import { AxiosPromise } from "axios";
import api from "@/services/api";

const postData = async (data: Usuario): AxiosPromise<any>=> {
    const response = api.post("/user/save", data);
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