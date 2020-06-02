import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Button, Text, Alert} from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
const generateRandomNumber = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ranNum = Math.floor(Math.random() * (max-min)) + min;
    if(ranNum === exclude) {
        generateRandomNumber(min,max,exclude);
    } else {
        return ranNum;
    }
  }
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,props.userSelection));
    const [noOfRoundsGuessed, setNoOfROundsGuessed] =  useState(0);
    const currentLowRef = useRef(1);
    const currentHighRef = useRef(100);
    const {userSelection, onGameOver} = props;
    useEffect(()=>{
        if(currentGuess === userSelection) {
                onGameOver(noOfRoundsGuessed);
        }
    }, [currentGuess,userSelection,onGameOver])
    const generateNextGuess = direction => {
        if((direction === 'lower' && currentGuess < userSelection) ||
          (direction === 'greater' && currentGuess > userSelection)) {
              Alert.alert('Wrong Hint !!','Please dont Lie in the name of GOD',[{style:'cancel',text:'Okay'}]);
              return;
          }
        if(direction === 'lower') {
            currentHighRef.current = currentGuess
        } else {
            currentLowRef.current = currentGuess
        }
            setCurrentGuess(generateRandomNumber(currentLowRef.current,currentHighRef.current,currentGuess))
             setNoOfROundsGuessed(currentRounds => setNoOfROundsGuessed(currentRounds+1))
    }

    return (
        <View style={styles.screen}>
         <Text>Computer Guess</Text>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
              <Button title="Lower" onPress={()=>generateNextGuess('lower')}></Button>
              <Button title="Greater" onPress={()=>generateNextGuess('greater')}></Button>
          </Card>
        </View>
    ) 
}
const styles = StyleSheet.create({
 screen:{
     flex:1,
     padding:20,
     alignItems:"center",
     marginTop:50
 },
 buttonContainer: {
     flexDirection:"row",
     justifyContent: 'space-around',
     marginTop:20,
     width:300,
     maxWidth:'80%'
 }

})
export default GameScreen
