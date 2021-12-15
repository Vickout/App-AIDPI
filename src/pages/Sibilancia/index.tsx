import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import signals from '../../data/diseases.json';
import Checkbox from '../../components/Checkbox';

const Sibilancia: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        <FlatList
          data={signals.sibilancia}
          keyExtractor={item => String(item.id)}
          numColumns={1}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Classification' as never)}>
              <Text style={styles.buttonLabel}>Classificar</Text>
            </TouchableOpacity>
          )}
          renderItem={({item}) => (
            <Checkbox key={item.id} data={item} screen="Sibilancia">
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
    marginBottom: 60,
    alignSelf: 'center',
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

export default Sibilancia;
