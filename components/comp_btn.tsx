import React from "react";
import { View } from "react-native";
import { Href, Link } from "expo-router";
import StyleSheet from "react-native-media-query"

interface props{
    titulo: string;
    acao: Href<string|object>;
}

export default function BTN_Comp(props: props){
    return(
        <View style={styles.view}>
            <Link style={styles.button} href={props.acao}>{props.titulo}</Link>
        </View>
    )
}

const {ids, styles} = StyleSheet.create({
    view:{
        padding: 10,
        width: "50%",
        '@media(max-width: 600px)':{
            width: "100%",
        }},
    button:{
        backgroundColor: "#F4684A",
        color: "#fff",
        padding: 5,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 7
    }
})