import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface props{
    titulo: string;
    password?: boolean;
    updateValor(value: any): void;
}

export default function Label_Text_Comp({titulo, password, updateValor}: props){
    return(
        <View style={style.view}>
            <Text style={style.text}>{titulo}</Text>
            <TextInput style={style.input} id={titulo} secureTextEntry={password} onChangeText={(valor) => updateValor(valor)}></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        padding: 10
    },
    text:{
        fontSize:18
    },
    input:{
        borderWidth: 1,
        borderRadius:7,
        fontSize:18,
        width: "100%",
        padding: 5
    }
})