import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import ListaPokemons from '../components/listaPokemons';

class Geracao extends React.Component {

    render() {
        const { pokemonsRender } = this.props.route.params
        return (
            <ScrollView>
                {
                    pokemonsRender.map(pokemon => {
                        return (
                            <View>
                                <ListaPokemons key={pokemon.name} pokemon={pokemon} onPress={(params) => { this.props.navigation.navigate('Detalhes', params) }} />
                            </View>
                        )
                    })
                }
            </ScrollView>
    //      <FlatList style={{}}
    //      data={pokemonsRender}
    //      renderItem={({ pokemon }) => (
    //         <ListaPokemons key={pokemon.name} pokemon={pokemon} onPress={(params) => { this.props.navigation.navigate('Detalhes', params) }} />
    //      )}
    //      keyExtractor={item => item.id}
    //  />


        )
    }
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
export default Geracao;