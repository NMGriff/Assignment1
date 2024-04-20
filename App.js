import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Add from './src/screens/Add';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Add To Do" component={Add} />
         </Stack.Navigator>
      </NavigationContainer>

      <TouchableOpacity style={styles.button}>
      <Icon name="circle-with-plus" size={20} color="#5bb450" />
        <Text style={styles.buttonText}>Add To Do Task</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.text}>To Do item 1</Text>
      </View>
      <Button title = "Add..."
      onPress = {()=>NavigationContainer.push('Add')} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
    backggroundColor: '#ADD8E'
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000'
  },
  box: {
    height: 150,
    width: 600,
    backgroundColor: 'ADD8E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000'
  }
});
