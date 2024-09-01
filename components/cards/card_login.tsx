import { Pressable, Text, View } from "react-native";
import StyleSheet from "react-native-media-query"
import { VscAccount } from "react-icons/vsc";
import { router } from "expo-router";

export default function CardLogin() {
    const goLogin = () => {
        router.navigate("/login/");
    }

    return (
        <View style={styles.view}>
            <Pressable style={styles.press} onPress={goLogin}>
                <Text>Login</Text>
                <VscAccount style={styles.icon}/>
            </Pressable>
        </View>
    )
}

const {ids, styles} = StyleSheet.create({
    view:{
        width: 100
    },   
    press:{
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        width: 50,
        height: 25
    }
})