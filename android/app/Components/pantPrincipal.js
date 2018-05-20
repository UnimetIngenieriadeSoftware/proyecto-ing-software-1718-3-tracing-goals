import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon
} from 'react-native'; 
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Title, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import GoBackIcon from 'react-native-vector-icons/Entypo';
import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarIcon from 'react-native-vector-icons/FontAwesome';
import BookIcon from 'react-native-vector-icons/Entypo';
import BarGraphIcon from 'react-native-vector-icons/Entypo';
import GraduationCap from 'react-native-vector-icons/Entypo';
import ComputerIcon from 'react-native-vector-icons/Ionicons';


var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

import Icon1 from 'react-native-vector-icons/Entypo';

import {createStackNavigator} from 'react-navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcDWruB9X2-DsgPIUyTmvWMeeJtZO3Xtw",
    authDomain: "tracing-goals.firebaseapp.com",
    databaseURL: "https://tracing-goals.firebaseio.com",
    storageBucket: "tracing-goals.appspot.com",
};

//lista de usuarios
//1. fguzman53000@gmail.com laPrimeraContr456
//2. guzmanf@correo.unimet.edu.ve 1234567

const firebaseApp = firebase.initializeApp(firebaseConfig);

class pantPrincipal extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  //estoy funciona de la siguiente manera:
  //si usuario no esta loggeado se avanza hacia la pagina de crear
  //cuenta
  /*
  componentDidMount(){
    //This function is executed just after the render method
    firebase.auth().onAuthStateChanged(user => {
      if(user){

      } else {
        this.props.navigation.navigate('CrearCuenta')
      }
    })
  }
  */
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
 <Container>

 <Content style= {styles.content}>

       <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 100, width: width}}></Col>
        </Grid>
        
        <Grid>
          
        <Col style={{ backgroundColor: '#f2f4fc', height: 70, width: 50}}></Col>

        <BarGraphIcon name='bar-graph' size={45} color= 'blue'>
        </BarGraphIcon>

        <CalendarIcon name='calendar' size={45} color= 'gold'>
        </CalendarIcon>

        <StarIcon name='star-circle' size={45} color= 'dodgerblue'>
        </StarIcon>

        <GraduationCap name='graduation-cap' size={45} color='black'>
        </GraduationCap>

        <BookIcon name='open-book' size={45} color= 'darkolivegreen'>
        </BookIcon>

        <ComputerIcon name='md-desktop' size={45} color='deepskyblue'>
        </ComputerIcon>

        <Col style={{ backgroundColor: '#f2f4fc', height: 70, width: 49}}></Col>


        </Grid>

      <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
            
         
              <Button full rounded 
                    onPress= {() => {this.props.navigation.navigate('Login')
                    } }
              >
              <Label style= {styles.whiteFont}> Iniciar Sesion </Label>
                    </Button>


      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>

      </Grid>


      <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 85, width: width}}></Col>

      </Grid>

       <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
         
              <Button full rounded 
                    onPress= {() => {
                      this.props.navigation.navigate('CrearCuenta')
                    } }
              >
              <Label style= {styles.whiteFont}> Crear Cuenta </Label>
                    </Button>


      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>

      </Grid>             

 </Content>         
</Container>
      
      );
    }


    _onPressButton(texto){
      this.setState({
        correo: texto
      });
    }


  }


    //clase login
  class login extends Component {
    constructor(props){
      super(props);
      this.state = {
        correo: '',
        clave: '',
      };
    }
      render(){
        let correoVar = '';
        let claveVar = '';
        return(
   <Container>
  
   <Content style= {styles.content}>
     <Form>
       <Item floatingLabel>
         <Label>Correo</Label>
         <Input 
         onChangeText={(text) => {
          this._changeTextCorreo(text);
          correoVar = text;
        }}
         />
       </Item>
       <Item floatingLabel last style= {styles.itemClave}>
         <Label>Clave</Label>
         <Input 
         onChangeText={(text) => {
          this._changeTextClave(text);
          claveVar = text;
        }}
         />
       </Item>
        
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
          </Grid>
  
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
              
           
                <Button full rounded 
                      onPress= {() => {
                        this.setState(previousState => {
                          return { correo: correoVar, clave: claveVar };
                        });
                      } }
                >
                <Label style= {styles.whiteFont}> Iniciar Sesion </Label>
                      </Button>
  
  
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
  
        </Grid>
            
  
     </Form>
   </Content>         
  </Container>
        
        );
      }
  
      //Crear funcion dentro de render()
  
      _onSignUpPress()
      {
        console.log('Los datos introducidos son: ');
      }
  
      _changeTextCorreo(texto)
      {
        console.log('se ha cambiado el correo a: ' + texto); 
      }
  
      _changeTextClave(texto)
      {
        console.log('se ha cambiado la clave a: ' + texto); 
      }
  
      _onPressButton(texto){
        this.setState({
          correo: texto
        });
      }
   }

  class crearCuenta extends Component { 
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
    //press to sign up
    //no esta sirviendo firebase
    firebase.auth().createUserWithEmailAndPassword(this.state.correo, this.state.clave)
                      .then(() => {
                        this.props.navigation.navigate('Home')
                      }).catch(error => this.setState({errorMessage: error.message}))

  }
    render(){
      let correoVar = '';
      let claveVar = '';
      return(
 <Container>
   

 <Content style= {styles.content}>
   <Form>
     <Item floatingLabel>
       <Label>Correo</Label>
       <Input 
       onChangeText={(text) => {
        this._changeTextCorreo(text);
        correoVar = text;
        this.setState({
          correo: correoVar
        })
      }}
       />
     </Item>
     <Item floatingLabel last style= {styles.itemClave}>
       <Label>Clave</Label>
       <Input 
       onChangeText={(text) => {
        this._changeTextClave(text);
        claveVar = text;
        this.setState({
          clave: claveVar
        })
      }}
       />
     </Item>
      
      <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
        </Grid>

      <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
         
              <Button full rounded 
                    onPress={this.handlePress  
                          }      >
              <Label style= {styles.whiteFont}> Crear </Label>
                    </Button>


      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>

      </Grid>
          

   </Form>
 </Content>         
</Container>
      
      );
    }

    _changeTextCorreo(texto)
    {
      console.log('se ha cambiado el correo a: ' + texto); 
    }

    _changeTextClave(texto)
    {
      console.log('se ha cambiado la clave a: ' + texto); 
    }

    _onPressButton(texto){
      this.setState({
        correo: texto
      });
    }

   }


  const RootStack = createStackNavigator(
    {
      Home: pantPrincipal,
      Login: login,
      CrearCuenta: crearCuenta,
    },
    {
      initialRouteName: 'Home',
    }
  );

  export default class laPantalla extends Component{
    componentDidMount(){
      //This function is executed just after the render method.
    }
    render(){
      return <RootStack />
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#525D3B',
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
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    box: {
      height: box_height ,
      width: width, 
    },
    content: {
      backgroundColor: '#f2f4fc',
    },
    box2: {
      backgroundColor: '#525D3B',
    },
    box3: {
      backgroundColor: 'blue',
    },
    header: {
      backgroundColor: '#3f51b5',
    },
    daTitle: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
    itemClave: {
      paddingBottom: 15,
    },
    whiteFont: 
    {
      color: 'white',
    },
  });


AppRegistry.registerComponent('laPantalla', () => laPantalla);