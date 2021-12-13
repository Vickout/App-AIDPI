import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Checkbox from '../../components/Checkbox';

import signals from '../../data/diseases.json';

interface IDisease {
  id: number;
  signal: string;
  classify: string;
  type: string;
}

const Tosse: React.FC = () => {
  const navigation = useNavigation();

  const [yesDisease, setYesDisease] = useState<IDisease[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {signals.tosse.map(data => (
          <Checkbox
            key={data.id}
            onPress={() => setYesDisease([...yesDisease, data])}>
            {data.signal}
          </Checkbox>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'Classification' as never,
            {
              classification: {
                yes: yesDisease,
              },
            } as never,
          )
        }>
        <Text style={styles.buttonLabel}>Classificar</Text>
      </TouchableOpacity>
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
  button: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#ff8903',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Tosse;
