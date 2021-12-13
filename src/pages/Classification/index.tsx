import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Classification: {
    classification: {
      yes: Array<{
        id: number;
        signal: string;
        classify: string;
        type: string;
      }>;
    };
  };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Classification'>;

interface IClassification {
  classify: string;
  type: string;
}

const Classification: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute<ProfileScreenRouteProp>();

  const [classify, setClassify] = useState<IClassification>(
    {} as IClassification,
  );

  console.log('fora do if', classify);

  useEffect(() => {
    const classifyValue: Array<IClassification> = [];
    route.params.classification.yes.forEach(data =>
      classifyValue.push({type: data.type, classify: data.classify}),
    );

    let classifyData = {} as IClassification;
    classifyValue.forEach(data => {
      console.log('Data', data);
      if (data.type === 'danger' && Object.keys(classifyData).length === 0) {
        classifyData = {classify: data.classify, type: data.type};
        setClassify(classifyData);
      } else if (
        data.type === 'moderate' &&
        Object.keys(classifyData).length === 0
      ) {
        classifyData = {classify: data.classify, type: data.type};
        setClassify(classifyData);
      } else if (
        data.type === 'none' &&
        Object.keys(classifyData).length === 0
      ) {
        classifyData = {classify: data.classify, type: data.type};
        setClassify(classifyData);
      }
      console.log('dentro do if', classifyData);
    });
  }, [route.params.classification.yes]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A região onde a criança mora tem risco de malária?
      </Text>
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

export default Classification;
