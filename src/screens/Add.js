import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Add from './src/screens/Add';


const Stack = createStackNavigator()



export default Add = function () {
    return (
        <View style={Stylesheet.container}>
            <Text style={{fontSize:20}}>Add Task</Text>
            <View style={styles.container}>
                <Text style={styles.title}>My Todo List</Text>
            </View>
            <Button title = "Home"
             onPress = {()=>NavigationContainer.push('Home')} />
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