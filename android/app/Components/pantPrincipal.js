import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon
} from 'react-native'; 
import Button from 'react-native-button';
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Title} from 'native-base';
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
  static navigationOptions = {
      title: 'Tracing Goals',
      headerStyle: {
        backgroundColor: '#525D3B',
      },
      headerTintColor: '#f2f4fc',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  };

//otro modo
/*
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Tracing Goals',
    }
  };
*/

  constructor(props){
    super(props);
    this.state = {
      //Esta loggeado o no
      //lo deje hasta aqui.
      //Quiero mostrar y no mostrar los botones cuando el usuario este loggeado o no
      isSignedIn: false,
      userLoggedInDisplay: 'flex',
    };
  }
  
//como hago para que cuando se haga login no se muestren mas el boton de crear
//cuenta??

    render(){
      return(
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
      <Col style={{ backgroundColor: '#f2f4fc', height: 220, width: width}}></Col>
      </Grid>

        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 54}}></Col>

              <Button
                    onPress= {() => {
                      this.props.navigation.navigate('CrearCuenta')
                    } }/*display: {variable que diga si se esta loggeado}*/
                    containerStyle={{padding: 10, height:45, overflow:'hidden', borderRadius:15, backgroundColor: '#525D3B'}}
                    style={{fontSize: 15, color: '#f2f4fc'}}
              >
              Crear Cuenta
              </Button>
              <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 35}}></Col>
              <Button 
                    onPress= {() => {this.props.navigation.navigate('Login')
                    } }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                    >
                    Iniciar Sesion
              </Button>

      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 53}}></Col>
      </Grid>             
 </Content>         
</Container>
      );
    }
  }

  class pantPrincipalLogeado extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        //title: 'Email is: ' + navigation.state.params.emaill ,
        title: 'Tracing Goals',
        headerStyle: {
          backgroundColor: '#525D3B',
        },
        headerTintColor: '#f2f4fc',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Text> </Text>
          //como poner el nombre del usuario aqui?
          //creo no se puede porque esta header bar es statica, una vez se carga
          //al principio cuando se carga la app. ya no es posible cambiarla
        ),
        headerLeft: (
          <Text style={{color: '#525D3B', fontSize: 1}}> S </Text>
        ),
    });




    /*static navigationOptions = {
        title: 'Tracing Goals',
        headerStyle: {
          backgroundColor: '#525D3B',
        },
        headerTintColor: '#f2f4fc',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Text> </Text>
          //como poner el nombre del usuario aqui?
          //creo no se puede porque esta header bar es statica, una vez se carga
          //al principio cuando se carga la app. ya no es posible cambiarla
        ),
        headerLeft: (
          <Text style={{color: '#525D3B', fontSize: 1}}> S </Text>
        ),
    };
    */
  
  //otro modo
  /*
    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'Tracing Goals',
      }
    };
  */
  
    constructor(props){
      super(props);
      this.state = {
        //Esta loggeado o no
        //lo deje hasta aqui.
        //Quiero mostrar y no mostrar los botones cuando el usuario este loggeado o no
        isSignedIn: false,
        correo: '',
      };
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({correo: user.email})
        } else {

        }
      });
    }
  //Creo no va a ser posible mostrar el correo del usuario debido a que todas las 
  //vistas se cargan al principio del programa 
  //vamos a intentar a ver
      render(){
        const { params } = this.props.navigation.state;
        return(
   <Container>
  
   <Content style= {styles.content}>
  
         <Grid>
        <Col style={{ backgroundColor: 'black', height: 100, width: width}}></Col>
          </Grid>
          
          <Text> Bienvenido {params.emaill} ! </Text> 

         
         
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 220, width: width}}></Col>
        </Grid>
  
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 54}}></Col>
  
                <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 35}}></Col>
  
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 53}}></Col>
        </Grid>             
   </Content>         
  </Container>
        );
      }
    }






    //clase login
  class login extends Component {
    static navigationOptions = {
      title: 'Iniciar Sesion',
      headerStyle: {
        backgroundColor: '#525D3B',
      },
      headerTintColor: '#f2f4fc',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  };

    constructor(props){
      super(props);
      this.state = {
        correo: '',
        clave: '',
      };
      this.handlePress = this.handlePress.bind(this);
    }
    handlePress(){
      /*
      firebase.auth().createUserWithEmailAndPassword(this.state.correo, this.state.clave)
                        .then(() => {
                          this.props.navigation.navigate('Home')
                        }).catch(error => this.setState({errorMessage: error.message}))
                        */
                       
      firebase.auth().signInWithEmailAndPassword(this.state.correo, this.state.clave)
      .then((user) => {
        //creo esta funcion de abajo renderiza otra vez todos los componentes
        //que estan en navigation. vamos a probarlo FAGG

        //mando a la pagina de navegacion la informacion del email del usuario
        this.props.navigation.navigate('Home2', { emaill: this.state.correo })
        //solucion puede ser crear una pantalla principal que sea active solo
        //despues que el usuario se logee.

      })
      .catch((error) => {
        const { code, message } = error;
      })



      //console.log(this.state.correo + this.state.clave)
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
          firebase.auth().onAuthStateChanged(user => {
            if(user){
              //Crear una variable global que indique si el usuario esta logeado
            } else {
              
            }
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
              
           
                <Button 
                      onPress={this.handlePress  
                      }
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:15, backgroundColor: '#525D3B'}}
                      style={{fontSize: 15, color: '#f2f4fc'}}
                >
                Iniciar Sesion
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
    static navigationOptions = {
      title: 'Crear Cuenta',
      headerStyle: {
        backgroundColor: '#525D3B',
      },
      headerTintColor: '#f2f4fc',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  };


  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
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
                    onPress={this.handlePress}      
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                    style={{fontSize: 20, color: '#f2f4fc'}}     
                          >
                          Crear
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
      Home2: pantPrincipalLogeado,
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