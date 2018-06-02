import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
Dimensions, Icon, FlatList, TouchableOpacity
} from 'react-native'; 
import Button from 'react-native-button';
import { Container, Header, Content, Form, Item, Input, Label,
Body, Title, List, Left, Right} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import GoBackIcon from 'react-native-vector-icons/Entypo';
import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarIcon from 'react-native-vector-icons/FontAwesome';
import BookIcon from 'react-native-vector-icons/Entypo';
import BarGraphIcon from 'react-native-vector-icons/Entypo';
import GraduationCap from 'react-native-vector-icons/Entypo';
import ComputerIcon from 'react-native-vector-icons/Ionicons';
import TrophyIcon from 'react-native-vector-icons/Entypo';
import LogOutIcon from 'react-native-vector-icons/Entypo';
import GoRight from 'react-native-vector-icons/Ionicons';
import ArrowRight from 'react-native-vector-icons/Feather';


import DatePicker from 'react-native-datepicker';
import { ListItem } from 'react-native-elements';


//firebase.auth.state
//me devuelve el id del usuario
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
//3. jeanraul16@gmail.com 1234567


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
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: false,
      userLoggedInDisplay: 'flex',
    };
  }

  componentDidMount()
  {
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          console.log('The user is signed in');
          
          firebase.database().ref('Users/').once('value', snapshot => {
            var theUserId;
            var nameOfUser = '';
            var daObj = snapshot.val();
            for(x in daObj)
            {
              if(daObj[x].correo==user.email)
              {
                theUserId=x;
                nameOfUser = daObj[x].nombre;
              }
            }
            this.props.navigation.navigate('Home3', { emaill: user.email, usuariId: theUserId, nameUser: nameOfUser});
          });
        } else {
          console.log('The user is not signed in');
        }
      });
  }
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
                    } }
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

  //this was the header in pantPrincipalYaLogeado, we are trying to change some things
  /*
        headerRight: (
          <Button
          onPress= {() => {
            //Cerrando sesion
            firebase.auth().signOut().then(() =>{
              console.log('we have logged out');
              this.props.navigation.navigate('Home');
            });
          } 
        }
          >
            <LogOutIcon name='log-out' size={20} color='white'>
            </LogOutIcon>
          </Button>
        ),
        headerLeft: (
          <Text style={{color: '#525D3B', fontSize: 1}}> S </Text>
        ),
*/

