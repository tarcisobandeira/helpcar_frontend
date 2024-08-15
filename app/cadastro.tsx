import BTN_Comp from "@/components/comp_btn";
import Label_Text_Comp from "@/components/comp_label_text";
import React from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-media-query"


export default function home(){
    
    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.texto}>Cadastro</Text>
                <View>
                    <Label_Text_Comp titulo={'Nome'}/>
                    <Label_Text_Comp titulo={'Email'}/>
                    <Label_Text_Comp titulo={'Senha'}/>
                    <Label_Text_Comp titulo={'Repetir Senha'}/>
                </View>
                <View style={styles.buttons}>
                    <BTN_Comp titulo={"Criar"} acao={"/cadastro"}/>
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