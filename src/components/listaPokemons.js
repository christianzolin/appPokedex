import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

const ListaPokemons = props => {
    const {pokemon, onPress} = props
    return (
        <TouchableOpacity onPress={() => { onPress({ pokemon }) }}>
            <View style={styles.line}>
                <Text style={styles.lineText}> {pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 5,
        borderRadius: 50
    }
})
export default ListaPokemons