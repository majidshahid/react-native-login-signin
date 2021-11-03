
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Touchable, TextInput } from 'react-native';
function Reset (){
    return(
        <View style ={{marginTop:"5%"}}>
             <Text style={{ fontSize: 30, backgroundColor: "#7cffcb", color: "black", width: "100%", paddingLeft: "2%" }}>RESET Password </Text>
             <Text style={{width:"60%", justifyContent: "center", alignItems: "center"}}>Please enter your email to recive a link to create a new Password via email</Text>
             <TextInput   keyboardType="email-address" placeholder ="Enter your Email" style={{borderColor:"#80d1b1",borderWidth:2,width:"100%",marginTop:"5%"}}/>
             <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "#7cffcb", width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: "4%" }}>
                    <Text style={{ color: "black",fontSize:15 }}  >RESET </Text>
                </TouchableOpacity>
        </View>
    )
}
export default Reset;