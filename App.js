import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constant from 'expo-constants';

import {NavigationContainer, DarkTheme, DefaultTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'

import {Provider, useSelector} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer} from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducers';

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor: "black",
    tabIcon: "red",
    searchBar: "#e6e6e6"
  }
}
const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor: "white",
    tabIcon: "white",
    searchBar: "#5f6163"
  }
}

const rootReducer = combineReducers({
  cardData:reducer,
  myDarkMode:themeReducer
})
const store = createStore(rootReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  const {colors}  = useTheme()
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color }) => {
        let iconName;
        let homeIcon
        if (route.name === 'home') {
          homeIcon = "home";
        } else if (route.name === 'explore') {
          iconName = "explore";
        } else if (route.name === 'subscribe') {
          iconName = "subscriptions";
        }

        // You can return any component that you like here!
        return (
          <View style={{flexDirection: "row"}}>
              <MaterialIcons name={iconName} size={24} color={color} />
            <Foundation name={homeIcon} size={24} color={color} />  
           </View> 
            
          
          );
          
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
        <Tabs.Screen name="home" component={Home}/>
        <Tabs.Screen name="explore" component={Explore}/>
        <Tabs.Screen name="subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}
export default () => {
  return (
    <Provider store={store}>
    <Navigation />
  </Provider>
  )
  
}
export function Navigation() {
  let currentTheme = useSelector(state=>{
    return state.myDarkMode
  })
  return (
    
    <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="videoplayer" component={VideoPlayer}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


// <Foundation name="home" size={24} color="black" />
// <MaterialIcons name="subscriptions" size={24} color="black" />