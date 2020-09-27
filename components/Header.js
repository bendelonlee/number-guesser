import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

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
    backgroundColor: '#f7287b',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
})