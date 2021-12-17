import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

import signals from '../../data/diseases.json';

const Tosse: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {signals.tosse.map(data => (
          <Checkbox key={data.id} data={data} screen="Tosse">
            {data.signal}
          </Checkbox>
        ))}
      </View>
      <Button onPress={() => navigation.navigate('Classification' as never)}>
        Classificar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  questionContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default Tosse;
