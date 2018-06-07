import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
Dimensions, Icon, FlatList, TouchableOpacity, Picker
} from 'react-native'; 
import Button from 'react-native-button';
import { Container, Header, Content, Form, Item, Input, Label,
Body, Title, List, Left, Right, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

//para mostrar las rutinas en un calendario. componente Agenda nos va a servir
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

//Para seleccionar los dias de la semana en que se repetira la rutina
import SelectMultiple from 'react-native-select-multiple';


//Iconos
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
      


      //antes se usaba el renderitem en una funcion aparte
      //se cambio debido a que hay que usar navigation y mandar variables
      //que no son accesibles aqui
      /*
      renderItem = ({ item }) => (
          <ListItem
          title={item.nombre}
          subtitle= {'Prioridad: ' + item.numeroPrioridad}
          rightIcon={
          
            <Button
            onPress= {() => {
              //cuando este boton este presionado se tiene que ir a una seccion donde
              //se muestre la meta con toda su informacion, y todas sus rutinas asociadas

              //hay que enviar email del usuario, usuarioid, y key de la meta
              this.props.navigation.navigate('mostrarLaMeta', { emaill: daEmail, usuariId: usuariId, keyMeta: item.key })
              } }
            >
              <ArrowRight name='arrow-right' size={26} color='darkolivegreen' > </ArrowRight>
            </Button>
        }
          />
      )
*/

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






            <Text style={styles.welcomeText}> Hola {nameUser}, estas son las metas existentes </Text>


            <View style={{height: 300}}>

<FlatList
  data={this.state.data}
  renderItem={//this.renderItem
    //la funcion renderItem tiene que estar aqui ya que se usa navigation
    //y dentro de navigation se mandan el email, usuarioid y nombre usuario
    ({item}) => {
      //cuando la funcion renderitem se usa aqui hay que agregar un return()
                    return(
                            <ListItem
                            //se desea agrandar un poco el title
                              title=//{item.nombre}
                              {
                                <View>
                                  <Text style={{fontSize: 17, textAlign: 'left',
                                  fontWeight: 'bold',color: '#525D3B'}}> {item.nombre} </Text>
                                </View>
                              }




                              subtitle= //{'Prioridad: ' + item.numeroPrioridad}
                              {
                                <View>
                                  <Text style={{fontSize: 12, textAlign: 'left',
                                  fontWeight: '300', color: '#525D3B'}}> {'Prioridad: ' + item.numeroPrioridad} </Text>
                                </View>
                              }

                              rightIcon={
                                    
                                        <Button
                                          onPress= {() => {
                                          //cuando este boton este presionado se tiene que ir a una seccion donde
                                          //se muestre la meta con toda su informacion, y todas sus rutinas asociadas

                                          //hay que enviar email del usuario, usuarioid, y key de la meta

                                            //los datos de la meta son: descripcion, fechaCulminacion, nombre,
                                            //numeroPrioridad, usuarioId
                                            //buscarlos en Firebase
                                            firebase.database().ref('Metas/'+item.key).once('value', snapshot => {
                                            
                                            var dData = snapshot.val();
                                            
                                          this.props.navigation.navigate('mostrarLaMeta', { emaill: daEmail, usuariId: usuariId, nameUser: nameUser, keyMeta: item.key,
                                          descripcionMeta: dData.descripcion, fechaCulminacion: dData.fechaCulminacion, nombreMeta: dData.nombre, numeroPriorid: dData.numeroPrioridad
                                        })
                                            
                                            
                                            });
                                                          }
                                                  }
                                        >
                                        <ArrowRight name='arrow-right' size={26} color='darkolivegreen' > </ArrowRight>
                                      </Button>
                                        }
                            />
                          )
                }

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

      </View>

          
     </Content>         
    </Container>
          );
        }
      }


class pantMostrarMetaIndividual extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Meta',
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
                </Button>
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
      const keyMeta = navigation.getParam('keyMeta', 'aDefaultValueForTheyKey');
      const descripMeta = navigation.getParam('descripcionMeta', 'aDefValue');
      const fechCulmi = navigation.getParam('fechaCulminacion', 'aValueForDefault');
      const nombMeta = navigation.getParam('nombreMeta','aDValue');
      const numPrioMeta = navigation.getParam('numeroPriorid','umvalue');


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
        
        <Card>
          <CardItem header bordered>
            <Text style={{color: '#525D3B', fontSize: 19, fontWeight: 'bold'}}> {nombMeta} </Text>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{color: '#525D3B', fontSize: 14, fontWeight: '300',
              textAlign: 'left'}}>
                {descripMeta}
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{color: '#525D3B', fontSize: 14, fontWeight: '300',
              textAlign: 'left'}}>
                Culminacion: {fechCulmi}
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{color: '#525D3B', fontSize: 14, fontWeight: '300',
              textAlign: 'left'}}>
              Prioridad: {numPrioMeta}
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{color: '#525D3B', fontSize: 14, fontWeight: '300',
              textAlign: 'left'}}>
                Usuario ID: {usuariId}
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Text style={{color: '#525D3B', fontSize: 14, fontWeight: '300',
              textAlign: 'left'}}>
                Meta ID: {keyMeta}
              </Text>
            </Body>
          </CardItem>


          </Card>

{/* aqui poner boton para crear rutina*/}

        
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
        </Grid>

      <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 40}}></Col>

        <Button 
                      onPress= {() => {
                      this.props.navigation.navigate('crearRutina',
                      {
                      daEmail: daEmail, 
                      usuariId: usuariId,
                      nameUser: nameUser,
                      metaId: keyMeta,
                      nombreMeta: nombMeta,
                      } 
                    )
                      } 
                    }
                      style={{fontSize: 15, color: '#f2f4fc'}}
                      containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
            >
                      Crear Rutina {space}  
                      <CalendarIcon name='calendar' size={15} color= 'gold'>
                      </CalendarIcon>
            </Button>

        <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 10}}></Col>

          <Button 
                      onPress= {() => {

                      this.props.navigation.navigate('rutinasCreadas',
                      {
                      daEmail: daEmail, 
                      usuariId: usuariId,
                      nameUser: nameUser,
                      metaId: keyMeta,
                      nombreMeta: nombMeta,
                      } 
                    )
                      } 
                    }
                      style={{fontSize: 15, color: '#f2f4fc'}}
                      containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
            >
                      Mostrar Rutinas {space}  
                      <CalendarIcon name='calendar' size={15} color= 'gold'>
                      </CalendarIcon>
            </Button>




        </Grid>
 </Content>         
