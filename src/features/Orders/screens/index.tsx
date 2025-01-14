import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {OrderPanel} from '@components/OrderPanel';
import {IOrder} from '@interfaces/IOrder';
import {FooterMenu} from '@components/FooterMenu';
import {PlusButton} from '@components/PlusButton';
import UserIcon from '@assets/icons/user-circle.png';
import {theme} from '@theme/index';

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
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userText}>admin</Text>
            <Image source={UserIcon} style={styles.userIcon} />
          </View>
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
          <OrderPanel
            title={`Todos (${ordersTotalData.length})`}
            orders={ordersTotalData}
          />
        </View>
      </ScrollView>
      <PlusButton midle color="black" />
      <FooterMenu />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {flexGrow: 1, padding: 15, paddingBottom: 120},
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  tile: {
    width: 82,
    height: 82,
    aspectRatio: 1,
    backgroundColor: theme.colors.BrandColors.Green.main,
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
    color: theme.colors.BrandColors.GrayScale.almostBlack,
    fontSize: 32,
    paddingBottom: 32,
  },
  footer: {
    backgroundColor: theme.colors.BrandColors.GrayScale.almostWhite,
    paddingTop: 20,
    paddingHorizontal: 50,
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerContainer: {
    alignItems: 'flex-end',
    paddingTop: 30,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    paddingRight: 5,
  },
  userIcon: {
    width: 20,
    height: 20,
  },
});
