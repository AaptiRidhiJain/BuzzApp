import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './screens/fb'; 
import Insta from './screens/in';
import{createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text style ={{fontSize:60, alignItems:'center'}}>BUZZ APP</Text>
       <AppContainer/>
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Fb : {screen: Fb},
  Insta : {screen: Insta},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
