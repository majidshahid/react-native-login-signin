import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator,TouchableOpacity, Touchable ,TextInput} from 'react-native';
import Login from "./Component";
import Signin from './Component/Signin';
export default function App() {
  let screen=<Login/>;
  function foo(){
     screen=<Signin/>
   
  }
  return (
    <View style={{padding:"5%"}}>
      <Text  style={{backgroundColor:"#98AFC7",color:"white"}}> Ecommerce Website</Text>
      <View style ={{display:"flex" ,flexDirection:"row"}}>
       <TouchableOpacity activeOpacity={0.7}  style={{backgroundColor:"#98AFC7",width:"50%" ,justifyContent:"center",alignItems:"center",borderRadius:5,marginTop:"4%"}}>
  <Text style={{color:"white"}}  >LOGIN</Text>
</TouchableOpacity> <TouchableOpacity activeOpacity={0.7}  style={{backgroundColor:"#98AFC7",width:"50%" ,justifyContent:"center",alignItems:"center",borderRadius:5,marginTop:"4%"}}>
  <Text style={{color:"white"}} onPress={foo} >Signin</Text>
</TouchableOpacity>
</View>
<View style={{marginTop:"5%"}}>{screen}</View>

    </View>
  );
}

