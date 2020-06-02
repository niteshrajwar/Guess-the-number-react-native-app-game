import React from 'react'
 import {View, StyleSheet, Text} from 'react-native'
import Themes from '../Constants/themes'
import themes from '../Constants/themes'

const NumberContainer = props => {
    return (
        <View style={{...styles.numberContainer}}>
          <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    numberContainer:{
       borderWidth:2,
       borderColor: Themes.accent,
       padding:10,
       borderRadius:10,
       marginVertical:10,
       alignItems:'center',
       justifyContent:"center"
    },
    number:{
        color:themes.accent,
        fontSize:20
    }
})

export default NumberContainer
