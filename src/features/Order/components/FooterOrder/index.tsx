import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export const FooterMenu = () => (
  <View style={styles.footer}>
    <TouchableOpacity
      style={{
        width: 60,
        borderWidth: 2,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 12,
      }}>
      <Text style={{fontSize: 25}}>{`<-`}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        width: 60,
        borderWidth: 2,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 12,
      }}>
      <Text>{`<-s`}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        backgroundColor: '#222121',
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>
        PAGAR R$ 124,90
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Garante que o footer fique acima do conteúdo do ScrollView
  },
});
