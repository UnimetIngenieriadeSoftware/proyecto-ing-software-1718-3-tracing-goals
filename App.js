/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flowu
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';

//Aqui se creo el component createStackNavigator
import {createStackNavigator} from 'react-navigation';

//Aqui se crea la clase HomeScreen que sera donde estara el contenido
class HomeScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
      </View>
    );
  }
}


//Clase donde se muestra los detalles
class DetailsScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
      </View>
    );
  }
}

//funcion createStackNavigator que devuelve un componente y lo guardo en
//createStackNavigator
const RootStack = createStackNavigator(
  {//Home sera HomeScreen, que es el componente HomeScreen
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render(){
    return <RootStack />
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
