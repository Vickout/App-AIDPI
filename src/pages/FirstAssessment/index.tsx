import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    question: 'A criança consegue beber ou mamar no peito?',
  },
  {
    id: 2,
    question: 'A criança vomita tudo que ingere?',
  },
  {
    id: 3,
    question:
      'A criança apresentou convulsões ou movimentos anormais há menos de 72h?',
  },
  {
    id: 4,
    question: 'A criança está letárgica ou inconsciente?',
  },
  {
    id: 5,
    question: 'A criança apresenta tempo de enchimento capilar >2seg?',
  },
  {
    id: 6,
    question: 'A criança apresenta batimento de asa do nariz e/ou gemência?',
  },
];

const FirstAssessment: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {data.map(questionData => (
          <Fragment key={questionData.id}>
            <Text style={styles.question}>{questionData.question}</Text>
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
