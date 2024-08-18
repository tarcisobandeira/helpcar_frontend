import React from "react";
import { Pressable, Text, View } from "react-native";
import { Href, Link } from "expo-router";
import StyleSheet from "react-native-media-query"

interface props{
    titulo: string;
    link: Href;
}

export default function Btn_Link(props: props){
    return(
        <View style={styles.view}>
            <Link style={styles.button} href={props.link}>
                <Text>{props.titulo}</Text>
            </Link>
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
        padding: 5,
        borderRadius: 7,
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    }
})