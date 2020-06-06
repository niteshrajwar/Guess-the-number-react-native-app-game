import React from 'react'
import {View,Text,StyleSheet, Button, Image, ImageBackground} from 'react-native';
import Card from '../Components/Card';
import themes from '../Constants/themes';
import BodyText from '../Components/BodyText';
import TitleText from '../Components/TitleText';
import CustomButton from '../Components/CustomButton';
const GameOver = props => {
    const {selectedNumber,noOfRoundsPlayed,backToHome} = props;
    return (
      <View style={styles.screen}>
          {/* <Card style={styles.screenContainer}> */}
          <TitleText>Congrats.Game Over !!</TitleText>
          <View style={styles.imageContainer}>
          <Image source={require('../assets/winner.gif')} style={styles.image} resizeMode='cover'/>
          </View>
          <BodyText><Text style={styles.noOfROundsText} >{selectedNumber}</Text> is Correct Guess</BodyText>
    <BodyText >Your device guessed it in <Text style={styles.noOfROundsText} >{noOfRoundsPlayed}</Text> Rounds</BodyText>
          <View styles={styles.buttonContainer}>
              <CustomButton onClick={backToHome} ><Text>New Game</Text></CustomButton>
          </View>
          {/* </Card> */}
      </View>
     
    )
}
const styles = StyleSheet.create({
 screen: {
     flex:1,
     justifyContent:"center",
     alignItems:"center",
    
 },
 image:{
  width:'100%',
  height:'100%'
 },
 imageContainer:{
  borderWidth:1,
  borderColor:'grey',
  width:'90%',
  height:300,
  borderRadius:200,
  overflow:"hidden"
 },
 screenContainer: {
    marginTop:20,
    width:300,
    maxWidth:'80%'
 },
 buttonContainer : {
  width:30,
 },
 noOfROundsText: {
     fontSize:16,
     fontFamily:'sans-bold',
     color:themes.primary
 }
})

export default GameOver
