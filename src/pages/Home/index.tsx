import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo! Este app tem o objetivo de te ajudar na classificação das
        doenças mais prevalentes na infância baseado no AIDPI.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FirstAssessment' as never)}>
        <Icon name="list" size={50} color="#000" />
      </TouchableOpacity>
      <Text style={styles.label}>AVALIAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  button: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Home;
