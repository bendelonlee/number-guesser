import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import globalStyle from '../constants/globalStyles'

export default function MainButton(props){
    return <TouchableOpacity>
        <View style={globalStyle.mainButton}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({})