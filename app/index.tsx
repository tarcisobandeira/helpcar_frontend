import CardCategoria from "@/components/cards/card_categoria";
import { GetAllCategoria } from "@/hooks/categoria/GET_AllCategoria";
import { View } from "react-native";
import StyleSheet from "react-native-media-query"

export default function telainicial() {
    const { data } = GetAllCategoria();

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.viewCard}>
                    {data?.map(c =>
                        <CardCategoria key={c.id} nome={c.nome} />
                    )}
                </View>
            </View>
        </View>
    )
}

const { ids, styles } = StyleSheet.create({
    viewCard: {
        flexDirection: "row",
    },
    body: {
        flex: 1,
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "96%",
        height: "100%",
        padding: 10,
        
        '@media(max-width: 600px)': {
            width: "90%"
        }
    },
    
})