import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

class Geracao extends React.Component {

    render() {
        const { pokemonsRender } = this.props.route.params
        console.log('pokemons11: ', pokemonsRender);
       


        return (
            <ScrollView>
                {
                    pokemonsRender.map(pokemon => {
                        return (
                            <Text> {pokemon.name} </Text>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

export default Geracao;