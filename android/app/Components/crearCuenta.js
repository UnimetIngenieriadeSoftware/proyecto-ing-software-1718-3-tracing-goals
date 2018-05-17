import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry,
  Dimensions, Icon, Right, Body
} from 'react-native'; 
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;




export default class crearCuenta extends Component {
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
        <Header style={styles.header} />
            <Content style= {styles.content}>
              <Form >
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label >Password</Label>
                  <Input />
                </Item>
              </Form>
            </Content>
      </Container>
      );
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
      backgroundColor: '#FFFFFF',
    },
    box2: {
      backgroundColor: '#525D3B',
    },
    box3: {
      backgroundColor: 'blue',
    },
    header: {
      backgroundColor: '#525D3B',
    },
  });



AppRegistry.registerComponent('crearCuenta', () => crearCuenta);