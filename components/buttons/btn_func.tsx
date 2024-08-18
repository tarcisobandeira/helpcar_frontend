import React from "react";
import { Pressable, Text, View } from "react-native";
import StyleSheet from "react-native-media-query"

interface props{
    titulo: string;
    onPress: any
}

export default function Btn_Func(props: props){
    return(
        <View style={styles.view}>
            <Pressable style={styles.button} onPress={props.onPress}>
                <Text style={styles.text}>{props.titulo}</Text>
            </Pressable>
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
        borderRadius: 7
    },text:{
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    }
})