</Container>
      );
    }
  }

  var laMetId;

  class pantallaRutinasCreadas extends Component {
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

      //se necesita poner en los datos en state los valores de la rutina

      firebase.database().ref('Rutinas/').once('value', snapshot => {
        var ellObj = snapshot.val();
        var anArray = [];
        console.log(ellObj);
        for(x in ellObj)
        {
          console.log(ellObj[x]);
          if(ellObj[x].metaId==laMetId)
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
    


    //antes se usaba el renderitem en una funcion aparte
    //se cambio debido a que hay que usar navigation y mandar variables
    //que no son accesibles aqui
    /*
    renderItem = ({ item }) => (
        <ListItem
        title={item.nombre}
        subtitle= {'Prioridad: ' + item.numeroPrioridad}
        rightIcon={
        
          <Button
          onPress= {() => {
            //cuando este boton este presionado se tiene que ir a una seccion donde
            //se muestre la meta con toda su informacion, y todas sus rutinas asociadas

            //hay que enviar email del usuario, usuarioid, y key de la meta
            this.props.navigation.navigate('mostrarLaMeta', { emaill: daEmail, usuariId: usuariId, keyMeta: item.key })
            } }
          >
            <ArrowRight name='arrow-right' size={26} color='darkolivegreen' > </ArrowRight>
          </Button>
      }
        />
    )
*/



      render(){
        let space = ' '; 
        const { navigation } = this.props;
        const daEmail = navigation.getParam('daEmail', 'aDefaultValue');
        const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
        const nameUser = navigation.getParam('nameUser', 'aDefaultValue');
        const metaId = navigation.getParam('metaId','defValue');
        const nombreMeta = navigation.getParam('nombreMeta','deffvalue');


        laMetId=metaId;


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






          <Text style={styles.welcomeText}> Hola {nameUser}, estas son las metas existentes </Text>


          <View style={{height: 300}}>

<FlatList
data={this.state.data}
renderItem={//this.renderItem
  //la funcion renderItem tiene que estar aqui ya que se usa navigation
  //y dentro de navigation se mandan el email, usuarioid y nombre usuario
  ({item}) => {
    //cuando la funcion renderitem se usa aqui hay que agregar un return()
                  return(
                          <ListItem
                          //se desea agrandar un poco el title
                            title=//{item.nombre}
                            {
                              <View>
                                <Text style={{fontSize: 17, textAlign: 'left',
                                fontWeight: 'bold',color: '#525D3B'}}> {item.nombre} </Text>
                              </View>
                            }




                            subtitle= //{'Prioridad: ' + item.numeroPrioridad}
                            {
                              <View>
                                <Text style={{fontSize: 12, textAlign: 'left',
                                fontWeight: '300', color: '#525D3B'}}> {'Prioridad: ' + item.numPrior} </Text>
                              </View>
                            }

                            rightIcon={
                                  
                                      <Button
                                        onPress= {() => {
                                          


                                          //cuando este boton se presione se tiene que ir a una pantalla que sea de mostrar
                                          //la rutina

                                          firebase.database().ref('Rutinas/'+item.key).once('value', snapshot => {
                                          
                                          var dData = snapshot.val();
                                          
                                        this.props.navigation.navigate('mostrarLaMeta', { emaill: daEmail, usuariId: usuariId, nameUser: nameUser, keyMeta: item.key,
                                        descripcionMeta: dData.descripcion, fechaCulminacion: dData.fechaCulminacion, nombreMeta: dData.nombre, numeroPriorid: dData.numeroPrioridad
                                      })
                                          
                                          
                                          });
                                                        }
                                                }
                                      >
                                      <ArrowRight name='arrow-right' size={26} color='darkolivegreen' > </ArrowRight>
                                    </Button>
                                      }
                          />
                        )
              }

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

    </View>

        
   </Content>         
  </Container>
        );
      }
    }







var nombreRut = '';
var numeroPriorRut = '';
var tiempoAntesNot;
var tiempoDespuesNot;

  class pantallaCrearRutina extends Component {
    static navigationOptions = ({ navigation }) => ({
        //title: 'Email is: ' + navigation.state.params.emaill ,
        title: 'Crear Rutina',
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
    });
  
    constructor(props){
      super(props);
    }

      render(){
        var space = ' ';
        const { navigation } = this.props;
        const daEmaill = navigation.getParam('daEmaill', 'aDefaultValue');
        const usuariId = navigation.getParam('usuariId', 'anotherDefaultValue');
        const nameUser = navigation.getParam('nameUser', 'aDefaultValue');
        const metaId = navigation.getParam('metaId', 'defValue');
        const nombreMeta = navigation.getParam('nombreMeta', 'dfvalue');

        return(
   <Container>
  
   <Content style= {styles.content}>
  
        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 15, width: width}}></Col>
        </Grid>          
          <Text style={styles.welcomeText}> {nameUser}, ingrese los datos de la nueva rutina de la meta: {nombreMeta}</Text> 
         <Grid>
       
   <Content style= {styles.content}>
     <Form>
       <Item floatingLabel>
         <Label style={{fontSize: 12}}>Nombre</Label>
         <Input 
         onChangeText={(text) => {
          nombreRut = text;
        }}
         />
       </Item>
       <Item floatingLabel>
         <Label style={{fontSize: 12}}>Numero de prioridad</Label>
         <Input 
         keyboardType = 'numeric'
         onChangeText={(text) => {
          numeroPriorRut = text;
        }}
         />
       </Item>

       {/*cada cuanto se repite. */}
       <Item floatingLabel>
         <Label style={{fontSize: 12}}>Minutos antes en emitir notificacion de aviso</Label>
         <Input 
         keyboardType = 'numeric'
         onChangeText={(text) => {
          tiempoAntesNot = text;
        }}
         />
       </Item>

        <Item floatingLabel>
         <Label style={{fontSize: 12}}>Minutos despues en preguntar por completacion</Label>
         <Input 
         keyboardType = 'numeric'
         onChangeText={(text) => {
          tiempoDespuesNot = text;
        }}
         />
       </Item>




        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
        </Grid>


        {/*
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
        */}

        <Grid>
        <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
        </Grid>

        <Grid>
       <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
          <Button 
                    onPress= {() => {
                      
                      //ir a una siguiente pantalla que permita establecer las condiciones de: cuanto tiempo durara, cada cuanto se repetira, etc.

                      //crear nueva pantalla

                      //crearRutina2

                      this.props.navigation.navigate('crearRutina2',
                      {
                      nombreRut: nombreRut, 
                      numeroPriorRut: numeroPriorRut,
                      nameUser: nameUser,
                      metaId: metaId,
                      tiempoAntesNot: tiempoAntesNot,
                      tiempoDespuesNot: tiempoDespuesNot,
                      usuariId: usuariId,
                      } 
                    )
                    } }
                    style={{fontSize: 15, color: '#f2f4fc'}}
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
          >
                    Continuar {space}
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

    //esta pantalla sirve simplemente para preguntar cuantas veces por dia se repetira
    //la rutina
    class pantallaCrearRutina2 extends Component {
      static navigationOptions = {
        title: 'Crear Rutina',
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
    };
  
      constructor(props){
        super(props);
        this.state = {
          repeticionesPorDia: 1,
        };
      }

        render(){
          var space = ' ';
          const { navigation } = this.props;
          const nombreRut = navigation.getParam('nombreRut', 'aDefValue');
          const numeroPriorRut = navigation.getParam('numeroPriorRut','aDefVal');
          const nameUser = navigation.getParam('nameUser','aDeffValue');
          const metaId = navigation.getParam('metaId', 'aDefffValue');
          const tiempoAntesNot = navigation.getParam('tiempoAntesNot', 'aDefValue');
          const tiempoDespuesNot = navigation.getParam('tiempoDespuesNot','defvALLL');
          const usuariId = navigation.getParam('usuariId','dvalue');
          var repPorDia;
          return(
     <Container>
    
     <Content style= {styles.content}>
       <Form>
          
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
          </Grid>

            <Text style={styles.welcomeText}> Indique cuantas veces por dia se repetira la rutina: {nombreRut} </Text> 

          <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 35, width: width}}></Col>
          </Grid>

              <Picker
                selectedValue={this.state.repeticionesPorDia}        
                onValueChange={(itemValue, itemIndex) =>  this.setState({repeticionesPorDia: itemValue}) }
              >
              <Picker.Item label='1' value = '1' />
              <Picker.Item label='2' value = '2' />
                </Picker>

            <Grid>
                <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
                    <Button 
                              onPress= {() => {
                                repPorDia = this.state.repeticionesPorDia;
                                this.props.navigation.navigate('crearRutina3',
                                {
                                nombreRut: nombreRut, 
                                numeroPriorRut: numeroPriorRut,
                                nameUser: nameUser,
                                metaId: metaId,
                                tiempoAntesNot: tiempoAntesNot,
                                tiempoDespuesNot: tiempoDespuesNot,
                                usuariId: usuariId,
                                vecesPorDia: repPorDia,
                                } 
                              )
                              } }
                              style={{fontSize: 15, color: '#f2f4fc'}}
                              containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                    >
                              Continuar {space}
                              <TrophyIcon name='trophy' size={15} color= 'gold'>
                              </TrophyIcon>
                    </Button>
                    <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
          </Grid>
       </Form>
     </Content>         
    </Container>
          );
        }  
     }


     class pantallaCrearRutina3 extends Component {
      static navigationOptions = {
        title: 'Crear Rutina',
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
    };
  
      constructor(props){
        super(props);
        this.state = {
          selectedInicioHours1: 0,
          selectedInicioMinutes1: 0,
          selectedFinHours1: 0,
          selectedFinMinutes1: 0,

          selectedInicioHours2: 0,
          selectedInicioMinutes2: 0,
          selectedFinHours2: 0,
          selectedFinMinutes2: 0,
        };
        this.function1 = this.function1.bind(this);
      }

      function1(itemValue){
        selectedInicioHours1 = itemValue;
        this.setState({
          selectedInicioHours1: itemValue
        });
      }

        render(){
          var space = ' ';
          const { navigation } = this.props;
          const nombreRut = navigation.getParam('nombreRut', 'aDefValue');
          const numeroPriorRut = navigation.getParam('numeroPriorRut','aDefVal');
          const nameUser = navigation.getParam('nameUser','aDeffValue');
          const metaId = navigation.getParam('metaId', 'aDefffValue');
          const tiempoAntesNot = navigation.getParam('tiempoAntesNot', 'aDefValue');
          const tiempoDespuesNot = navigation.getParam('tiempoDespuesNot','defvALLL');
          const usuariId = navigation.getParam('usuariId','dvalue');
          const vecesPorDia = navigation.getParam('vecesPorDia','dVValue');

          var selectedInicioHours1;
          var selectedInicioMinutes1;
          var selectedFinHours1;
          var selectedFinMinutes1;

          var selectedInicioHours2 ;
          var selectedInicioMinutes2;
          var selectedFinHours2;
          var selectedFinMinutes2;

          //si la rutina se repite 1 vez por dia que no se muestre el segundo timepicker
          //como hago? necesito una variable que esta true o false dependiendo del valor de vecesPorDia
         var showSecond = vecesPorDia-1;


          return(
     <Container>
    
     <Content style= {styles.content}>
       <Form>
          
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
          </Grid>

            <Text style={styles.welcomeText}> Indique hora de inicio y de culminacion de la rutina: {nombreRut} </Text> 

          <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 15, width: width}}></Col>
            
          </Grid>
          
            <View>
            <Text style={{fontSize: 25, color: '#525D3B', fontWeight: 'bold'}}> 1era </Text>
              <Text style={{fontSize: 15, color: '#525D3B', fontWeight: 'bold'}}> Inicio </Text>

              <Text style={{fontSize: 25, color: '#525D3B',
                            fontWeight: 'bold'
            }}> {this.state.selectedInicioHours1}:{this.state.selectedInicioMinutes1} </Text>

              <View style={{height: 150, width: width}}>

                <Text style={{color: '#525D3B'}}> Hora </Text>
              
                      <Picker
                        selectedValue={this.state.selectedInicioHours1}        
                        onValueChange={

                          (itemValue,itemIndex) => {this.function1(itemValue)}



                          /*
                          (itemValue, itemIndex) => {
                          this.setState({
                            selectedInicioHours1: itemValue
                          })
                          selectedInicioHours1=itemValue;
                          console.log('this.state.selectedInicioHours1: '+this.state.selectedInicioHours1);
                        } 
                      */
                      }
                      >
                        <Picker.Item label='0' value = '0' />
                        <Picker.Item label='1' value = '1' />
                        <Picker.Item label='2' value = '2' />
                        <Picker.Item label='3' value = '3' />
                        <Picker.Item label='4' value = '4' />
                        <Picker.Item label='5' value = '5' />
                        <Picker.Item label='6' value = '6' />
                        <Picker.Item label='7' value = '7' />
                        <Picker.Item label='8' value = '8' />
                        <Picker.Item label='9' value = '9' />
                        <Picker.Item label='10' value = '10' />
                        <Picker.Item label='11' value = '11' />
                        <Picker.Item label='12' value = '12' />
                        <Picker.Item label='13' value = '13' />
                        <Picker.Item label='14' value = '14' />
                        <Picker.Item label='15' value = '15' />
                        <Picker.Item label='16' value = '16' />
                        <Picker.Item label='17' value = '17' />
                        <Picker.Item label='18' value = '18' />
                        <Picker.Item label='19' value = '19' />
                        <Picker.Item label='20' value = '20' />
                        <Picker.Item label='21' value = '21' />
                        <Picker.Item label='22' value = '22' />
                        <Picker.Item label='23' value = '23' />
                      </Picker>


                      <Text style={{color: '#525D3B'}}> Minuto </Text>
                      <Picker
                        selectedValue={this.state.selectedInicioMinutes1}        
                        onValueChange={(itemValue, itemIndex) => {
                          this.setState({
                            selectedInicioMinutes1: itemValue
                          })
                          selectedInicioMinutes1=itemValue;
                        } }
                      >
                        <Picker.Item label='0' value = '0' />
                        <Picker.Item label='1' value = '1' />
                        <Picker.Item label='2' value = '2' />
                        <Picker.Item label='3' value = '3' />
                        <Picker.Item label='4' value = '4' />
                        <Picker.Item label='5' value = '5' />
                        <Picker.Item label='6' value = '6' />
                        <Picker.Item label='7' value = '7' />
                        <Picker.Item label='8' value = '8' />
                        <Picker.Item label='9' value = '9' />
                        <Picker.Item label='10' value = '10' />
                        <Picker.Item label='11' value = '11' />
                        <Picker.Item label='12' value = '12' />
                        <Picker.Item label='13' value = '13' />
                        <Picker.Item label='14' value = '14' />
                        <Picker.Item label='15' value = '15' />
                        <Picker.Item label='16' value = '16' />
                        <Picker.Item label='17' value = '17' />
                        <Picker.Item label='18' value = '18' />
                        <Picker.Item label='19' value = '19' />
                        <Picker.Item label='20' value = '20' />
                        <Picker.Item label='21' value = '21' />
                        <Picker.Item label='22' value = '22' />
                        <Picker.Item label='23' value = '23' />
                        <Picker.Item label='24' value = '24' />
                        <Picker.Item label='25' value = '25' />
                        <Picker.Item label='26' value = '26' />
                        <Picker.Item label='27' value = '27' />
                        <Picker.Item label='28' value = '28' />
                        <Picker.Item label='29' value = '29' />
                        <Picker.Item label='30' value = '30' />
                        <Picker.Item label='31' value = '31' />
                        <Picker.Item label='32' value = '32' />
                        <Picker.Item label='33' value = '33' />
                        <Picker.Item label='34' value = '34' />
                        <Picker.Item label='35' value = '35' />
                        <Picker.Item label='36' value = '36' />
                        <Picker.Item label='37' value = '37' />
                        <Picker.Item label='38' value = '38' />
                        <Picker.Item label='39' value = '39' />
                        <Picker.Item label='40' value = '40' />
                        <Picker.Item label='41' value = '41' />
                        <Picker.Item label='42' value = '42' />
                        <Picker.Item label='43' value = '43' />
                        <Picker.Item label='44' value = '44' />
                        <Picker.Item label='45' value = '45' />
                        <Picker.Item label='46' value = '46' />
                        <Picker.Item label='47' value = '47' />
                        <Picker.Item label='48' value = '48' />
                        <Picker.Item label='49' value = '49' />
                        <Picker.Item label='50' value = '50' />
                        <Picker.Item label='51' value = '51' />
                        <Picker.Item label='52' value = '52' />
                        <Picker.Item label='53' value = '53' />
                        <Picker.Item label='54' value = '54' />
                        <Picker.Item label='55' value = '55' />
                        <Picker.Item label='56' value = '56' />
                        <Picker.Item label='57' value = '57' />
                        <Picker.Item label='58' value = '58' />
                        <Picker.Item label='59' value = '59' />
                      </Picker>
                      </View>
              
              </View>

                        <View>

<Text style={{fontSize: 15, color: '#525D3B', fontWeight: 'bold'}}> Fin </Text>

<Text style={{fontSize: 25, color: '#525D3B',
              fontWeight: 'bold'
}}> {this.state.selectedFinHours1}:{this.state.selectedFinMinutes1} </Text>

<View style={{height: 150, width: width}}>

  <Text style={{color: '#525D3B'}}> Hora </Text>

        <Picker
          selectedValue={this.state.selectedFinHours1}        
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              selectedFinHours1: itemValue
            })
            selectedFinHours1=itemValue;
          } }
        >
          <Picker.Item label='0' value = '0' />
          <Picker.Item label='1' value = '1' />
          <Picker.Item label='2' value = '2' />
          <Picker.Item label='3' value = '3' />
          <Picker.Item label='4' value = '4' />
          <Picker.Item label='5' value = '5' />
          <Picker.Item label='6' value = '6' />
          <Picker.Item label='7' value = '7' />
          <Picker.Item label='8' value = '8' />
          <Picker.Item label='9' value = '9' />
          <Picker.Item label='10' value = '10' />
          <Picker.Item label='11' value = '11' />
          <Picker.Item label='12' value = '12' />
          <Picker.Item label='13' value = '13' />
          <Picker.Item label='14' value = '14' />
          <Picker.Item label='15' value = '15' />
          <Picker.Item label='16' value = '16' />
          <Picker.Item label='17' value = '17' />
          <Picker.Item label='18' value = '18' />
          <Picker.Item label='19' value = '19' />
          <Picker.Item label='20' value = '20' />
          <Picker.Item label='21' value = '21' />
          <Picker.Item label='22' value = '22' />
          <Picker.Item label='23' value = '23' />
        </Picker>


        <Text style={{color: '#525D3B'}}> Minuto </Text>
        <Picker
          selectedValue={this.state.selectedFinMinutes1}        
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              selectedFinMinutes1: itemValue
            })
            selectedFinMinutes1=itemValue;
          } }
        >
          <Picker.Item label='0' value = '0' />
          <Picker.Item label='1' value = '1' />
          <Picker.Item label='2' value = '2' />
          <Picker.Item label='3' value = '3' />
          <Picker.Item label='4' value = '4' />
          <Picker.Item label='5' value = '5' />
          <Picker.Item label='6' value = '6' />
          <Picker.Item label='7' value = '7' />
          <Picker.Item label='8' value = '8' />
          <Picker.Item label='9' value = '9' />
          <Picker.Item label='10' value = '10' />
          <Picker.Item label='11' value = '11' />
          <Picker.Item label='12' value = '12' />
          <Picker.Item label='13' value = '13' />
          <Picker.Item label='14' value = '14' />
          <Picker.Item label='15' value = '15' />
          <Picker.Item label='16' value = '16' />
          <Picker.Item label='17' value = '17' />
          <Picker.Item label='18' value = '18' />
          <Picker.Item label='19' value = '19' />
          <Picker.Item label='20' value = '20' />
          <Picker.Item label='21' value = '21' />
          <Picker.Item label='22' value = '22' />
          <Picker.Item label='23' value = '23' />
          <Picker.Item label='24' value = '24' />
          <Picker.Item label='25' value = '25' />
          <Picker.Item label='26' value = '26' />
          <Picker.Item label='27' value = '27' />
          <Picker.Item label='28' value = '28' />
          <Picker.Item label='29' value = '29' />
          <Picker.Item label='30' value = '30' />
          <Picker.Item label='31' value = '31' />
          <Picker.Item label='32' value = '32' />
          <Picker.Item label='33' value = '33' />
          <Picker.Item label='34' value = '34' />
          <Picker.Item label='35' value = '35' />
          <Picker.Item label='36' value = '36' />
          <Picker.Item label='37' value = '37' />
          <Picker.Item label='38' value = '38' />
          <Picker.Item label='39' value = '39' />
          <Picker.Item label='40' value = '40' />
          <Picker.Item label='41' value = '41' />
          <Picker.Item label='42' value = '42' />
          <Picker.Item label='43' value = '43' />
          <Picker.Item label='44' value = '44' />
          <Picker.Item label='45' value = '45' />
          <Picker.Item label='46' value = '46' />
          <Picker.Item label='47' value = '47' />
          <Picker.Item label='48' value = '48' />
          <Picker.Item label='49' value = '49' />
          <Picker.Item label='50' value = '50' />
          <Picker.Item label='51' value = '51' />
          <Picker.Item label='52' value = '52' />
          <Picker.Item label='53' value = '53' />
          <Picker.Item label='54' value = '54' />
          <Picker.Item label='55' value = '55' />
          <Picker.Item label='56' value = '56' />
          <Picker.Item label='57' value = '57' />
          <Picker.Item label='58' value = '58' />
          <Picker.Item label='59' value = '59' />
        </Picker>
        </View>

