import React from 'react'
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import themes from '../Constants/themes';
const CustomButton = props => {
    return (
       <TouchableOpacity activeOpacity={0.5} onPress={props.onClick}>
           <View style={{...styles.button,...props.style}}>
               <Text style={styles.buttonText}>
                {props.children}
               </Text>
           </View>
       </TouchableOpacity>
    )     
}
const styles=StyleSheet.create({
  button: {
   backgroundColor: themes.primary,
   paddingVertical:10,
   paddingHorizontal:20,
   borderRadius:25
  },
  buttonText: {
   color: 'white',
   fontFamily:'sans-regular'
  }
})
export default CustomButton
