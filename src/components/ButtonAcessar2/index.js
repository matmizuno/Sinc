import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Notfication from 'expo-notifications';
import Login from '../../pages/Login/telaLogin';
import styles from './style';

const ButtonAcess = () => {
  const navigation = useNavigation();

  const handleNotificationLocal = async () => {
    await Notfication.scheduleNotificationAsync({
      content: {
        title: 'Notificação local',
        body: `Bem vindo`,
        data: [],
      },
      trigger: {
        seconds: 1,
      },
    });

    // Navegar para a tela de Login após a notificação
    navigation.navigate('Login'); // Certifique-se de que 'Login' é o nome correto da sua rota
  };

  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={handleNotificationLocal}>
        <Text style={styles.txt}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ButtonAcess;
