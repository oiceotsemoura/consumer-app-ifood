import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, Routes} from '@constants/routes';
import {FooterMenu} from '../components/FooterOrder';
const formatToReais = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
interface IAdicional {
  nome: string;
  preco: number;
}

interface IOrderItem {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  observacao: string;
  adicionais: IAdicional[];
}

const itens: IOrderItem[] = [
  {
    nome: 'Alabama apimentado',
    id: 44,
    quantidade: 1,
    preco: 32.9,
    observacao: 'Sem cebola',
    adicionais: [
      {
        nome: 'Bacon',
        preco: 2.3,
      },
    ],
  },
  {
    nome: 'Hambúrguer clássico',
    id: 45,
    quantidade: 2,
    preco: 25.5,
    observacao: 'Com queijo extra',
    adicionais: [
      {
        nome: 'Cheddar',
        preco: 3.0,
      },
      {
        nome: 'Alface',
        preco: 1.0,
      },
    ],
  },
  {
    nome: 'Frango grelhado',
    id: 46,
    quantidade: 1,
    preco: 28.0,
    observacao: 'Sem molho',
    adicionais: [
      {
        nome: 'Tomate',
        preco: 1.5,
      },
    ],
  },
  {
    nome: 'Alabama barbecue',
    id: 47,
    quantidade: 3,
    preco: 35.0,
    observacao: 'Com cebola caramelizada',
    adicionais: [
      {
        nome: 'Queijo prato',
        preco: 2.0,
      },
      {
        nome: 'Molho barbecue',
        preco: 1.8,
      },
    ],
  },
  {
    nome: 'Vegetariano',
    id: 48,
    quantidade: 2,
    preco: 22.0,
    observacao: 'Sem pimentão',
    adicionais: [
      {
        nome: 'Abacate',
        preco: 2.5,
      },
    ],
  },
];

const OrderItem = ({orderItem}: {orderItem: IOrderItem}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#D3D3D4',
        borderStyle: 'dashed',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text style={{fontWeight: 'bold'}}>
            <Text>{orderItem.quantidade} </Text> {orderItem.nome}
          </Text>
          <Text style={{fontWeight: 'bold', paddingRight: 10}}>
            {formatToReais(orderItem.preco)}
          </Text>
        </View>

        <Text style={{color: '#6D6D6D', paddingVertical: 5}}>
          <Text>{orderItem.observacao}</Text>
        </Text>
        {orderItem.adicionais.map(adicional => {
          return (
            <Text
              style={{
                fontWeight: 'bold',
                paddingVertical: 5,
              }}>
              {' '}
              {`+ ${adicional.nome} (${formatToReais(adicional.preco)})`}
            </Text>
          );
        })}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text>5</Text>
      </View>
    </View>
  );
};

export const Order = () => {
  const {order} =
    useRoute<RouteProp<RootStackParamList, Routes.ORDER>>().params;

  return (
    <>
      <View style={{backgroundColor: '#5B9878', height: 65}} />
      <ScrollView
        contentContainerStyle={{
          padding: 12,
          backgroundColor: 'white',
          paddingBottom: 150,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 50}}>{order.number}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#F0F0F0',
            borderRadius: 12,
            paddingVertical: 6,
            marginVertical: 15,
          }}>
          <View
            style={{
              marginHorizontal: 18,
              paddingBottom: 12,
              paddingTop: 6,
              borderBottomWidth: 1,
              borderColor: '#D3D3D4',
            }}>
            <Text style={{fontSize: 15}}>
              Cliente:{' '}
              <Text style={{fontWeight: 'bold'}}>{order.cliente.nome}</Text>
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 18,
              paddingBottom: 12,
              paddingTop: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15}}>
              Qtde.pessoas:
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                {order.quantidadePessoas}
              </Text>
            </Text>
            <Text style={{fontSize: 15}}>
              Tempo total:{' '}
              <Text style={{fontWeight: 'bold'}}>{order.tempoTotal}min.</Text>
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingBottom: 12,
              paddingTop: 6,
              borderBottomWidth: 1,
              borderColor: '#D3D3D4',
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold'}}>{`Itens (5)`}</Text>
          </View>
          {itens.map(orderItem => {
            return (
              <OrderItem key={`order${orderItem.id}`} orderItem={orderItem} />
            );
          })}
        </View>
      </ScrollView>
      <FooterMenu />
    </>
  );
};
