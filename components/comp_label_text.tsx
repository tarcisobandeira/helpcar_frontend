import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface lt{
    titulo: String;
}

export default function Label_Text_Comp(props: lt){
    const [texto, onChangeTexto] = React.useState();
    return(
        <View style={style.view}>
            <Text style={style.text}>{props.titulo}</Text>
            <TextInput style={style.input}>{texto}</TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        padding: 10
    },
    text:{
        fontSize:24
    },
    input:{
        borderWidth: 1,
        borderRadius:7,
        fontSize:24,
        width: "100%"
    }
})