import BTN_Comp from "@/components/comp_btn";
import Label_Text_Comp from "@/components/comp_label_text";
import { PostAddUsuario } from "@/hooks/POST_criarUsuario";
import { Usuario } from "@/interfaces/usuario";
import React from "react";
import { View, Text, Button } from "react-native";
import StyleSheet from "react-native-media-query"


export default function home(){
    const [firstname , setFirstname] = React.useState("");
    const [lastname , setLastname] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const [PSR , setPSR] = React.useState("");
    const { mutate } = PostAddUsuario();

    const submit = () =>{
        const usuario: Usuario = {
            firstname,
            lastname,
            email,
            password
        }
        mutate(usuario);
    }

    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.texto}>Cadastro</Text>
                <View>
                    <Label_Text_Comp titulo={'Nome'} updateValor={setFirstname}/>
                    <Label_Text_Comp titulo={'Sobrenome'} updateValor={setLastname}/>
                    <Label_Text_Comp titulo={'Email'} updateValor={setEmail}/>
                    <Label_Text_Comp titulo={'Senha'} updateValor={setPassword}/>
                    <Label_Text_Comp titulo={'Repetir Senha'} updateValor={setPSR}/>
                </View>
                <View style={styles.buttons}>
                    <Button title="Criar" onPress={submit} />
                    <BTN_Comp titulo={"Voltar"} acao={"/"}/>
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