import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import signals from '../../data/diseases.json';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

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
            <Button
              onPress={() =>
                navigation.navigate('ClassificationDisease' as never)
              }>
              Classificar
            </Button>
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
});

export default Sibilancia;
