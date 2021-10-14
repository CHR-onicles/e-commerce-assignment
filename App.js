import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { hot } from 'react-hot-loader';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Home from './screens/home';

// function App() {
export default function App() {
  const mainNavigator = createStackNavigator();
  
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <mainNavigator.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
          <mainNavigator.Screen name="Home" component={Home}/>
          <mainNavigator.Screen name="Login" component={Login} />
        </mainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// let HotApp = App;
// if (Platform.OS === 'web') HotApp = hot(module)(App);
// export default HotApp;
