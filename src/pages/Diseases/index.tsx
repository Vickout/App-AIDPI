import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    disease: 'TOSSE OU DIFICULDADE PARA RESPIRAR',
    screen: 'ClassifyTosse',
  },
  {
    id: 2,
    disease: 'DIARREIA',
    screen: 'Diarreia',
    params: 'hidratacao',
  },
  {
    id: 3,
    disease: 'FEBRE',
    screen: 'ClassifyFebre',
  },
  {
    id: 4,
    disease: 'PROBLEMA DE OUVIDO',
    screen: 'Ouvido',
  },
  {
    id: 5,
    disease: 'DOR NA GARGANTA',
    screen: 'Garganta',
  },
  {
    id: 6,
    disease: 'DESNUTRIÇÃO, ANEMIA E OUTROS PROBLEMAS DE CRESCIMENTO',
    screen: 'Desnutricao',
  },
];

const Disease: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O que a criança apresenta?</Text>
      <View style={styles.diseaseContainer}>
        {data.map(questionData => (
          <View key={questionData.id} style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.disease}
              onPress={() =>
                navigation.navigate(
                  questionData.screen as never,
                  (questionData.params as never) &&
                    ({cause: questionData.params} as never),
                )
              }>
              <Text style={styles.diseaseLabel}>{questionData.disease}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home' as never)}>
        <Text style={styles.buttonLabel}>Voltar</Text>
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
  diseaseContainer: {
    marginTop: 20,
    paddingVertical: 30,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disease: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  diseaseLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
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

export default Disease;
