import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface props{
    titulo: string;
    password?: boolean;
}

export default function Label_Text_Comp(props: props){
    const [texto, onChangeTexto] = React.useState();
    return(
        <View style={style.view}>
            <Text style={style.text}>{props.titulo}</Text>
            <TextInput style={style.input} secureTextEntry={props.password}>{texto}</TextInput>
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