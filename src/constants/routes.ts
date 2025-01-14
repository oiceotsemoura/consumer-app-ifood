import {IOrder} from '@interfaces/IOrder';

export enum Routes {
  ORDERS = 'ORDERS',
  ORDER = 'ORDER',
  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
}

export type RootStackParamList = {
  [Routes.ORDERS]: undefined;
  [Routes.WELCOME]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.ORDER]: {order: IOrder};
};
