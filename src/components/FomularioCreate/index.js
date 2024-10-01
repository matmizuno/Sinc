import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonAcess from '../ButtonAcessar2';
import styles from './style';

const FormularioCreate = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title2}>Olá, Seja bem-vindo!</Text>
      </View>
      <Text style={styles.title}>Nome de usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu nome de usuário'
      />

      <Text style={styles.title}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira sua senha'
        secureTextEntry
      />

      <View style={styles.btn}>
      <ButtonAcess/>
        
      </View>
    </View>
  );
};



export default FormularioCreate;
