import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button } from "react-native";
import { Link, Tabs } from "expo-router";
import CardLogin from "@/components/cards/card_login";


export default function Layout() {
    const queryClient = new QueryClient();

    return (

        <QueryClientProvider client={queryClient}>
            <Tabs screenOptions={{headerShown:false}}>
                <Tabs.Screen name="index" options={{title: "Início"}}/>
                <Tabs.Screen name="busca" options={{title: "Busca"}}/>
                <Tabs.Screen name="login/index" options={{title: "Login", headerShown:false}} />
                <Tabs.Screen name="login/cadastro" options={{tabBarItemStyle:{display:"none"}, headerShown:false, tabBarStyle:{display:"none"}}}/>
            </Tabs>
        </QueryClientProvider>
    )
}