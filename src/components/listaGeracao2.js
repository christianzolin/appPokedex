import * as React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image, } from 'react-native'

const ListaGeracao2 = (props) => {
    const {pokemons, onPress} = props
    const pokemonsRender = pokemons.slice(151, 250)
    return (
        <TouchableHighlight styles={{}} onPress={() => {onPress({pokemonsRender})}}>
            <Image 
                source={require('../imagens/geracao/2ger.png')}
                style={styles.container}
            />
        </TouchableHighlight>
    )
}

export default ListaGeracao2;

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