import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Checkbox from '../../components/Checkbox';

const data = [
  {
    id: 1,
    signal: 'A criança consegue beber ou mamar no peito?',
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
];

const FirstAssessment: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {data.map(questionData => (
          <Checkbox
            key={questionData.id}
            data={questionData}
            screen="FirstAssessment">
            {questionData.signal}
          </Checkbox>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Classification' as never)}>
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

export default FirstAssessment;
