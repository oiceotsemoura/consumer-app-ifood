import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants/routes';
import * as Features from '@features/index';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name={Routes.ORDERS}
        component={Features.Orders}
      />
      <Stack.Screen
        options={{header: () => null}}
        name={Routes.ORDER}
        component={Features.Order}
      />
    </Stack.Navigator>
  );
};
