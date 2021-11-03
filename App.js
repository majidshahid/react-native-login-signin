import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Touchable, TextInput } from 'react-native';
import Login from "./Component";
import Signin from './Component/Signin';
import Reset  from './Component/Reset';
import { useState } from 'react';
import Quiz1 from './Component/pages/Quiz1';
export default function App() {
  var [state, setstate] = useState(<Login />)
    ;
  function foo() {
    setstate(<Signin />)

  } function foo1() {
    setstate(<Login />)

  }
  function foo2() {
    setstate(<Reset/>)

  }
  return (
    <View style={{ padding: "5%" }}>
      <Text style={{ backgroundColor: "#7cffcb", color: "black" , fontSize:20}}> Ecommerce Website</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={foo1} activeOpacity={0.7} style={{ backgroundColor: "#7cffcb", width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: "4%" }}>
          <Text style={{ color: "black", fontSize:20 }}  >LOGIN</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={foo} activeOpacity={0.7} style={{ backgroundColor: "#7cffcb", width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: "4%" }}>
          <Text style={{ color: "black", fontSize:20  }}  >Signin</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity onPress={foo2} activeOpacity={0.7} style={{ backgroundColor: "#7cffcb", width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: "4%" }}>
          <Text style={{ color: "black", fontSize:20 }}  >RESET</Text>
        </TouchableOpacity>
      <View style={{ marginTop: "5%" }}>{state}</View> 
     <Quiz1/>

    </View>
  );
}

