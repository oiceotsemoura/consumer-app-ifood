import {Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../constants/routes';

export const Order = () => {
  const {order} =
    useRoute<RouteProp<RootStackParamList, Routes.ORDER>>().params;

  return (
    <View style={{backgroundColor: '#f0f0f0', borderRadius: 16, padding: 10}}>
      <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#D3D3D4'}}>
        <Text>Client: {order.cliente.nome}</Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Quantidade pessoas: {order.quantidadePessoas}</Text>
        <Text>Tempo total: {order.tempoTotal}</Text>
      </View>
    </View>
  );
};
