import CardCategoria from "@/components/cards/card_categoria";
import { GetAllCategoria } from "@/hooks/categoria/GET_AllCategoria";
import { View } from "react-native";
import StyleSheet from "react-native-media-query"

export default function telainicial() {
    const { data } = GetAllCategoria();

    return (

        <View style={styles.viewCard}>
            {data?.map(c => 
                <CardCategoria key={c.id} nome={c.nome} icon={"../icons/noun-engine-10760.png"}/>  
            )}
        </View>
    )
}

const { ids, styles } = StyleSheet.create({
    viewCard:{
        flexDirection: "row",
    }
})