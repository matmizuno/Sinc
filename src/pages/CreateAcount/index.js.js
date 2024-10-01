import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import ButtonAcessar from '../../components/ButtonAcessar/index'
import FormularioCreate from '../../components/FomularioCreate';

const Acount = ({ navigation }) => {
  return (
    <View style={styles.container} >

      <View style={styles.cabeacalho}>
      <Image
        source={require('../../../assets/iconHome.png')}
        style={styles.image}
      />

      </View>
      
      <FormularioCreate/>

    <View>
     

    </View>
    </View>
  );
};

const styles = StyleSheet.create({

  cabeacalho:{
    height:'30%',
    width:'100%',
    display:'flex',
    alignItems: 'center',
   justifyContent: 'center'
  },
  
  container:{
    width:'100%',
    height: '100%',
    display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
  }
});


export default Acount;
