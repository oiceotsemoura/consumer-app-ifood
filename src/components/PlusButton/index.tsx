import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import PlusBlackImage from '@assets/icons/mais-black.png';
import PlusGreenImage from '@assets/icons/mais-green.png';

export const PlusButton = ({
  color,
  midle,
}: {
  color: 'black' | 'green';
  midle?: boolean;
}) => {
  return (
    <View
      style={StyleSheet.compose(styles.container, midle ? styles.midle : {})}>
      <TouchableOpacity style={styles.floatingButton}>
        {color === 'black' ? (
          <Image source={PlusBlackImage} style={styles.buttonImage} />
        ) : (
          <Image source={PlusGreenImage} style={styles.buttonImage} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  midle: {
    alignItems: 'center',
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 130,

    backgroundColor: 'white',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
});
