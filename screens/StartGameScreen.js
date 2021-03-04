import React, {useState} from 'react'
import {View,
        Text,
        StyleSheet,
        Button,
        TouchableWithoutFeedback,
        Keyboard,
        Alert} from 'react-native'

import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

import Colors from '../constants/colors'
import Input from '../components/Input'

export default function StartGameScreen(props){

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const numberInputHandler = (value)=>{
    setEnteredValue(value.replace(/[^0-9]/g, ''))
  }

  const handleResetPress = ()=>{
    setEnteredValue('')
    setConfirmed(false)
  }

  const handleConfirmPress = ()=>{
    const chosenNum = parseInt(enteredValue)
    if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
      Alert.alert('Invalid Number!', 'Must be an integer between 1 and 99', [{text: "Okay", style: 'destructive', onPress: handleResetPress}])
      return
    }
    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNum)
    Keyboard.dismiss()
  }

  let confirmedOutput;

  if(confirmed){
    confirmedOutput = <Card styles={styles.summaryContainer}>
      <Text>You Selected: </Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title="START GAME" onPress={()=> props.onStartGame(selectedNumber)}/>
    </Card>
  }
  return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card styles={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input styles={styles.input} 
                keyboardType="number-pad" 
                maxLength={2} 
                onChangeText={numberInputHandler}
                value={enteredValue}
                blurOnSubmit/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={Colors.primary} onPress={handleResetPress}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} onPress={handleConfirmPress}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,

  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 40,
    alignItems: 'center'
  }
})