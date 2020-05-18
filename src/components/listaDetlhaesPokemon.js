import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import Line from './line';

const ListaDestalhesPokemon = props => {
    const {pokemon, imagem} = props

    console.log('pokemon.sprites.front_default: ', pokemon);

         //id .id
        //nome .name
        // imagem .sprites.front_default
        // tamanho .height
        // peso .weight
        // tipo .types[]
        // sexo .
        // habilidade .[]
        // descrição 

    return(
        <View style={{flex: 1,}}>
            <Image source={{uri: imagem}} style={{flex: 1, aspectRatio:1, alignSelf:'center'}}/>
            <View style={{flex: 1}}>
                <Line label={'ID'} content={pokemon.id} />
                <Line label={'Nome'} content={pokemon.name} />
                <Line label={'Tamanho'} content={pokemon.height} />
                <Line label={'Peso'} content={pokemon.weight} />
                {/* <Line label={'Tipo'} content={pokemon.types} />
                <Line label={'Habilidade'} content={pokemon.abilities} /> */}
            </View>
        </View>
    )
}

export default ListaDestalhesPokemon;