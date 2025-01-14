import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FooterMenu = () => (
  <View style={styles.footer}>
    <View>
      <Text>Pedidos</Text>
    </View>
    <View>
      <Text>Histórico</Text>
    </View>
    <View>
      <Text>Config</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
