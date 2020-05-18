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
        super()
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
                        <ListaGeracao1 pokemons={this.state.pokemons}/>
                        <ListaGeracao2 />
                        <ListaGeracao3 />
                        <ListaGeracao4 />
                        <ListaGeracao5 />
                        <ListaGeracao6 />
                        <ListaGeracao7 />

                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home;