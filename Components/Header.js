import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Themes from '../Constants/themes'
import TitleText from './TitleText'
const  Header = props => {
    return (
        <View style = {styles.header}>
           <TitleText>{props.title}</TitleText>
        </View>
    )
}
const styles = StyleSheet.create({
  header : {
      width:'100%',
      height:90,
      paddingTop:30,
      backgroundColor:Themes.primary,
      justifyContent:"center",
      alignItems:"center"
  }
})
export default Header
