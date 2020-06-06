import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const loadFont = () => {
  return Font.loadAsync({
    'sans-regular':require('./assets/fonts/OpenSans-Regular.ttf'),
    'sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userSelectedNumber, setuserSelectedNumber] = useState();
  const [noOfGuess, setNoOfGuess] = useState(0);
  const [fontLoaded,setFontLoaded] =useState(false);
  if(!fontLoaded){
    return <AppLoading startAsync={loadFont} onFinish={()=> setFontLoaded(true)} onError={(err)=>console.log(err)} />
  }
  const startGameHandler = userSelectedNumber => {
   setuserSelectedNumber(userSelectedNumber)
  }
  const gameGameHandler = noOfRounds => {
      setNoOfGuess(noOfRounds);
  }
  const backToHomeScreen = () => {
    setuserSelectedNumber();
    setNoOfGuess(0);
  }
  return (
    <View style={styles.container}>
     <Header title="Guess a Number" />
    
     {userSelectedNumber && noOfGuess <=0 ?
      <GameScreen userSelection={userSelectedNumber} onGameOver={gameGameHandler} />:
       userSelectedNumber && noOfGuess > 0 ? <GameOver selectedNumber = {userSelectedNumber} noOfRoundsPlayed={noOfGuess} backToHome={backToHomeScreen} /> :
        <StartScreen onStartGame={startGameHandler}  />  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
