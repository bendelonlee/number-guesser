import React, {useState, useRef, useEffect} from 'react'
import {Text, View, StyleSheet, Button, Alert} from 'react-native'

import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

function generateRandomBetween(min, max, exclude){
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export default function GameScreen(props){
    const {userChoice, onGameOver} = props

    const currentMin = useRef(1)
    const currentMax = useRef(100)
    const rounds = useRef(0)

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    useEffect(()=>{
        if(userChoice === currentGuess){
            onGameOver(rounds.current)
        }
    }, [userChoice, currentGuess, onGameOver])
    
    function nextGuessHandler(direction){
        if(  
            (direction === 'lower' && currentGuess < props.userChoice) || 
              (direction === 'greater' && currentGuess > props.userChoice)
          ){
            Alert.alert("Don't lie!", 'You know this is wrong...', 
                [{text: 'sorry', style: 'cancel'}
            ])
            return;
        }
        if(direction === 'lower') {
            currentMax.current = currentGuess - 1
        } else {
            currentMin.current = currentGuess
        }
        rounds.current += 1
        const nextNumber = generateRandomBetween(currentMin.current, currentMax.current)
        setCurrentGuess(nextNumber)
    }

    return <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <View style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </View>
        </Card>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
})