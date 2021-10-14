import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Ionicons, AntDesign, Foundation } from '@expo/vector-icons';
import Card from '../components/Card'
import Tab from '../components/BottomTab'
import Container from '../components/Container'

export default function Home(){
    return (
        <Container>
            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                <Ionicons name="menu-outline" size={24} color="black" />
                <Ionicons name="ios-bicycle-outline" size={24} color="black" style={{marginHorizontal: 'auto'}}/>
                <Ionicons name="search-outline" size={24} color="black" style={{marginHorizontal: 5}}/>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            <Text style={{marginVertical: 10, fontSize: 18, fontWeight: 500, color: 'rgba(0,0,0, .4)'}}>The world's <Text style={{fontSize: 20, fontWeight: 700, color:'#f17827'}}>Best Bikes</Text></Text>
            <Text style={{fontSize: 18, fontWeight: 700, color: 'rgba(0,0,0, .8)'}}>Categories</Text>
            <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={[styles.categoryItem, styles.categoryItemActive]}>All</Text>
                    <Text style={styles.categoryItem}>Roadster</Text>
                    <Text style={styles.categoryItem}>Mountain</Text>
                    <Text style={styles.categoryItem}>Urban</Text>
                    <Text style={styles.categoryItem}>Casual</Text>
                </View>
            </ScrollView>

            <View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', rowGap: 20, columnGap: 20, width: '92%', marginHorizontal: 'auto'}}> {/* width is hacky*/}
            <Card name={"Pinarello"} price={"1700.00"} wishlist={true}/>
            <Card name={"Brompton"} price={"2300.00"} wishlist={false} />
            <Card name={"Schwinn"} price={"5500.00"} wishlist={false}/>
            <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
            {/* <Card name={"Norco"} price={"1000.00"} wishlist={false}/> */}
            {/* <Card name={"Norco"} price={"1000.00"} wishlist={false}/> */}
            {/* <Card name={"Norco"} price={"1000.00"} wishlist={false}/> */}
            {/* <Card name={"Norco"} price={"1000.00"} wishlist={false}/> */}
            </View>

            {/* <Tab leftIcon={<Foundation name="home" size={24} color="#f17827" />} rightIcon={<SimpleLineIcons name="handbag" size={24} color="rgba(0,0,0,.6)" />}/> */}
            <Tab homeActive={true}/>
        </Container>
    )
}



const styles = StyleSheet.create({
    categoryItem: {
        color: 'rgba(0,0,0, .5)',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: '1rem',
        marginHorizontal: 7,
        fontWeight: 500
    },
    categoryItemActive: {
        color: '#f17827',
    },
})

// console.log(categoryItem, categoryItemActive)