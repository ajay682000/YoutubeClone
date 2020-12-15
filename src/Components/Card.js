import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from  'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation,useTheme } from '@react-navigation/native';

import BG from '../Images/Bg1.jpg'

const Card = (props) => {
    const {colors} = useTheme() 
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View style={styles.Container}>
        
            <Image 
            // source={{uri:"https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={styles.Imagestyle}
            />
            <View style={styles.Content1}>
            <MaterialCommunityIcons name="account-circle" size={38} color={colors.iconColor} />
                <View style={styles.Content2}>
                <Text 
                style={{fontSize:20, 
                    width:Dimensions.get("screen").width-50, 
                    color:colors.iconColor}}
                ellipsizeMode="tail"
                numberOfLines={2}
                >{props.title} </Text>
                <Text style={{color:colors.iconColor}}>{props.channel}</Text>
                </View>
                
            </View>
        </View>
        </TouchableOpacity>
    )

}

export default Card;

const styles = StyleSheet.create({
    Container: {
        
        marginBottom: 10
    },
    Imagestyle:{
        width:"100%",
        height:200
    },
    Content1: {
        flexDirection:"row",
        margin: 5
    },
    Content2:{
        marginLeft: 10,

    }
})