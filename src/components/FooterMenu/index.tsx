import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import documentIcon from '@assets/document.png';
import historyIcon from '@assets/history.png';
import settingsIcon from '@assets/settings.png';
import {theme} from '@theme/index';

export const FooterMenu = () => (
  <View style={styles.footer}>
    <View style={styles.menuItem}>
      <Image source={documentIcon} style={styles.icon} />
      <Text style={{color: theme.colors.BrandColors.Red.main}}>Pedidos</Text>
    </View>
    <View style={styles.menuItem}>
      <Image source={historyIcon} style={styles.icon} />
      <Text>Histórico</Text>
    </View>
    <View style={styles.menuItem}>
      <Image source={settingsIcon} style={styles.icon} />
      <Text>Config</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
  menuItem: {
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 4,
  },
});
