import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Card from '../components/Card'

import Colors from '../constants/colors'
import Input from '../components/Input'

export default function StartGameScreen(props){
  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card styles={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input styles={styles.input} keyboardType="number-pad" maxLength={2} blurOnSubmit/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" color={Colors.primary}/></View>
          <View style={styles.button}><Button title="Confirm" color={Colors.primary}/></View>
        </View>
      </Card>
    </View>
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
  }
})