</View>


                  <View>
                  {
                    //se usa operador ternario
                    //showSecond indica si se muestra o no el 2do tiempo de la rutina
                    showSecond ? 
                  <View style={{height: 500, width: 300}}>

                  <Text style={{fontSize: 25, color: '#525D3B', fontWeight: 'bold'}}> 2da </Text>


                    <Text style={{fontSize: 15, color: '#525D3B', fontWeight: 'bold'}}> Inicio </Text>

                <Text style={{fontSize: 25, color: '#525D3B',
                            fontWeight: 'bold'
            }}> {this.state.selectedInicioHours2}:{this.state.selectedInicioMinutes2} </Text>

              <Text style={{color: '#525D3B'}}> Hora </Text>
              <Picker
                selectedValue={this.state.selectedInicioHours2}        
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    selectedInicioHours2: itemValue
                  })
                  selectedInicioHours2=itemValue;
                } }
              >
                <Picker.Item label='0' value = '0' />
                <Picker.Item label='1' value = '1' />
                <Picker.Item label='2' value = '2' />
                <Picker.Item label='3' value = '3' />
                <Picker.Item label='4' value = '4' />
                <Picker.Item label='5' value = '5' />
                <Picker.Item label='6' value = '6' />
                <Picker.Item label='7' value = '7' />
                <Picker.Item label='8' value = '8' />
                <Picker.Item label='9' value = '9' />
                <Picker.Item label='10' value = '10' />
                <Picker.Item label='11' value = '11' />
                <Picker.Item label='12' value = '12' />
                <Picker.Item label='13' value = '13' />
                <Picker.Item label='14' value = '14' />
                <Picker.Item label='15' value = '15' />
                <Picker.Item label='16' value = '16' />
                <Picker.Item label='17' value = '17' />
                <Picker.Item label='18' value = '18' />
                <Picker.Item label='19' value = '19' />
                <Picker.Item label='20' value = '20' />
                <Picker.Item label='21' value = '21' />
                <Picker.Item label='22' value = '22' />
                <Picker.Item label='23' value = '23' />
              </Picker>
              

              <Text style={{color: '#525D3B'}}> Minuto </Text>
              <Picker
                selectedValue={this.state.selectedInicioMinutes2}        
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    selectedInicioMinutes2: itemValue
                  })
                  selectedInicioMinutes2=itemValue;
                } }
              >
                <Picker.Item label='0' value = '0' />
                <Picker.Item label='1' value = '1' />
                <Picker.Item label='2' value = '2' />
                <Picker.Item label='3' value = '3' />
                <Picker.Item label='4' value = '4' />
                <Picker.Item label='5' value = '5' />
                <Picker.Item label='6' value = '6' />
                <Picker.Item label='7' value = '7' />
                <Picker.Item label='8' value = '8' />
                <Picker.Item label='9' value = '9' />
                <Picker.Item label='10' value = '10' />
                <Picker.Item label='11' value = '11' />
                <Picker.Item label='12' value = '12' />
                <Picker.Item label='13' value = '13' />
                <Picker.Item label='14' value = '14' />
                <Picker.Item label='15' value = '15' />
                <Picker.Item label='16' value = '16' />
                <Picker.Item label='17' value = '17' />
                <Picker.Item label='18' value = '18' />
                <Picker.Item label='19' value = '19' />
                <Picker.Item label='20' value = '20' />
                <Picker.Item label='21' value = '21' />
                <Picker.Item label='22' value = '22' />
                <Picker.Item label='23' value = '23' />
                <Picker.Item label='24' value = '24' />
                <Picker.Item label='25' value = '25' />
                <Picker.Item label='26' value = '26' />
                <Picker.Item label='27' value = '27' />
                <Picker.Item label='28' value = '28' />
                <Picker.Item label='29' value = '29' />
                <Picker.Item label='30' value = '30' />
                <Picker.Item label='31' value = '31' />
                <Picker.Item label='32' value = '32' />
                <Picker.Item label='33' value = '33' />
                <Picker.Item label='34' value = '34' />
                <Picker.Item label='35' value = '35' />
                <Picker.Item label='36' value = '36' />
                <Picker.Item label='37' value = '37' />
                <Picker.Item label='38' value = '38' />
                <Picker.Item label='39' value = '39' />
                <Picker.Item label='40' value = '40' />
                <Picker.Item label='41' value = '41' />
                <Picker.Item label='42' value = '42' />
                <Picker.Item label='43' value = '43' />
                <Picker.Item label='44' value = '44' />
                <Picker.Item label='45' value = '45' />
                <Picker.Item label='46' value = '46' />
                <Picker.Item label='47' value = '47' />
                <Picker.Item label='48' value = '48' />
                <Picker.Item label='49' value = '49' />
                <Picker.Item label='50' value = '50' />
                <Picker.Item label='51' value = '51' />
                <Picker.Item label='52' value = '52' />
                <Picker.Item label='53' value = '53' />
                <Picker.Item label='54' value = '54' />
                <Picker.Item label='55' value = '55' />
                <Picker.Item label='56' value = '56' />
                <Picker.Item label='57' value = '57' />
                <Picker.Item label='58' value = '58' />
                <Picker.Item label='59' value = '59' />
              </Picker>


                  <Text style={{fontSize: 15, color: '#525D3B', fontWeight: 'bold'}}> Fin </Text>

                  <Text style={{fontSize: 25, color: '#525D3B',
                              fontWeight: 'bold'
                  }}> {this.state.selectedFinHours2}:{this.state.selectedFinMinutes2} </Text>

                  <Text style={{color: '#525D3B'}}> Hora </Text>
                  <Picker
                  selectedValue={this.state.selectedFinHours2}        
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({
                      selectedFinHours2: itemValue
                    })
                    selectedFinHours2=itemValue;
                  } }
                  >
                  <Picker.Item label='0' value = '0' />
                  <Picker.Item label='1' value = '1' />
                  <Picker.Item label='2' value = '2' />
                  <Picker.Item label='3' value = '3' />
                  <Picker.Item label='4' value = '4' />
                  <Picker.Item label='5' value = '5' />
                  <Picker.Item label='6' value = '6' />
                  <Picker.Item label='7' value = '7' />
                  <Picker.Item label='8' value = '8' />
                  <Picker.Item label='9' value = '9' />
                  <Picker.Item label='10' value = '10' />
                  <Picker.Item label='11' value = '11' />
                  <Picker.Item label='12' value = '12' />
                  <Picker.Item label='13' value = '13' />
                  <Picker.Item label='14' value = '14' />
                  <Picker.Item label='15' value = '15' />
                  <Picker.Item label='16' value = '16' />
                  <Picker.Item label='17' value = '17' />
                  <Picker.Item label='18' value = '18' />
                  <Picker.Item label='19' value = '19' />
                  <Picker.Item label='20' value = '20' />
                  <Picker.Item label='21' value = '21' />
                  <Picker.Item label='22' value = '22' />
                  <Picker.Item label='23' value = '23' />
                  </Picker>


                  <Text style={{color: '#525D3B'}}> Minuto </Text>
                  <Picker
                  selectedValue={this.state.selectedFinMinutes2}        
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({
                      selectedFinMinutes2: itemValue
                    })
                    selectedFinMinutes2=itemValue;
                  } }
                  >
                  <Picker.Item label='0' value = '0' />
                  <Picker.Item label='1' value = '1' />
                  <Picker.Item label='2' value = '2' />
                  <Picker.Item label='3' value = '3' />
                  <Picker.Item label='4' value = '4' />
                  <Picker.Item label='5' value = '5' />
                  <Picker.Item label='6' value = '6' />
                  <Picker.Item label='7' value = '7' />
                  <Picker.Item label='8' value = '8' />
                  <Picker.Item label='9' value = '9' />
                  <Picker.Item label='10' value = '10' />
                  <Picker.Item label='11' value = '11' />
                  <Picker.Item label='12' value = '12' />
                  <Picker.Item label='13' value = '13' />
                  <Picker.Item label='14' value = '14' />
                  <Picker.Item label='15' value = '15' />
                  <Picker.Item label='16' value = '16' />
                  <Picker.Item label='17' value = '17' />
                  <Picker.Item label='18' value = '18' />
                  <Picker.Item label='19' value = '19' />
                  <Picker.Item label='20' value = '20' />
                  <Picker.Item label='21' value = '21' />
                  <Picker.Item label='22' value = '22' />
                  <Picker.Item label='23' value = '23' />
                  <Picker.Item label='24' value = '24' />
                  <Picker.Item label='25' value = '25' />
                  <Picker.Item label='26' value = '26' />
                  <Picker.Item label='27' value = '27' />
                  <Picker.Item label='28' value = '28' />
                  <Picker.Item label='29' value = '29' />
                  <Picker.Item label='30' value = '30' />
                  <Picker.Item label='31' value = '31' />
                  <Picker.Item label='32' value = '32' />
                  <Picker.Item label='33' value = '33' />
                  <Picker.Item label='34' value = '34' />
                  <Picker.Item label='35' value = '35' />
                  <Picker.Item label='36' value = '36' />
                  <Picker.Item label='37' value = '37' />
                  <Picker.Item label='38' value = '38' />
                  <Picker.Item label='39' value = '39' />
                  <Picker.Item label='40' value = '40' />
                  <Picker.Item label='41' value = '41' />
                  <Picker.Item label='42' value = '42' />
                  <Picker.Item label='43' value = '43' />
                  <Picker.Item label='44' value = '44' />
                  <Picker.Item label='45' value = '45' />
                  <Picker.Item label='46' value = '46' />
                  <Picker.Item label='47' value = '47' />
                  <Picker.Item label='48' value = '48' />
                  <Picker.Item label='49' value = '49' />
                  <Picker.Item label='50' value = '50' />
                  <Picker.Item label='51' value = '51' />
                  <Picker.Item label='52' value = '52' />
                  <Picker.Item label='53' value = '53' />
                  <Picker.Item label='54' value = '54' />
                  <Picker.Item label='55' value = '55' />
                  <Picker.Item label='56' value = '56' />
                  <Picker.Item label='57' value = '57' />
                  <Picker.Item label='58' value = '58' />
                  <Picker.Item label='59' value = '59' />
                  </Picker>

                  </View>


              : null
            } 

            {/* datos para mandar, sirve de guia 
              const nombreRut = navigation.getParam('nombreRut', 'aDefValue');
          const numeroPriorRut = navigation.getParam('numeroPriorRut','aDefVal');
          const nameUser = navigation.getParam('nameUser','aDeffValue');
          const metaId = navigation.getParam('metaId', 'aDefffValue');
          const tiempoAntesNot = navigation.getParam('tiempoAntesNot', 'aDefValue');
          const tiempoDespuesNot = navigation.getParam('tiempoDespuesNot','defvALLL');
          const usuariId = navigation.getParam('usuariId','dvalue');
          const vecesPorDia = navigation.getParam('vecesPorDia','dVValue');

          var selectedInicioHours1 = 0;
          var selectedInicioMinutes1 = 0;
          var selectedFinHours1 = 0;
          var selectedFinMinutes1 = 0;

          var selectedInicioHours2 = 0;
          var selectedInicioMinutes2 = 0;
          var selectedFinHours2 = 0;
          var selectedFinMinutes2 = 0;

            */}

            {/*Boton para continuar proceso de creacion de rutinas
            se pasan todos los parametros, el siguiente paso es preguntar los dias de la semana los cuales las rutinas
            se activaran
            */}


        <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
            <Button 
                              onPress= {() => {
                                repPorDia = this.state.repeticionesPorDia;
                                this.props.navigation.navigate('crearRutina4',
                                {
                                nombreRut: nombreRut, 
                                numeroPriorRut: numeroPriorRut,
                                nameUser: nameUser,
                                metaId: metaId,
                                tiempoAntesNot: tiempoAntesNot,
                                tiempoDespuesNot: tiempoDespuesNot,
                                usuariId: usuariId,
                                //si es 1 es la rutina solo ocurre una vez por dia
                                //si es 2 es que la rutina ocurre 2 veces por dia
                                vecesPorDia: vecesPorDia,

                                
                                //se manda la info del tiempo de inicio y de salida de la repeticion 1 de la rutina
                                inicioHours1: this.state.selectedInicioHours1,
                                inicioMinutes1: this.state.selectedInicioMinutes1,
                                finHours1: this.state.selectedFinHours1,
                                finMinutes1: this.state.selectedFinMinutes1,


                                //se manda la info del tiempo de inicio y salida de la repeticion 2 de la rutina
                                inicioHours2: this.state.selectedInicioHours2,
                                inicioMinutes2: this.state.selectedInicioMinutes2,
                                finHours2: this.state.selectedFinHours2,
                                finMinutes2: this.state.selectedFinMinutes2,
                                } 
                              )
                              console.log('lo que se esta mandando');
                              console.log('inicio: '+selectedInicioHours1);
                              } 
                            
                            }
                              style={{fontSize: 15, color: '#f2f4fc'}}
                              containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                    >
                              Continuar {space}
                              <TrophyIcon name='trophy' size={15} color= 'gold'>
                              </TrophyIcon>
                    </Button>
                  <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
                </Grid>

            </View>


