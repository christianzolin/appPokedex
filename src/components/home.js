import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemons: []
        }
        const logo = '../imagens/logo.png'
    }

    componentDidMount(){
        axios.get()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={__DEV__
                    ? require('../imagens/logo.png')
                    : require('../imagens/logo.png')}
                    style={{ flex: 1, height: 450 }} />
                <View style={{ flex: 8 }}>
                    <Text style={{}}>Pokedex</Text>
                </View>
            </View>
        )
    }
}

export default Home;