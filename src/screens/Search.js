import React, {useState} from 'react';
import Constant from 'expo-constants';
import { StyleSheet, Text, View, ActivityIndicator,ScrollView, FlatList,TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MiniCard from '../Components/Minicard'
import { useNavigation, useTheme } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[AIzaSyBO4fFcnIRF1FHDGDPZ0NCVfxn6jOO7384]

const SearchScreen = (props) => {
    const {colors} = useTheme()
    const [value, setValue] = useState("")
    // const [minicardData, setMiniCard] = useState([])
    const minicardData = useSelector(state=>{
        return state.cardData
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyDC7xZHQQydJ2PUKStmSSOUJ5Q6i9acqtk`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setLoading(false)
            // setMiniCard(data.items)
            dispatch({type:"add", payload:data.items})
        })
    }
    return (
        <View style={{
            flex:1, 
        marginTop:Constant.statusBarHeight,
        
        }}>
            <View style={{
                backgroundColor: colors.headerColor,
                padding: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5, 
        
            }}>
            <MaterialIcons name="arrow-back" size={32} color={colors.iconColor} 
            onPress={() => props.navigation.goBack()}
            />
            <TextInput style={{width: "70%",
        backgroundColor: colors.searchBar,
            color:colors.iconColor}}
            value = {value}
            onChangeText = {(text) => setValue(text)}
            />
            <MaterialIcons name="send" size={32} color={colors.iconColor} 
            onPress= {() => fetchData()}
            />
        </View>
        {/* <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        </ScrollView> */}

        {loading?<ActivityIndicator
        style={{marginTop:10}}
        size="large"
        color="red" />:null}
        <FlatList
        data={minicardData}
        renderItem={({item}) => {
            return (<MiniCard
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />)
        }}
        keyExtractor={item=>item.id.videoId}
        />

        
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    // root: {
    //     flex:1, 
    //     marginTop:Constant.statusBarHeight  
    // },
    // search: {
    //     padding: 5,
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     elevation: 5, 
    //     backgroundColor: "white"

    // },
    // text: {
    //     width: "70%",
    //     backgroundColor: "#e6e6e6"
    // }
})