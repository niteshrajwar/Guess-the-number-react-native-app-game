import React, {useState} from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../Components/Card';
import Themes from '../Constants/themes';
import Input from '../Components/Input'
import NumberContainer from '../Components/NumberContainer';
const StartScreen = props => {
  const [userInput, setUserInput] = useState('');
  const [confirmed,setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('')
  const numberInputHandler = input => {
 setUserInput(input.replace(/[^0-9]/g,''))
  }
  const resetInputHandler = () => {
        setUserInput('');
        setConfirmed(false);
  }
  const confirmInputHandler = () => {
    Keyboard.dismiss()
    const userSelectedNumber = parseInt(userInput);
      if(isNaN(userSelectedNumber) || userSelectedNumber <=0 || userSelectedNumber > 99 ){
        Alert.alert('Invalid number !!','Please choose number between 1 to 99',[{text:'Okay', style:'destructive', onPress:resetInputHandler}])
         return;
      }
       setConfirmed(true);
       setSelectedNumber(userSelectedNumber);
       setUserInput('');
  }
  let confirmedSelection;
  if(confirmed) {
  confirmedSelection = 
  <Card style={styles.summaryContainer}>
  <Text>You have Selected</Text>
  <NumberContainer >{selectedNumber}</NumberContainer>
  <Button title="Start Game" onPress={()=>props.onStartGame(selectedNumber)} />
      </Card>
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game !</Text>
      <Card>
        <View style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
           style={styles.inputBox}
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            blurOnSubmit
            autoCapitalize='none'
            onChangeText={numberInputHandler} value={userInput}
            />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={Themes.accent} onPress={resetInputHandler} />
            </View>
            <View style={styles.button}>
              <Button title="confirm" color={Themes.primary} onPress={confirmInputHandler} />
            </View>
          </View>
        </View>
      </Card>
      {confirmedSelection}
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",

  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 90
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: "center",
    justifyContent: "space-between",
    height: 120
  },
  inputBox: {
    width: 50,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between'
  },
  summaryContainer : {
    marginTop:20,
    alignItems:"center"
  }
})
export default StartScreen;
