import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native';
import Card from '../Components/Card';
import themes from '../Constants/themes';
const GameOver = props => {
    const {selectedNumber,noOfRoundsPlayed,backToHome} = props;
    return (
      <View style={styles.screen}>
          <Card style={styles.screenContainer}>
          <Text>You Won !!</Text>
          <Text>{selectedNumber} is Correct Guess</Text>
    <Text>You guessed in {noOfRoundsPlayed} Rounds</Text>
          <View styles={styles.buttonContainer}>
              <Button title="New Game" onPress={backToHome} color={themes.accent}></Button>
          </View>
          </Card>
      </View>
     
    )
}
const styles = StyleSheet.create({
 screen: {
     flex:1,
     justifyContent:"center",
     alignItems:"center",
    
 },
 screenContainer: {
    marginTop:20,
    width:300,
    maxWidth:'80%'
 },
 buttonContainer : {
  width:30
 }
})

export default GameOver
