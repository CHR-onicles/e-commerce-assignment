import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../components/Container'
import Tab from '../components/BottomTab'
import CartItem from '../components/CartItem'


export default function Cart({navigation}){
    return (
        <Container>
            <View style={{marginTop: 30, marginBottom: 20, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{marginHorizontal: 'auto'}}>
                    <Text style={{fontWeight: 700, fontSize: 20, color: 'rgba(0,0,0, .8)'}}>Cart list</Text>
                    <Text style={{fontWeight: 600, fontSize: 15, color: 'rgba(0,0,0, .4)', textAlign: 'center'}}>(3 items)</Text>
                </View>
            </View>

            <View>
                <CartItem name={"Pinerallo"} type={"Mountain"} price={"1700.00"}/>
                <CartItem name={"Brompton"} type={"Road"} price={"4200.00"}/>
                <CartItem name={"Norco"} type={"Urban"} price={"666.00"}/>
            </View>

            <View>

            </View>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 50, backgroundColor: '#fa6401', borderRadius: 5, width: 'min-content', marginHorizontal: 'auto'}}>
                <Text style={{fontSize: 18,fontWeight: 700, textAlign: 'center', color: 'white', whiteSpace: 'nowrap'}}>Proceed to Checkout</Text>
            </TouchableOpacity>
            <Tab />
        </Container>
    )
}
