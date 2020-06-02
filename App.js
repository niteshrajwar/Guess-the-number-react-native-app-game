import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
export default function App() {
  const [userSelectedNumber, setuserSelectedNumber] = useState();
  const [noOfGuess, setNoOfGuess] = useState(0);
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
