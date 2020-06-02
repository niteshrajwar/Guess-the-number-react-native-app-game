import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Themes from '../Constants/themes'
const  Header = props => {
    return (
        <View style = {styles.header}>
           <Text style={styles.headerTitle}>{props.title}</Text>
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
  },
  headerTitle:{
     color:'black'
  }
})
export default Header
