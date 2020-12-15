import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from  'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';

import BG from '../Images/Bg1.jpg'
// colors.iconColor
const MiniCard = (props) => {
    const {colors} = useTheme()
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
        <View style={styles.root}>
            <Image 
            // source={{uri:"https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={styles.Imagestyle}
            />
            <View style={styles.textComp}>
                <Text 
                style={{fontSize: 17,
                    width: Dimensions.get("screen").width/2,
                color:colors.iconColor}}
                ellipsizeMode="tail"
                numberOfLines={3}
                >{props.title} </Text>
                <Text style= {{fontSize: 12,
                color:colors.iconColor }}>
                    {props.channel}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default MiniCard;


const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        margin:10,
        marginBottom:0
    },
    Imagestyle: {
        width:"45%",
        height:100
    },
    textComp:{ 
        paddingLeft: 7
    },
    // text: {
    //    fontSize: 17,
    //    width: Dimensions.get("screen").width/2
    // },
    text2: {
       fontSize: 12 
    }
})