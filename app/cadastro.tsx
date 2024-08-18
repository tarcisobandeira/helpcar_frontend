import Btn_Func from "@/components/buttons/btn_func";
import Btn_Link from "@/components/buttons/btn_link";
import Label_Text_Comp from "@/components/comp_label_text";
import { PostAddUsuario } from "@/hooks/usuarios/POST_criarUsuario";
import { Usuario } from "@/interfaces/usuario";
import { router } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-media-query"


export default function home(){
    const [firstname , setFirstname] = React.useState("");
    const [lastname , setLastname] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const [PSR , setPSR] = React.useState("");
    const { mutate } = PostAddUsuario();

    const submit = () =>{
        if(password === PSR){
            const usuario: Usuario = {
                firstname,
                lastname,
                email,
                password
            };
            mutate(usuario);
            router.navigate("/");
        }else{
            console.log("Não é igual");
        }
    }

    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.texto}>Cadastro</Text>
                <View>
                    <Label_Text_Comp titulo={'Nome'} updateValor={setFirstname}/>
                    <Label_Text_Comp titulo={'Sobrenome'} updateValor={setLastname}/>
                    <Label_Text_Comp titulo={'Email'} updateValor={setEmail}/>
                    <Label_Text_Comp titulo={'Senha'} updateValor={setPassword} password/>
                    <Label_Text_Comp titulo={'Repetir Senha'} updateValor={setPSR} password/>
                </View>
                <View style={styles.buttons}>
                    <Btn_Func titulo={"Criar"} onPress={submit}/>
                    <Btn_Link titulo={"Voltar"} link={"/"}/>
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
        height: "auto",
        padding: 10,
        borderRadius:7,
        '@media(max-width: 600px)':{
            width: "90%",
            height: "auto",
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