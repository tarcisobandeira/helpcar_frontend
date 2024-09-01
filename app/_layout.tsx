import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button } from "react-native";
import { Link } from "expo-router";
import CardLogin from "@/components/cards/card_login";


export default function Layout() {
    const queryClient = new QueryClient();

    return (

        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer>
                    <Drawer.Screen name="index" options={{
                        drawerLabel: 'Home',
                        title: 'HelpCar',
                        headerRight: () => (
                            <CardLogin/>
                        )
                    }} />
                    <Drawer.Screen name="login" options={{ title: 'Login' }} />
                </Drawer>
            </GestureHandlerRootView>
        </QueryClientProvider>
    )
}