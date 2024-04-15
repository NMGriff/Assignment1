// Home.js
import { View,Text,Stylesheet } from "react-native";

export default Home = function () {
    return (
        <View style={Stylesheet.container}>
            <Text style={{fontSize:20}}>The Home Screen</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>My Todo List</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ccc',
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    title: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 32
    }
})