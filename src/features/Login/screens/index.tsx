import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import BackgroundImage from '@assets/images/background-gradient.png';
import Logo from '@assets/images/imagotipo-branco.png';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@constants/routes';
import {theme} from '@theme/index';

export const Login = () => {
  const {navigate} = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate(Routes.ORDERS);
  };

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
          <Text style={styles.welcomeTitle}>Entrar no Consumer APP</Text>

          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor={theme.colors.BrandColors.GrayScale.black}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={theme.colors.BrandColors.GrayScale.black}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.startButton}>
          <Text style={styles.startButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Saiba mais sobre o Consumer APP.
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
    paddingTop: 30,
  },
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 16,
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
    marginTop: 30,
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

  input: {
    height: 50,
    borderColor: theme.colors.BrandColors.GrayScale.light,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  logo: {
    width: 250,
  },
});
