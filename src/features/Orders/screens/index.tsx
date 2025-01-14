import React from 'react';
// import UserCircle from '../../../assets/user-circle.svg';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {OrderPanel} from '../../../components/OrderPanel';

import {IOrder} from '../../../interfaces/IOrder';
import {FooterMenu} from '../../../components/FooterMenu';

const ordersTotalData: IOrder[] = [
  {
    number: '17',
    cliente: {nome: 'Alice'},
    quantidadePessoas: 3,
    tempoTotal: 45,
  },
  {
    number: '22',
    cliente: {nome: 'Bob'},
    quantidadePessoas: 5,
    tempoTotal: 60,
    isLate: true,
  },
  {
    number: '39',
    cliente: {nome: 'Carlos'},
    quantidadePessoas: 2,
    tempoTotal: 30,
  },
  {
    number: '24',
    cliente: {nome: 'Diana'},
    quantidadePessoas: 4,
    tempoTotal: 75,
    isLate: true,
  },

  {
    number: '35',
    cliente: {nome: 'Ethan'},
    quantidadePessoas: 6,
    tempoTotal: 90,
  },
  {
    number: '61',
    cliente: {nome: 'Fiona'},
    quantidadePessoas: 3,
    tempoTotal: 50,
    isLate: true,
  },
  {
    number: '17',
    cliente: {nome: 'George'},
    quantidadePessoas: 8,
    tempoTotal: 120,
  },
  {
    number: '82',
    cliente: {nome: 'Hannah'},
    quantidadePessoas: 7,
    tempoTotal: 110,
  },
  {
    number: '19',
    cliente: {nome: 'Ian'},
    quantidadePessoas: 1,
    tempoTotal: 15,
  },
  {
    number: '10',
    cliente: {nome: 'Julia'},
    quantidadePessoas: 10,
    tempoTotal: 150,
  },
];

const myOrdersData: IOrder[] = [
  {
    number: '17',
    cliente: {nome: 'Alice'},
    quantidadePessoas: 3,
    tempoTotal: 45,
  },
  {
    number: '22',
    cliente: {nome: 'Bob'},
    quantidadePessoas: 5,
    tempoTotal: 60,
  },
  {
    number: '39',
    cliente: {nome: 'Carlos'},
    quantidadePessoas: 2,
    tempoTotal: 30,
  },
  {
    number: '24',
    cliente: {nome: 'Diana'},
    quantidadePessoas: 4,
    tempoTotal: 75,
  },
];

export const Orders = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 15}}>
      <View style={{alignItems: 'flex-end'}}>
        <Text>admin</Text>
        {/* <UserCircle height={20} width={20} /> */}
      </View>
      <View>
        <Text style={styles.title}>Pedidos abertos</Text>
        <OrderPanel
          title={`Abertos por mim (${myOrdersData.length})`}
          orders={myOrdersData}
        />
        <OrderPanel
          title={`Todos (${ordersTotalData.length})`}
          orders={ordersTotalData}
        />
      </View>
      <FooterMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  tile: {
    width: 82,
    height: 82, // Aproximadamente 1/4 do espaço com margem
    aspectRatio: 1, // Mantém o quadrado
    backgroundColor: '#4CAF50',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#222121',
    fontSize: 32,
    paddingBottom: 32,
  },
  footer: {
    backgroundColor: '#ECECEC',
    paddingTop: 20,
    paddingHorizontal: 50,
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Garante que o footer fique acima do conteúdo do ScrollView
  },
});
