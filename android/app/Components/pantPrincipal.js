import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon
} from 'react-native'; 
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Title, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import GoBackIcon from 'react-native-vector-icons/Entypo';
import StarIcon from 'react-native-vector-icons/MaterialCommunityIcons';

var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

import Icon1 from 'react-native-vector-icons/Entypo';



export default class pantPrincipal extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
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
          <Title style= {styles.daTitle}> Tracing Goals </Title>
      </Body>
  </Header>

 <Content style= {styles.content}>

       <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 100, width: width}}></Col>
        </Grid>
        
        <Grid>
        <Col style={{ backgroundColor: 'black', height: 70, width: 55}}></Col>


          <StarIcon name='star-circle' size={45} color= 'green'>
          <Text> al final dejo la portada. </Text>
      </StarIcon>

        </Grid>

      <Grid>
      <Col style={{ backgroundColor: '#f2f4fc', height: 50, width: 75}}></Col>
            
         
              <Button full rounded 
                    onPress= {() => {
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
                      this.setState(previousState => {
                        return { correo: correoVar, clave: claveVar };
                      });
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



AppRegistry.registerComponent('pantPrincipal', () => pantPrincipal);