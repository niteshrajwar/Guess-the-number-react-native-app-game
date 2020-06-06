import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Button, Text, Alert, ScrollView} from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
import BodyText from '../Components/BodyText';
import {Ionicons} from '@expo/vector-icons';
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
    let initialGuess = generateRandomNumber(1,100,props.userSelection);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessedNumbers, setGuessedNumbers] =  useState([initialGuess]);
    const currentLowRef = useRef(1);
    const currentHighRef = useRef(100);
    const {userSelection, onGameOver} = props;
    useEffect(()=>{
        if(currentGuess === userSelection) {
                onGameOver(guessedNumbers.length);
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
            currentLowRef.current = currentGuess + 1
        }
        let newGuessedNumber = generateRandomNumber(currentLowRef.current,currentHighRef.current,currentGuess);
           setGuessedNumbers(guessedNumberArray => [...guessedNumberArray,newGuessedNumber])
            setCurrentGuess(newGuessedNumber)
    }
  const renderList = (number,round) => {
      return (
          <View style={styles.guessedListContainer}>
              <View><Text>{number}</Text></View>
              <View><Text>{round}</Text></View>
              
          </View>
      )
  }
    return (
        <View style={styles.screen}>
         <BodyText>Computer Guess</BodyText>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
              <Button title="Lower" onPress={()=>generateNextGuess('lower')}></Button>
              <Button title="Greater" onPress={()=>generateNextGuess('greater')}></Button>
          </Card>
          <ScrollView>
              {guessedNumbers.length >0 ?
               guessedNumbers.map((gn,index) =>renderList(gn,index+1))
               :null}
          </ScrollView>
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
 },
 guessedListContainer: {
 flexDirection:'row',
 justifyContent:"space-between",
 width:'60%'
 }

})
export default GameScreen
