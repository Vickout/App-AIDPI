import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const ClassifyFebre: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A região onde a criança mora tem risco de malária?
      </Text>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'Febre' as never,
              {region_has_malaria: 'com_malaria'} as never,
            )
          }>
          <Icon name="check" size={40} color="#8cf22c" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'Febre' as never,
              {region_has_malaria: 'sem_malaria'} as never,
            )
          }>
          <Icon name="x" size={40} color="#f71143" />
        </TouchableOpacity>
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
});

export default ClassifyFebre;
