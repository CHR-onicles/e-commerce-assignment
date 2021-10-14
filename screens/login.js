import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import BikeImage from "../assets/bike.jfif";

export default function Login({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Image source={BikeImage} style={{ width: 170, height: 170, transform: [{rotate: '-45deg'}], borderRadius: 15, marginBottom: 60 }} />
      <Text style={{fontSize: 20, fontWeight: 600, color: 'rgba(0,0,0, .8)'}}>Welcome to</Text>
      <Text style={{fontSize: 24, fontWeight: 700}}>Power Bike Shop</Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70, marginTop: 20,  backgroundColor: '#e3e3e3', borderRadius: 5 }}>
        <AntDesign name="google" size={24} color="#f17827" />
          <Text style={{fontSize: 15, fontWeight: 500, paddingLeft: 10}}>Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70, marginVertical: 10, backgroundColor: '#000', borderRadius: 5 }}
      onPress={()=> navigation.navigate('Home')}>
        <MaterialCommunityIcons name="apple" size={24} color="white" />
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 500, paddingLeft: 10}}>Login with Apple</Text>
      </TouchableOpacity>
      <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500}}>Not a member? <Text style={{color: '#f17827', fontWeight: 700}}>Sign up</Text></Text>
    </View>
  );
}
