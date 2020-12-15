import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import {useSelector, useDispatch} from 'react-redux'

import Header from '../Components/Header';
import Card from '../Components/Card';


export default function HomeScreen() {
  const cardData = useSelector(state=> {
    return state.cardData
  })
  return (
    <View style={styles.root}>
      <Header />
      {/* <ScrollView>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </ScrollView> */}
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
  );
}

;

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})
