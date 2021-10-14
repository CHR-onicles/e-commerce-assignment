import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import BikeProduct  from '../assets/bikee.png';

export default function Home(){
    return (
        <View style={{ width: '90%', marginHorizontal: 'auto'}}>
            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
            <Ionicons name="menu-outline" size={24} color="black" />
            <Ionicons name="ios-bicycle-outline" size={24} color="black" style={{marginHorizontal: 'auto'}}/>
            <Ionicons name="search-outline" size={24} color="black" style={{marginHorizontal: 5}}/>
            <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <Text style={{marginVertical: '1rem', fontSize: 18, fontWeight: 500, color: 'rgba(0,0,0, .4)'}}>The world's <Text style={{fontSize: 20, fontWeight: 700, color:'#f17827'}}>Best Bikes</Text></Text>
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

            <View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', gap: 15}}>
                <View style={styles.card}>
                <View style={styles.wishlist}>
                    <AntDesign name="hearto" size={20} color="#f17827" style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
                </View>
                <Image source={BikeProduct} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
                <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500, textAlign: 'center', fontSize: 17}}>Pinarello Bike</Text>
                <Text style={{color: '#f17827', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'rgba(0,0,0, .8)', fontSize: 20}}>1,700.00</Text></Text>
                </View>
                <View style={styles.card}>
                <View style={styles.wishlist}>
                    <AntDesign name="hearto" size={20} color="#f17827" style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
                </View>
                <Image source={BikeProduct} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
                <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500, textAlign: 'center', fontSize: 17}}>Pinarello Bike</Text>
                <Text style={{color: '#f17827', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'rgba(0,0,0, .8)', fontSize: 20}}>1,700.00</Text></Text>
                </View>
                <View style={styles.card}>
                <View style={styles.wishlist}>
                    <AntDesign name="hearto" size={20} color="#f17827" style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
                </View>
                <Image source={BikeProduct} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
                <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500, textAlign: 'center', fontSize: 17}}>Pinarello Bike</Text>
                <Text style={{color: '#f17827', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'rgba(0,0,0, .8)', fontSize: 20}}>1,700.00</Text></Text>
                </View>
                <View style={styles.card}>
                <View style={styles.wishlist}>
                    <AntDesign name="hearto" size={20} color="#f17827" style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
                </View>
                <Image source={BikeProduct} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
                <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500, textAlign: 'center', fontSize: 17}}>Pinarello Bike</Text>
                <Text style={{color: '#f17827', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'rgba(0,0,0, .8)', fontSize: 20}}>1,700.00</Text></Text>
                </View>
            </View>

                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptates a consequatur quibusdam placeat, est nam sint esse eaque voluptatem.
                </Text>
        </View>
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
    card: {
        position: 'relative',
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
        width: 'fit-content',
        paddingHorizontal:  5,
        paddingVertical: 15

    },
    wishlist: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: 35,
        height: 35,
        // padding: 10

    }
})

// console.log(categoryItem, categoryItemActive)