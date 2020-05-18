import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Line = ({ label = "", content = "-" }) => {
    return (
        <View style={styles.line}>
            <Text style={[ styles.cell, styles.label, label.length > 8 ? styles.longLabel : null]}> {label}  </Text>
            <Text style={[styles.cell, styles.content]}> {content} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'column',
        // borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        
    },
    cell: {
        fontSize: 18,
        alignSelf: 'center',
    },
    label: {
        fontWeight: 'bold',
        color:'red'
        // flex: 1
    },
    content: {
        // flex: 3
    },
    longLabel: {
        fontSize: 12
    }
})
export default Line;