import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackgroundImage from '@assets/images/background-gradient.png';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@constants/routes';
import Logo from '@assets/images/imagotipo-branco.png';
import {theme} from '@theme/index';

export const Welcome = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <ImageBackground
        source={BackgroundImage}
        style={styles.background}
        resizeMode="cover">
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao Consumer APP!</Text>
          <Text style={styles.welcomeDescription}>
            O Consumer APP foi desenvolvido para funcionar junto com uma
            assinatura premium do Consumer.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate(Routes.LOGIN)}
          style={styles.startButton}>
          <Text style={styles.startButtonText}>INICIAR</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Saiba mais sobre o Consumer APP.{' '}
            <Text style={styles.linkText}>Veja aqui.</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 30,
  },
  welcomeSection: {
    padding: 10,
    paddingTop: 40,
  },
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 12,
  },
  welcomeDescription: {
    fontSize: 18,
    paddingBottom: 40,
  },
  startButton: {
    backgroundColor: theme.colors.BrandColors.GrayScale.almostBlack,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 50,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: theme.colors.BrandColors.GrayScale.light,
    padding: 5,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    paddingBottom: 50,
    paddingTop: 15,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  logo: {
    width: 250,
  },
});
