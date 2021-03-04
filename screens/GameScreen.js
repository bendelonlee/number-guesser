import React, {useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

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
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    return <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <View style={styles.buttonContainer}>
                <Button title="LOWER"/>
                <Button title="GREATER"/>
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