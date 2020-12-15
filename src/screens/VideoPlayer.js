import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '@react-navigation/native';


const VideoPlayer =(props) => {
    const {colors} = useTheme()
    const {videoId, title} = props.route.params
    return (
        <View style={styles.root}>
            <View style={styles.Video}>
                <WebView 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                />
                
            </View>
            <Text style={{width: Dimensions.get("screen").width-50,
        margin:9,
    color:colors.iconColor}}
            numberOfLines={2}
            ellipsizeMode="tail">
                {title}
            </Text>
            <View 
            style = {{borderBottomWidth:1}}
            />
        </View>
    )


}
export default VideoPlayer;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop:Constant.statusBarHeight
    },
    Video: {
        width: "100%",
        height: 200
    },
    // text: {
    //     width: Dimensions.get("screen").width-50,
    //     margin:9
    // }
})