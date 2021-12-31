import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import signals from '../../data/diseases.json';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

type RootStackParamList = {
  Febre: {region_has_malaria: string};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Febre'>;

interface IList {
  id: number;
  signal: string;
  classify: string;
  type: string;
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
          <Checkbox key={data.id} data={data} screen="Febre">
            {data.signal}
          </Checkbox>
        ))}
      </View>
      <Button
        onPress={() => navigation.navigate('ClassificationDisease' as never)}>
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

export default Febre;
