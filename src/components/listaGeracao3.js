import * as React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image, } from 'react-native'

const ListaGeracao3 = (props) => {
    const {pokemons, onPress} = props
    const pokemonsRender = pokemons.slice(251, 385)
    return (
        <TouchableHighlight styles={{}} onPress={() => {onPress({pokemonsRender})}}>
            <Image 
                source={require('../imagens/geracao/3ger.png')}
                style={styles.container}
            />
        </TouchableHighlight>
    )
}

export default ListaGeracao3;

const styles = StyleSheet.create({
    container: {
        // aspectRatio: 1,
        margin: 10,
        height: 241,
        width: 157,
        // backgroundColor: 'black',
        padding: 10

    }
})