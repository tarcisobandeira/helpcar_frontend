import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{title: "Help Car"}}/>
            <Stack.Screen name="cadastro" options={{title: "Criar Usuário"}}/>
        </Stack>
    )
}