import BTN_Comp from "@/components/comp_btn";
import Label_Text_Comp from "@/components/comp_label_text";
import React from "react";
import { View, Text} from "react-native";
import StyleSheet from "react-native-media-query"


export default function home(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.texto}>Login</Text>
                <View>
                    <Label_Text_Comp titulo={'Email'} updateValor={setEmail}/>
                    <Label_Text_Comp titulo={'Senha'} updateValor={setPassword} password/>
                </View>
                <View style={styles.buttons}>
                    <BTN_Comp titulo={"Login"} acao={"/"}/>
                    <BTN_Comp titulo={"Cadastro"} acao={"/cadastro"}/>
                </View>
            </View>
        </View>
    )
}

const {ids,styles} = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: 445,
        height: "70%",
        padding: 10,
        borderRadius:7,
        '@media(max-width: 600px)':{
            width: "90%",
            height: "60%"
        }
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-around",
        '@media(max-width: 600px)':{
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    texto:{
        fontSize: 36
    }
})