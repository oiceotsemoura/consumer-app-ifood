import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import PlusImage from '@assets/icons/mais-black.png';

export const PlusButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton}>
        <Image source={PlusImage} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
