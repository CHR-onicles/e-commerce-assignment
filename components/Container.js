import React from 'react'
import {View} from 'react-native';

export default  function Container({children}){
    return (
        <View  style={{ width: '90%', marginHorizontal: 'auto'}}>
            {children}
        </View>
    )
}