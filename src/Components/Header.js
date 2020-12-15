import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'


const Header = () => {
    const {colors} = useTheme()
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const currentTheme = useSelector(state=>{
        return state.myDarkMode
    })
    const mycolor = colors.iconColor
    
  return (
    <View style={{flexDirection:"row",
    marginTop:Constant.statusBarHeight,
    height:45,
    backgroundColor: colors.headerColor,
    justifyContent: "space-between",
    // for android
    elevation:4, 
    // for ios
    shadowOffset: {width: 10, height: 10,},
    shadowColor: "black",
    shadowOpacity:1.0}}>
      <View style={styles.header}>
      <AntDesign 
      style={styles.youtubeicon}
      name="youtube" size={32} color="red" />
      <Text style={
          {fontSize:22,
          marginLeft:5,
          fontWeight:"bold",
          color: mycolor}
      }>Youtube</Text>
      </View>
        <View style={styles.header2}>
        <MaterialCommunityIcons name="video-plus" size={32} color={mycolor} />
        <MaterialIcons name="search" size={32} color={mycolor} 
        onPress={() => navigation.navigate("search")}
        />
        <MaterialCommunityIcons name="account-circle" size={32} color={mycolor} 
         onPress={() =>dispatch({type:"changetheme", payload:!currentTheme})}
         />
        </View>     
    </View>
  );
}

;

export default Header;

const ColorBlackGray = "#212121"

const styles = StyleSheet.create({
    
    // root:{
    //     flexDirection:"row",
    //     marginTop:Constant.statusBarHeight,
    //     height:45,
    //     backgroundColor: "white",
    //     justifyContent: "space-between",
    //     // for android
    //     elevation:4, 
    //     // for ios
    //     shadowOffset: {width: 10, height: 10,},
    //     shadowColor: "black",
    //     shadowOpacity:1.0,
    // },
    header:{
        margin :5,
        flexDirection:"row"
    },
    header2:{
        margin:5,
        flexDirection:"row",
        justifyContent:"space-around",
        width:150
    },
    // textStyle:{
        // fontSize:22,
        // marginLeft:5,
        // fontWeight:"bold",
        // color: ColorBlackGray
    // },
    youtubeicon:{
        marginLeft:20
    }
})