import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';

function fetchFonts(){
  return Font.loadAsync({
    'maven-bold': require('./assets/fonts/MavenProBold.ttf'),
    'maven-medium': require('./assets/fonts/MavenProMedium.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  
  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts}
                       onError={(err)=>{console.log(err)}}
                       onFinish={()=>{setDataLoaded(true)}}/>
    )
  }
  
  function configureNewGame(){
    setGuessRounds(0)
    setUserNumber(null)
  }

  function startGameHandler(selectedNumber){
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  function gameOverHandler(numOfRounds){
    setGuessRounds(numOfRounds)
  }

  console.log('content portion of app ran');
  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0 ){
    content = <GameOverScreen roundsNumber={guessRounds} 
                              onRestart={configureNewGame}
                              userNumber={userNumber}/>
  }
  return (
    
    <View style={styles.screen}>
      <Header title={'Guess a Number'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
