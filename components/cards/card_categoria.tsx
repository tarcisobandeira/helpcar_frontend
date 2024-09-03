import { Image, Text, View } from "react-native"
import StyleSheet from "react-native-media-query"

interface props{
    id?:number,
    nome: string
    icon?: any
}

export default function CardCategoria(props:props){

    return(
        <View key={props.id} style={styles.view}>
            <Image source={props.icon} style={styles.img}/>
            <Text>{props.nome}</Text>
        </View>
    )
}

const {ids, styles} = StyleSheet.create({
    view:{
        borderWidth: 1,
        borderColor: "#000",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    img:{
        width: 50,
        height: 50
    }
})