/* 
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
*/

  class pantPrincipalYaLogeado extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Tracing Goals',
        headerStyle: {
          backgroundColor: '#525D3B',
        },
        headerTintColor: '#f2f4fc',
        headerTitleStyle: {
          fontWeight: 'bold',
        },  
      headerRight: <Button
                    onPress= {() => {
                                      //Cerrando sesion
                                      firebase.auth().signOut().then(() =>{
                                        console.log('we have logged out');
                                        //al cerrar sesion se va hacia la pagina principal
                                        navigation.navigate('Home');
                                      });
                                    } 
                              }
                  >
                                    <LogOutIcon name='log-out' size={20} color='white'>
                                    </LogOutIcon>
                  </Button>,
      headerLeft: <Text style={{color: '#525D3B', fontSize: 1}}> S </Text>
      };
    };

    constructor(props){
      super(props);
      this.state = {
        isSignedIn: false,
        userLoggedInDisplay: 'flex',
      };
    }

      render(){
        let space = ' '; 
        const { navigation } = this.props;
        const daEmail = navigation.getParam('emaill', 'aDefaultValue');
        const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
        const nameUser = navigation.getParam('nameUser', 'aDefaultValue');

        return(
   <Container>
   <Content style= {styles.content}>  

    <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 15, width: width}}></Col>
    </Grid>

    <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 65, width: 50}}></Col>
  
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
            <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col> 
        </Grid>
          
        <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 10, width: 20}}></Col>
            <Text style={styles.welcomeText}> Bienvenido {nameUser} ! </Text> 
        </Grid>

        <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col> 
        </Grid>
          
  
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 220, width: 100}}></Col>
        <Button 
                    onPress= {() => {
                      this.props.navigation.navigate('crearMeta', { emaill: daEmail, usuariId: usuariId, nameUser: nameUser })
                    } 
                  }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
          >
                    Nueva Meta {space}
                    <TrophyIcon name='trophy' size={15} color= 'gold'>
                    </TrophyIcon>
          </Button>
        </Grid>
        <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 100}}></Col>
    
            <Button 
                      onPress= {() => {this.props.navigation.navigate('metasCreadas',
                      {
                      daEmail: daEmail, 
                      usuariId: usuariId,
                      nameUser: nameUser,
                      } 
                    )
                      } }
                      style={{fontSize: 15, color: '#f2f4fc'}}
                      containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
            >
                      Metas Creadas {space}  
                      <CalendarIcon name='calendar' size={15} color= 'gold'>
                      </CalendarIcon>
            </Button>



                  <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 146}}></Col>
    
          <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 53}}></Col>
        </Grid>


          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: width}}></Col>
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
        ),
        headerLeft: (
          <Text style={{color: '#525D3B', fontSize: 1}}> S </Text>
        ),
    });
  
    constructor(props){
      super(props);
      this.state = {
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
    
      render(){
        let space = ' '; 
        const { navigation } = this.props;
        const daEmail = navigation.getParam('emaill', 'aDefaultValue');
        const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
        return(
   <Container>
  
   <Content style= {styles.content}>
  
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 60, width: width}}></Col>
        </Grid>
          
          <Text> Bienvenido {space} {daEmail} userId: {space} {usuariId} ! </Text> 

         
         
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>

          <Button 
                    onPress= {() => {
                    this.props.navigation.navigate('crearMeta', { emaill: daEmail, usuariId: usuariId })
                    } }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
          >
                    Nueva Meta {space}
                    <TrophyIcon name='trophy' size={15} color= 'gold'>
                    </TrophyIcon>
          </Button>
          <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>

        </Grid>
  
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 119}}></Col>
  
          <Button 
                    onPress= {() => {this.props.navigation.navigate('metasCreadas',
                    {
                    daEmail: daEmail, 
                    usuariId: usuariId,
                    } 
                  )
                    } }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
          >
                    Metas Creadas {space}  
                    <CalendarIcon name='calendar' size={15} color= 'gold'>
                    </CalendarIcon>
          </Button>



                <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 146}}></Col>
  
        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 53}}></Col>
        </Grid>             
   </Content>         
  </Container>
        );
      }
    }

    var ellUsuarId;
    var spaceX = ' ';
    class pantallaMetasCreadas extends Component {
      static navigationOptions = ({ navigation }) => ({
          //title: 'Email is: ' + navigation.state.params.emaill ,
          title: 'Metas Creadas',
          headerStyle: {
            backgroundColor: '#525D3B',
          },
          headerTintColor: '#f2f4fc',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: (
            <Text> </Text>
          ),
      });
      constructor(props){
        super(props);
        this.state = {
          //Esta loggeado o no
          //lo deje hasta aqui.
          //Quiero mostrar y no mostrar los botones cuando el usuario este loggeado o no
          isSignedIn: false,
          correo: '',
          data: [],
          elUserId: '',
        };
      }

      _keyExtractor = (item, index) => item.key;

      componentDidMount(){
        firebase.database().ref('Metas/').once('value', snapshot => {
          var ellObj = snapshot.val();
          var anArray = [];
          console.log(ellObj);
          for(x in ellObj)
          {
            console.log(ellObj[x]);
            if(ellObj[x].usuarioId==ellUsuarId)
            {
                anArray.push(ellObj[x]);
            }
          }
          console.log('here');
          this.setState({
            data: anArray
          });
          console.log('aqui esta la data');
          console.log(this.state.data);
        });
      }

      //como se muestra cada item de la FlatList para cada meta
      renderItem = ({ item }) => (
          <ListItem
          title={item.nombre}
          subtitle= {'Prioridad: ' + item.numeroPrioridad}
          rightIcon={<ArrowRight name='arrow-right' size={23} color='gray' > </ArrowRight>}





















          />
      )

        render(){
          let space = ' '; 
          const { navigation } = this.props;
          const daEmail = navigation.getParam('daEmail', 'aDefaultValue');
          const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
          const nameUser = navigation.getParam('nameUser', 'aDefaultValue');
          ellUsuarId=usuariId;
          return(
     <Container>
     <Content style= {styles.content}>
    
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 15, width: width}}></Col>
          </Grid>
            
          <Text style={styles.welcomeText}> Hola {nameUser}, estas son las metas existentes </Text>

        <FlatList
          data={this.state.data}
          renderItem={this.renderItem
         //como se mostraba la lista de metas en el sprint 1
/*
            <Grid>
              <Col style={{ backgroundColor: '#f2f4fc', height: 150, width: width}}>
              <Text style={styles.item}> ID:{item.key}</Text>
            
              <Text style={styles.item}> Nombre: {spaceX} {item.nombre}</Text>

              <Text style={styles.item}> Descripcion: {spaceX} {item.descripcion} </Text>
              <Text style={styles.item}> Fecha culminacion: {spaceX} {item.fechaCulminacion} </Text>
              <Text style={styles.item}> Numero prioridad: {spaceX} {item.numeroPrioridad} </Text>
              </Col>
            </Grid>
            */
            }
            keyExtractor={this._keyExtractor}
        />
     </Content>         
    </Container>
          );
        }
      }

