import React  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListaDetalhes = (nomes, imagens ) => {
    console.log(nomes)
    return(
        <View>
            <Text>{nomes}</Text>
        </View>
    )
}

export default ListaDetalhes