import React from 'react'
import {Text, StyleSheet} from 'react-native';
const TitleText = props => {
    return (
       <Text style={styles.text}>
           {props.children}
       </Text>
    )
}
const styles=StyleSheet.create({
    text:{
        fontFamily:'sans-bold',
        fontSize:18,
        marginVertical: 10
    }
})
export default TitleText
