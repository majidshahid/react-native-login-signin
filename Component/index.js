
import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator,TouchableOpacity, Touchable ,TextInput} from 'react-native';
import {Foo} from "./action";

 function Login() {
  return (
    <View style={{width:"100%"}} >
     <Text style={{fontSize:30,backgroundColor:"#7cffcb",color:"black", width:"100%",paddingLeft:"2%"}}>LOGIN </Text>
    <View style={{width:"80%",justifyContent:"center",alignItems:"center",marginTop:"4%"}} >
        <Text style={{fontSize:20}}>Email :</Text>
      <TextInput   keyboardType="email-address" placeholder ="Enter your Email" style={{borderColor:"#838996",borderWidth:2,width:"60%"}}/>
    <Text style={{fontSize:20}}>Password :</Text>
     <TextInput keyboardType="visible-password" placeholder ="Enter your Password "  style={{borderColor:"#838996",borderWidth:2,width:"60%"}}/>
     <TouchableOpacity activeOpacity={0.7}  style={{backgroundColor:"#7cffcb",width:"80%" ,justifyContent:"center",alignItems:"center",borderRadius:5,marginTop:"4%"}}>
  <Text style={{color:"black"}}  onPress={Foo}>LOGIN</Text>
</TouchableOpacity>
    </View>
    



    </View>
  );
}


export default Login;