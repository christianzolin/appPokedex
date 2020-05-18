import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ListaDestalhesPokemon from '../components/listaDetlhaesPokemon';

class DetalhesPokemon extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemon: [],
            imagem: 'https://img.favpng.com/22/5/21/pok-mon-go-computer-icons-psyduck-clip-art-png-favpng-69wX2MrsA7wdBg9RHuJNkJyE8.jpg'
        }
    }
    componentDidMount() {
        const { pokemon } = this.props.route.params
        axios.get(pokemon.url)
            .then(resultado => {
                const pokemon = resultado.data
                this.setState({ pokemon: pokemon, imagem: pokemon.sprites.front_default })
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListaDestalhesPokemon pokemon={this.state.pokemon} imagem={this.state.imagem} />
            </View>
        )
    }
}

export default DetalhesPokemon;