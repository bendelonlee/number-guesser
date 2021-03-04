import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/colors'


export default function Header(props){
  return <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
})