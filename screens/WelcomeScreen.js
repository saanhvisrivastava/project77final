import * as React from 'react';
import {Text,View,TouchableOpacity,Alert,StyleSheet,TextInput,Image} from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailaddress:"",
            password:""
        }
    }

    signUp=(email,pass)=>{
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
        return Alert.alert("User added successfully")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
          // ..
        });
    }

    login=(email,pass)=>{
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => {
      return Alert.alert("Login successful")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
        // ..
      });
  }

render(){
    return(
      <View style={styles.container}>
          <View style={styles.profileContainer}>
          <Text style={styles.title}>Barter System</Text>
          </View>
          <View style={styles.buttonContainer}>
              <TextInput style={styles.loginBox}placeholder="abc@gmail.com"
              keyboardType="email-address"
              onChangeText={(text)=>{
               this.setState({
                   emailaddress:text
               })
              }}

              
              ></TextInput>

<TextInput placeholder="Abc647@"
              secureTextEntry={true}
              onChangeText={(text)=>{
               this.setState({
                   password:text
               })
              }}
              />

              <TouchableOpacity style={styles.button}
              onPress={()=>{this.signUp(this.state.emailaddress,this.state.password)}}
              >
                  <Text style={styles.buttonText}> Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>{this.login(this.state.emailaddress,this.state.password)}}
              >
                  <Text style={styles.buttonText}> Login</Text>
              </TouchableOpacity>
          </View>


      </View>

    )
}

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })
   
