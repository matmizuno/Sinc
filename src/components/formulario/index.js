import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ButtonAcessar from '../ButtonAcessar/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Formulario = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para carregar os dados de login
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('password');

        if (storedUsername) setUsername(storedUsername);
        if (storedPassword) setPassword(storedPassword);
      } catch (error) {
        console.error('Erro ao carregar os dados', error);
      }
    };

    loadData();
  }, []);

  // Função para salvar ou atualizar os dados de login
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Isso sobrescreve os dados anteriores no AsyncStorage
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      // Navegar para a próxima tela, se necessário
      // navigation.navigate('Home'); // Descomente se desejar navegar após o login
    } catch (error) {
      console.error('Erro ao salvar os dados', error);
      Alert.alert('Erro', 'Houve um problema ao salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title2}>Olá, faça login em sua conta</Text>
      </View>
      <Text style={styles.title}>Nome de usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu nome de usuário'
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.title}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira sua senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.btn}>
        <ButtonAcessar onPress={handleLogin} />

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Create')}>
          <Text>Não tem uma conta? <Text style={styles.txt1}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Formulario;
