import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const ButtonAcess = () => {
  const navigation = useNavigation();
  return (
   <View>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('home')}>
        <Text style={styles.txt}>Acessar</Text>
    </TouchableOpacity>
   </View>
  );
};


export default ButtonAcess;