{/*
            <Grid>
                <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
                    <Button 
                              onPress= {() => {
                                repPorDia = this.state.repeticionesPorDia;
                                this.props.navigation.navigate('crearRutina3',
                                {
                                nombreRut: nombreRut, 
                                numeroPriorRut: numeroPriorRut,
                                nameUser: nameUser,
                                metaId: metaId,
                                tiempoAntesNot: tiempoAntesNot,
                                tiempoDespuesNot: tiempoDespuesNot,
                                usuariId: usuariId,
                                vecesPorDia: repPorDia,
                                  //mandar las 2 horas elegidas
                          
                                } 
                              )
                              } }
                              style={{fontSize: 15, color: '#f2f4fc'}}
                              containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                    >
                              Continuar {space}
                              <TrophyIcon name='trophy' size={15} color= 'gold'>
                              </TrophyIcon>
                    </Button>
                    <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
          </Grid>

                            */}

       </Form>
     </Content>         
    </Container>
          
          );
        }  
     }

     const weekList = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];


      //esta pantalla esta encargada de seleccionar que dias de la semana la rutina ocurrira
     class pantallaCrearRutina4 extends Component {
      static navigationOptions = {
        title: 'Crear Rutina',
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
    };
  
      constructor(props){
        super(props);
        this.state = {
          selectedDays: []
        };
      }

      onSelectionsChange = (selectedDays) => {
        this.setState({ selectedDays })
      }

        render(){
          var space = ' ';
          const { navigation } = this.props;
          const nombreRut = navigation.getParam('nombreRut', 'aDefValue');
          const numeroPriorRut = navigation.getParam('numeroPriorRut','aDefVal');
          const nameUser = navigation.getParam('nameUser','aDeffValue');
          const metaId = navigation.getParam('metaId', 'aDefffValue');
          const tiempoAntesNot = navigation.getParam('tiempoAntesNot', 'aDefValue');
          const tiempoDespuesNot = navigation.getParam('tiempoDespuesNot','defvALLL');
          const usuariId = navigation.getParam('usuariId','dvalue');
          const vecesPorDia = navigation.getParam('vecesPorDia','dddddValue');
          const inicioHours1 = navigation.getParam('inicioHours1','defaultvalue');
          const inicioMinutes1 = navigation.getParam('inicioMinutes1','defaultvalue');
          const finHours1 = navigation.getParam('finHours1','dddddefffvalue');
          const finMinutes1 = navigation.getParam('finMinutes1','aDefaultValueForMe');
          const inicioHours2 = navigation.getParam('inicioHours2','aDefaultValueForMe');
          const inicioMinutes2 = navigation.getParam('inicioMinutes2','aDefaultValueForMe');
          const finHours2 = navigation.getParam('finHours2','aDefaultValueForMe');
          const finMinutes2 = navigation.getParam('finMinutes2','aDefaultValueForMe');



          return(
     <Container>
    
     <Content style= {styles.content}>
       <Form>
          
          <Grid>
          <Col style={{ backgroundColor: '#f2f4fc', height: 20, width: width}}></Col>
          </Grid>

            <Text style={styles.welcomeText}> Eliga los dias de la semana en los cuales la rutina ocurrira  </Text> 

          <Grid>
            <Col style={{ backgroundColor: '#f2f4fc', height: 35, width: width}}></Col>
          </Grid>

            <Grid>
              <SelectMultiple
              items={weekList}
              selectedItems={this.state.selectedDays}
              onSelectionsChange={this.onSelectionsChange}
              />

              </Grid>
            <Grid>
                <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
                    <Button 
                              onPress= {() => {
                                  //Crear la rutina en base de datos


                                  firebase.database().ref('Rutinas/').once('value').then(snapshot => {
                                    //en snapshot tengo la data.
                                    //Ahora quiero saber cual es la rutina con mayor numero de id,
                                    //para la cual coloca sea mayor en 1
            
                                    myObj = snapshot.val();
            
                                    var codigoNuevaRutina=0;
                                    for(x in myObj)
                                    { 
                                      if(codigoNuevaRutina<=parseInt(x))
                                      {
                                        codigoNuevaRutina=parseInt(x);
                                      }
                                    }
                                    codigoNuevaRutina=codigoNuevaRutina+1;


                                    //mostrar los dias de la semana
                                    //poner en 1 los dias de la semana que se hayan elegido
                                    //poner en 0 los dias de la semana que no se hayan elegido
                                    //guardar en una lista todos los dias de la semana en que ocurrira la rutina
                                    

                                    var obj = this.state.selectedDays;
                                    var newObj = [];

                                    for(x in obj)
                                    {
                                      newObj.push(obj[x].value);
                                    }
                                    console.log(newObj);

                                    //en newObj esta la lista de dias en los cuales se realizara la rutina
                                    //los dias que estan ahi son los dias los cuales deben estar en 1 en firebase
                                    //creo 7 variables
                                    var lun=0, mar=0, mie=0, jue=0, vie=0, sab=0, dom=0;

                                    for(x in newObj)
                                    {
                                      if(newObj[x]=='Lunes')
                                      {
                                        lun=1;
                                      }else {
                                        if(newObj[x]=='Martes')
                                        {
                                          mar=1;
                                        } else {
                                          if(newObj[x]=='Miercoles')
                                          {
                                            mie=1;
                                          } else {
                                            if(newObj[x]=='Jueves')
                                            {
                                              jue=1;
                                            } else {
                                              if(newObj[x]=='Viernes')
                                              {
                                                vie=1;
                                              } else {
                                                if(newObj[x]=='Sabado')
                                                {
                                                  sab=1;
                                                } else {
                                                  if(newObj[x]=='Domingo')
                                                  {
                                                    dom=1;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }//fin del for

                                  firebase.database().ref('Rutinas/'+codigoNuevaRutina).set({
                                    nombre: nombreRut,
                                    numeroPrior: numeroPriorRut,         
                                    tiempoAntesNot: tiempoAntesNot,
                                    tiempoDespuesNot: tiempoDespuesNot,
                                    metaId: metaId,
                                    usuariCreadorId: usuariId,
                                    inicioHours1: inicioHours1,
                                    inicioMinutes1: inicioMinutes1,
                                    finHours1: finHours1,
                                    finMinutes1: finMinutes1,
                                    inicioHours2: inicioHours2,
                                    inicioMinutes2: inicioMinutes2,
                                    finHours2: finHours2,
                                    finMinutes2: finMinutes2,
                                    vecesPorDia: vecesPorDia,
                                    lunes: lun,
                                    martes: mar,
                                    miercoles: mie,
                                    jueves: jue,
                                    viernes: vie,
                                    sabado: sab,
                                    domingo: dom,
                                    key: codigoNuevaRutina
                                  });
                              })
                              navigation.navigate('Home3');
                             }
                            }
                            style={{fontSize: 15, color: '#f2f4fc'}}
                              containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 15, backgroundColor: '#525D3B'}}
                            >
                            Crear Rutina {space}
                            <TrophyIcon name='trophy' size={15} color= 'gold'>
                            </TrophyIcon>
                  </Button>
                  <Col style={{ backgroundColor: '#f2f4fc', height: 140, width: 119}}></Col>
        </Grid>
                        

       </Form>
     </Content>         
    </Container>
          );
        }  
     }


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
      mostrarLaMeta: pantMostrarMetaIndividual,
      crearRutina: pantallaCrearRutina,
      crearRutina2: pantallaCrearRutina2,
      crearRutina3: pantallaCrearRutina3,
      crearRutina4: pantallaCrearRutina4,
      rutinasCreadas: pantallaRutinasCreadas,
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
      fontSize: 16,
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