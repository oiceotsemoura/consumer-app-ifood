import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import arrowLeftIon from '@assets/icons/arrow-left.png';
import completeIon from '@assets/icons/complete.png';
import {theme} from '@theme/index';

export const FooterOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconButton}>
        <Image source={arrowLeftIon} style={styles.iconArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image source={completeIon} style={styles.iconComplete} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>PAGAR R$ 124,90</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.BrandColors.GrayScale.almostWhite,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconButton: {
    width: 60,
    borderWidth: 2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 12,
  },
  iconArrow: {
    width: 30,
    height: 20,
  },
  iconComplete: {
    width: 20,
    height: 5,
  },
  payButton: {
    backgroundColor: theme.colors.BrandColors.GrayScale.almostBlack,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  payButtonText: {
    color: theme.colors.BrandColors.GrayScale.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
