import {IOrder} from '@interfaces/IOrder';

export enum Routes {
  ORDERS = 'ORDERS',
  ORDER = 'ORDER',
}

export type RootStackParamList = {
  [Routes.ORDERS]: undefined;
  [Routes.ORDER]: {order: IOrder};
};
