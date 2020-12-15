import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'

import Header from '../Components/Header';
import Card from '../Components/Card';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '@react-navigation/native';

const LittleCard = ({name}) => {
    return (
        <View style={{
            backgroundColor: "red",
            width: 180,
            height: 50,
            borderRadius:4,
            fontSize: 22,
            margin: 3
        }}>
            <Text style={{
                textAlign:"center",
                marginTop:5,
                color: "white",

            }}>{name}</Text>
        </View>
    )
}

const Explore =(props) => {
    const {colors} = useTheme()
    const cardData = useSelector(state=> {
        return state.cardData
      })

    return (
        <View style={styles.root}>
            <Header />
            
            <View style={{flexDirection: "row"}}>
            <View>
                <LittleCard name="Trending"/>
                <LittleCard name="Gaming"/>
                <LittleCard name="Music"/>
                
            </View>
            <View>
                <LittleCard name="News"/>
                <LittleCard name="Films"/>
                <LittleCard name="Learning"/>
                
            </View>
            </View>
            <Text style={{
                margin: 8,
                fontSize: 22,
                borderBottomWidth: 1,
                color:colors.iconColor
            }}>Recently Searched</Text>
            <FlatList 
      data={cardData}
      renderItem={({item}) => {
        return <Card 
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        />
      }}
      keyExtractor={item=>item.id.videoId}
      />
            
               
        </View>
    )


}
export default Explore;


const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})