import Label_Text_Comp from "@/components/comp_label_text";
import React from "react";
import { View, Text } from "react-native";


export default function home(){
    
    return(
        <View>
            <View>
                <Text>Login</Text>
                <View>
                    <Label_Text_Comp titulo={'Email'}/>
                </View>
            </View>
        </View>
    )
}