import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function Input(props){
    return <TextInput {...props} style={{...styles.input, ...props.styles}}/>
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})