import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import signals from '../../data/diseases.json';

type RootStackParamList = {
  Febre: {region_has_malaria: string};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Febre'>;

interface IList {
  id: number;
  signal: string;
  classify: string;
}

const Febre: React.FC = () => {
  const navigation = useNavigation();
  const [signal, setSignal] = useState<IList[]>([]);
  const route = useRoute<ProfileScreenRouteProp>();

  useEffect(() => {
    if (route.params.region_has_malaria === 'com_malaria') {
      setSignal(signals.febre.com_malaria);
    } else if (route.params.region_has_malaria === 'sem_malaria') {
      setSignal(signals.febre.sem_malaria);
    }
  }, [route.params.region_has_malaria]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {signal.map(data => (
          <Fragment key={data.id}>
            <Text style={styles.question}>{data.signal}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.answer}>
                <Text>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.answer}>
                <Text>Não</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Disease' as never)}>
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
  question: {
    color: '#fff',
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  answer: {
    width: 150,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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

export default Febre;
