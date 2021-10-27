import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator,TouchableOpacity, Touchable ,TextInput} from 'react-native';

 function Signin() {
  return (
    <View style={{width:"100%" ,marginTop:"5%"}} >
     <Text style={{fontSize:"30px",backgroundColor:"#98AFC7",color:"white", width:"100%",paddingLeft:"2%"}}>Signin </Text>
    <View style={{width:"80%",justifyContent:"center",alignItems:"center",marginTop:"4%"}} >
        <Text style={{fontSize:"20px"}}>Email :</Text> <TextInput   keyboardType="email-address" placeholder ="Enter your Email" style={{borderColor:"#838996",borderWidth:"2px",width:"60%"}}/>
    <Text style={{fontSize:"20px"}}>Password :</Text>
     <TextInput keyboardType="unvisible-password" placeholder ="Enter your Password "  style={{borderColor:"#838996",borderWidth:"2px",width:"60%"}}/>
     <TouchableOpacity activeOpacity={0.7}  style={{backgroundColor:"#98AFC7",width:"80%" ,justifyContent:"center",alignItems:"center",borderRadius:5,marginTop:"4%"}}>
  <Text style={{color:"white"}}  >Signin</Text>
</TouchableOpacity>
    </View>
    




    </View>
  );
}


export default Signin;