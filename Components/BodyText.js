import React from 'react';
import {Text,StyleSheet} from 'react-native';

const BodyText = props => {
    return (
    <Text style={styles.text}>{props.children}</Text>
    )
}
const styles=StyleSheet.create({
    text:{
        fontFamily:'sans-regular',
        paddingVertical:5
    }
})
export default BodyText
