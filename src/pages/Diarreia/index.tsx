import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import signals from '../../data/diseases.json';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

type RootStackParamList = {
  Diarreia: {cause: string};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Diarreia'>;

interface IList {
  id: number;
  signal: string;
  classify: string;
  type: string;
}

const Diarreia: React.FC = () => {
  const navigation = useNavigation();
  const [signal, setSignal] = useState<IList[]>([]);
  const route = useRoute<ProfileScreenRouteProp>();

  useEffect(() => {
    if (route.params.cause === 'hidratacao') {
      setSignal(signals.diarreia.hidratacao);
    } else if (route.params.cause === '14dias') {
      setSignal(signals.diarreia['14dias']);
    } else if (route.params.cause === 'sangue') {
      setSignal(signals.diarreia.sangue);
    }
  }, [route.params.cause]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verifique se há sinais gerais de perigo</Text>
      <View style={styles.questionContainer}>
        <FlatList
          data={signal}
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
            <Checkbox
              key={item.id}
              data={item}
              screen={
                route.params.cause.charAt(0).toUpperCase() +
                route.params.cause.slice(1)
              }>
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

export default Diarreia;
