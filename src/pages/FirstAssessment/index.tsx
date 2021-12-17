import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const data = [
  {
    id: 1,
    signal: 'A criança não consegue beber ou mamar no peito?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 2,
    signal: 'A criança vomita tudo que ingere?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 3,
    signal:
      'A criança apresentou convulsões ou movimentos anormais há menos de 72h?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 4,
    signal: 'A criança está letárgica ou inconsciente?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 5,
    signal: 'A criança apresenta tempo de enchimento capilar >2seg?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 6,
    signal: 'A criança apresenta batimento de asa do nariz e/ou gemência?',
    classify: `A criança apresenta sinal geral de perigo e necessita ser urgentemente
assistida; completar imediatamente a avaliação, administrar o tratamento indicado prévio à
referência e referir urgentemente ao hospital.`,
    type: 'danger',
  },
  {
    id: 7,
    signal: 'Nenhum dos sinais acima',
    classify: 'A criança não apresenta sinais de perigo',
    type: 'none',
  },
];

const FirstAssessment: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          numColumns={1}
          ListFooterComponent={() => (
            <Button
              onPress={() => navigation.navigate('Classification' as never)}>
              Classificar
            </Button>
          )}
          renderItem={({item}) => (
            <Checkbox key={item.id} data={item} screen="FirstAssessment">
              {item.signal}
            </Checkbox>
          )}
        />
      </View>
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

export default FirstAssessment;
