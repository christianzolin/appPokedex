import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import axios from 'axios'
import ListaGeracao1 from './listaGeracao1'
import ListaGeracao2 from './listaGeracao2'
import ListaGeracao3 from './listaGeracao3'
import ListaGeracao4 from './listaGeracao4'
import ListaGeracao5 from './listaGeracao5'
import ListaGeracao6 from './listaGeracao6'
import ListaGeracao7 from './listaGeracao7'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(resultado => {
                const { results } = resultado.data
                this.setState({ pokemons: results })
            }
            )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={__DEV__
                    ? require('../imagens/logo.png')
                    : require('../imagens/logo.png')}
                    style={{ height: 120, width: 330, marginTop: 15 }} />
                <ScrollView>
                    <View style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <ListaGeracao1 pokemons={this.state.pokemons} onPress={(pageParams) => { this.props.navigation.navigate('Geracao', pageParams) }} />
                        <ListaGeracao2 pokemons={this.state.pokemons} onPress={(pageParams) => { this.props.navigation.navigate('Geracao', pageParams) }} />
                        <ListaGeracao3 pokemons={this.state.pokemons} />
                        <ListaGeracao4 pokemons={this.state.pokemons} />
                        <ListaGeracao5 pokemons={this.state.pokemons} />
                        <ListaGeracao6 pokemons={this.state.pokemons} />
                        <ListaGeracao7 pokemons={this.state.pokemons} />

                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home;