import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IOrder} from '@interfaces/IOrder';
import {theme} from '@theme/index';
import {Routes} from '@constants/routes';
interface IProps {
  orders: IOrder[];
  title: string;
}

export const OrderPanel = ({orders, title}: IProps) => {
  const {navigate} = useNavigation();

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        {orders.map((order, index) => (
          <Pressable
            onPress={() => navigate(Routes.ORDER, {order})}
            key={index}
            style={[
              styles.tile,
              {
                backgroundColor: order.isLate
                  ? theme.colors.BrandColors.Yellow.main
                  : theme.colors.BrandColors.Green.main,
              },
            ]}>
            <Text style={styles.orderNumber}>{order.number}</Text>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
  tile: {
    width: 82,
    height: 82,
    aspectRatio: 1,
    margin: 4,

    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  orderNumber: {fontWeight: 'bold', fontSize: 30, color: 'white'},
  title: {
    paddingBottom: 15,
    fontSize: 18,
    color: theme.colors.BrandColors.GrayScale.black,
  },
});
