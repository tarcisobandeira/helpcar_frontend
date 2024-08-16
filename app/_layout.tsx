import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Layout(){

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}> 
        <Stack>
           
                <Stack.Screen name="index" options={{title: "Help Car"}}/>
                <Stack.Screen name="cadastro" options={{title: "Criar Usuário"}}/>
            
        </Stack>
        </QueryClientProvider>
    )
}