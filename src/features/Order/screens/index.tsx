import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, Routes} from '@constants/routes';
import {FooterOrder} from '../components/FooterOrder';
import {formatToReais} from '@utils/format';
import completeIon from '@assets/icons/complete.png';
import {theme} from '@theme/index';

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
    <View style={styles.orderItem}>
      <View style={styles.orderItemDetails}>
        <View style={styles.orderItemHeader}>
          <Text style={styles.orderItemTitle}>
            <Text>{orderItem.quantidade} </Text> {orderItem.nome}
          </Text>
          <Text style={styles.orderItemPrice}>
            {formatToReais(orderItem.preco)}
          </Text>
        </View>

        <Text style={styles.orderItemObservation}>
          <Text>{orderItem.observacao}</Text>
        </Text>
        {orderItem.adicionais.map((adicional, index) => {
          return (
            <Text key={`adicional${index}`} style={styles.orderItemAdditional}>
              {`+ ${adicional.nome} (${formatToReais(adicional.preco)})`}
            </Text>
          );
        })}
      </View>
      <View style={styles.orderItemQuantity}>
        <TouchableOpacity onPress={() => Alert.alert('')}>
          <Image source={completeIon} style={{width: 20, height: 5}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Order = () => {
  const {order} =
    useRoute<RouteProp<RootStackParamList, Routes.ORDER>>().params;

  return (
    <>
      <View style={styles.header} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.orderTitleContainer}>
          <Text style={styles.orderTitle}>{order.number}</Text>
        </View>
        <View style={styles.orderDetails}>
          <View style={styles.customerInfo}>
            <Text style={styles.customerText}>
              Cliente: <Text style={styles.boldText}>{order.cliente.nome}</Text>
            </Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.orderInfoText}>
              Qtde.pessoas:
              <Text style={styles.boldText}> {order.quantidadePessoas}</Text>
            </Text>
            <Text style={styles.orderInfoText}>
              Tempo total:{' '}
              <Text style={styles.boldText}>{order.tempoTotal}min.</Text>
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.itemsHeader}>
            <Text style={styles.itemsTitle}>{`Itens (5)`}</Text>
          </View>
          {itens.map(orderItem => {
            return (
              <OrderItem key={`order${orderItem.id}`} orderItem={orderItem} />
            );
          })}
        </View>
      </ScrollView>
      <FooterOrder />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.BrandColors.Green.main,
    height: 65,
  },
  scrollContainer: {
    padding: 12,
    backgroundColor: theme.colors.BrandColors.GrayScale.white,
    paddingBottom: 150,
  },
  orderTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderTitle: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  orderDetails: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingVertical: 6,
    marginVertical: 15,
  },
  customerInfo: {
    marginHorizontal: 18,
    paddingBottom: 12,
    paddingTop: 6,
    borderBottomWidth: 1,
    borderColor: theme.colors.BrandColors.GrayScale.light,
  },
  customerText: {
    fontSize: 15,
  },
  orderInfo: {
    marginHorizontal: 18,
    paddingBottom: 12,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderInfoText: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  itemsHeader: {
    paddingBottom: 12,
    paddingTop: 6,
    borderBottomWidth: 1,
    borderColor: theme.colors.BrandColors.GrayScale.light,
  },
  itemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItem: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: theme.colors.BrandColors.GrayScale.light,
    borderStyle: 'dashed',
  },
  orderItemDetails: {
    flex: 1,
  },
  orderItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  orderItemTitle: {
    fontWeight: 'bold',
  },
  orderItemPrice: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  orderItemObservation: {
    color: '#6D6D6D',
    paddingVertical: 5,
  },
  orderItemAdditional: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  orderItemQuantity: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
