import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import signals from '../../data/diseases.json';

interface IDiarreia {
  cause: string;
}

interface IList {
  id: number;
  signal: string;
  classify: string;
}

const Diarreia: React.FC<IDiarreia> = ({cause}) => {
  const navigation = useNavigation();
  const [signal, setSignal] = useState<IList[]>([]);

  useEffect(() => {
    if (cause === 'hidratacao') {
      setSignal(signals.diarreia.hidratacao);
    } else if (cause === '14dias') {
      setSignal(signals.diarreia['14dias']);
    } else if (cause === 'sangue') {
      setSignal(signals.diarreia.sangue);
    }
  }, [cause]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        {signal.map(data => {
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
          </Fragment>;
        })}
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

export default Diarreia;
