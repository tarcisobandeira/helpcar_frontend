import { GetAllUser } from "@/hooks/usuarios/GET_AllUsuario";
import { Text, View } from "react-native";

export default function telainicial() {
    const { data } = GetAllUser();

    return (

        <View>
            {data?.map(u =>
                <View>
                    <Text>{u.firstname}</Text>
                    <Text>{u.lastname}</Text>
                    <Text>{u.email}</Text>
                    <Text>{u.password}</Text>
                    <Text>{u.ativo}</Text>
                </View>
            )}
        </View>
    )
}