/*
      control slash (se te pone editor de texto)
*/

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

      handlePress(){
                         
        firebase.auth().signInWithEmailAndPassword(this.state.correo, this.state.clave)
        .then((user) => {

          
          firebase.database().ref('Users/').once('value', snapshot => {

            console.log(JSON.stringify(snapshot));
            var laaaObj = [];
            laaaObj = snapshot.val();

            var usuarId;
            for(x in laaaObj)
            {
              console.log(laaaObj[x]);
              if(laaaObj[x].correo==this.state.correo)
              {
                usuarId = x;
              }
            }

          }).catch(err => {console.log(error)})
      }
    )
    }

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
      nombre: '',
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){

    var database = firebase.database();

    firebase.auth().createUserWithEmailAndPassword(this.state.correo, this.state.clave)
                      .then(() => {
                        //firebase.database().ref('Users/')
                        //tengo que poner la info en la base de datos
                        //chequear si se esta leyendo la base de datos
                        //crear en base de datos el usuario

                        firebase.database().ref('Users/').once('value', snapshot => {

                          //chequera el usuario id mayor 

                          var myObj1;
                          
                        myObj1 = snapshot.val();


                        console.log(myObj1);
                        console.log('SEPARACION');

                        var codigoNuevoUsuario=0;
                        for(x in myObj1)
                        { 
                          console.log(x);
                          if(codigoNuevoUsuario<=parseInt(x))
                          {
                            codigoNuevoUsuario=parseInt(x);
                          }
                        }
                        codigoNuevoUsuario=codigoNuevoUsuario+1;

                        //crear en base de datos un usuario con este codigo


                        firebase.database().ref('Users/'+codigoNuevoUsuario).set({
                          correo: this.state.correo,
                          nombre: this.state.nombre,
                        });
                        });


                        this.props.navigation.navigate('Home')
                      }).catch(error => this.setState({errorMessage: error.message}))

  }
    render(){
      let correoVar = '';
      let claveVar = '';
      let nombreVar = '';
      return(
 <Container>
   

 <Content style= {styles.content}>
   <Form>

     <Item floatingLabel>
       <Label>Nombre y apellido</Label>
       <Input 
       onChangeText={(text) => {
        this._changeTextNombre(text);
        nombreVar = text;
        this.setState({
          nombre: nombreVar,
        })
      }}
       />
     </Item>


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

    _changeTextNombre(texto)
    {
      console.log('se ha cambiado el nombre a: ' + texto); 
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


   var nombreMet='';
   var descrip='';
   var numeroPrior='';
   var fechCulm='';


   class pantallaCrearMeta extends Component {
    static navigationOptions = ({ navigation }) => ({
        //title: 'Email is: ' + navigation.state.params.emaill ,
        title: 'Crear Meta',
        headerStyle: {
          backgroundColor: '#525D3B',
        },
        headerTintColor: '#f2f4fc',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Text> </Text>
        ),
    });
  
    constructor(props){
      super(props);
      this.state = {
        nombreMeta: '',
        descripcionMeta: '',
        numeroPrioridad: 1,
        fechaCulminacion: '',
      };
    }
    onDateChange(date){
      this.setState({
        fechaCulminacion: date
      });
    }
    onNombreMetaChange(nombreMeta){
      this.setState({
        nombreMeta: nombreMeta
      });
    }
    onNumeroPChange(numeroP){
      this.setState({
        numeroPrioridad: numeroP
      });
    }
    onDescripcionMetaChange(descripcion){
      this.setState({
        descripcionMeta: descripcion
      });
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({correo: user.email})
        } else {

        }
      });
    }
      render(){
        var space = ' ';
        const { navigation } = this.props;
        const emaill = navigation.getParam('emaill', 'aDefaultValue');
        const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
        const nameUser = navigation.getParam('nameUser', 'aDefaultValue');
        return(
   <Container>
  
   <Content style= {styles.content}>
  
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 15, width: width}}></Col>
        </Grid>          
          <Text style={styles.welcomeText}> {nameUser}, ingrese los datos de la nueva meta</Text> 
         <Grid>
       
   <Content style= {styles.content}>
     <Form>
       <Item floatingLabel>
         <Label>Nombre</Label>
         <Input 
         onChangeText={(text) => {
          nombreMet = text;
          this.setState({
            nombreMeta: nombreMet
          });
          console.log('El nombre de la meta se ha cambiado a: ' + nombreMet)
        }}
         />
       </Item>
       <Item floatingLabel>
         <Label>Descripcion</Label>
         <Input 
         onChangeText={(text) => {
          descrip = text;
          this.setState({
            descripcionMeta: descrip
          });
          console.log('La descripcion de la meta se ha cambiado a: '+ descrip)
        }}
         />
       </Item>
       <Item floatingLabel>
         <Label>Numero de prioridad</Label>
         <Input 
         keyboardType = 'numeric'
         onChangeText={(text) => {
          numeroPrior = text;
          this.setState({
            numeroPrioridad: numeroPrior
          });
          console.log('El numero de prioridad se ha cambiado a: '+ numeroPrior);
        }}
         />
       </Item>

        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
        </Grid>

        <Item>
          <Label>Fecha de culminacion </Label>
       <DatePicker
       date={this.state.date}
       placeholder='Fecha de Culminacion'
       mode='date'
       onDateChange = {(date) => {
        fechCulm = date;
        this.setState({
          fechaCulminacion: fechCulm
        });
          console.log('La fecha de culminacion se ha cambiad a: '+ fechCulm);
        }}
       customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        }}  
       />
        </Item>
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
        </Grid>

       <Grid>
       <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
          <Button 
                    onPress= {() => {
                      //aqui hay que llamar a firebase y crear la meta
                      //primero vamos a recibirla y mostrarla por consola
                      firebase.database().ref('Metas/').once('value').then(snapshot => {
                        console.log(JSON.stringify(snapshot))
                        //en snapshot tengo la data.
                        //Ahora quiero saber cual es la meta con mayor numero de id,
                        //para la cual coloca sea mayor en 1

                        myObj = snapshot.val();


                        console.log(myObj);
                        console.log('SEPARACION');

                        var codigoNuevaMeta=0;
                        for(x in myObj)
                        { 
                          console.log(x);
                          if(codigoNuevaMeta<=parseInt(x))
                          {
                            codigoNuevaMeta=parseInt(x);
                          }
                        }
                        codigoNuevaMeta=codigoNuevaMeta+1;
                        console.log('El codigo de la nueva meta sera: '+ codigoNuevaMeta);

                        console.log(descrip);


                        console.log('usuario id es: '+usuariId);

                        console.log('numero prioridad es: '+numeroPrior);
                        firebase.database().ref('Metas/'+codigoNuevaMeta).set({
                          descripcion: descrip,
                          fechaCulminacion: fechCulm,
                          nombre: nombreMet,
                          numeroPrioridad: parseInt(numeroPrior),
                          usuarioId: usuariId,
                          key: codigoNuevaMeta,
                        });
                      })


                      //navegar hacia pagina principal
                      this.props.navigation.navigate('Home3');
                    } }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
          >
                    Crear {space}
                    <TrophyIcon name='trophy' size={15} color= 'gold'>
                    </TrophyIcon>
          </Button>
          <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
        </Grid>
            
  
     </Form>
   </Content>    
        </Grid>                       
   </Content>         
  </Container>
        );
      }
    }


  const RootStack = createStackNavigator(
    {
      Home: pantPrincipal,
      Home2: pantPrincipalLogeado,
      Home3: pantPrincipalYaLogeado,
      Login: login,
      CrearCuenta: crearCuenta,
      crearMeta: pantallaCrearMeta,
      metasCreadas: pantallaMetasCreadas,
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
    item:
    {
      color: 'white',
      backgroundColor: '#525D3B',
      fontSize: 15,
    },
    welcomeText:
    {
      color: 'gray',
      fontSize: 18,
    },
    viewList:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#525D3B',
    },
  });
  

AppRegistry.registerComponent('laPantalla', () => laPantalla);