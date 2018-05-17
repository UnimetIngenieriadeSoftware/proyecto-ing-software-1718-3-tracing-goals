import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon
} from 'react-native'; 
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Title, Button} from 'native-base';

var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;




export default class crearCuenta extends Component {
  constructor(props){
    super(props);
    this.state = { correo: 'll', clave: '', };
  }
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
        <Header style={styles.header}>
        <Left>
          
          </Left>
            <Body>
              <Title style= {styles.daTitle}> Crear Cuenta </Title>

              </Body>

        </Header>

            <Content style= {styles.content}>
              <Form >
                <Item floatingLabel>
                  <Label>Correo</Label>
                  <Input
                  onChangeText={(text) => this._changeText(text) }
                  value= {this.state.correo}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label >Clave</Label>
                  <Input/>s
                </Item>

                <Button rounded info 

                
                onPress= { this._onSignUpPress }

                >
                  <Text>Info</Text>
                </Button>
              </Form>
            </Content>
      </Container>
      );
    }

    //Crear funcion dentro de render()

    _onSignUpPress()
    {
      console.log('The button was pressed');
      console.log('El valor de correo es: '+ this.state.correo);
      
    }

    _changeText(texto)
    {
      console.log('se ha cambiado el texto ha: ' + texto);
      this.setState(correo: texto);
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
      backgroundColor: '#344169',
    },
    daTitle: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    }
  });



AppRegistry.registerComponent('crearCuenta', () => crearCuenta);