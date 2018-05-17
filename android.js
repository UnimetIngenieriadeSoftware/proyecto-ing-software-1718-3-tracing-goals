import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon, Right, Body
} from 'react-native'; 
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import crearCuenta from './android/app/components/crearCuenta';
var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;



/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shak for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/
/*type Props = {};*/
/* Se usaba cuando la linea de abajo estaba asi
export default class android extends Component<Props>*/

/*
export default class android extends Component {
  render() {
    return (
            <View>
          <Text> Hello world! </Text>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />


          </View>
    );
  }
}
*/
/*
class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    }, 1000);
  }
    //todo component tiene un render()
    
    render(){
      let display = this.state.isShowingText ? this.props.text : '';
      return (
        <Text style={styles.red}> {display} </Text>
      );
    }



}


export default class blinkApp extends Component {
    render() {
      return ( 
        //No pueden haber 2 componentes, hay 1 y los demas estan dentro de el 
        //tenia a <text> afuera de <view> y me daba error.
        <View>
            <Blink text='I love to blink'/>
            <Blink text='Yes blinking is so great'/>
            <Blink text='Why did they ever take this out of'/>

        <View style= {{width: 360, height: 50, backgroundColor: 'skyblue'}}/>


        </View>
      );
    }
  }

*/


//ejemplo de como se puede segmentar unas views, ponerle color
// y asignarsele espacio

/*
export default class FlexDimensionsBasics extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column'}} >
        <View style={{flex: 16, backgroundColor: 'powderblue'}} />
        <View style={{flex: 4, backgroundColor: 'skyblue'}} />
        <View style={{flex: 4, backgroundColor: 'steelblue'}} />



        </View>
     

    );
  }
}*/

export default class androidApp1 extends Component {
  render(){
    return(/*
        <View style={styles.container}>

        <Text> Login </Text>

          


        </View>
       */
      /*
<View style={styles.container}>

<Text> Login </Text>

  


</View>
*/
      
      <crearCuenta />

    );
  }
}




AppRegistry.registerComponent('android', () => androidApp1);