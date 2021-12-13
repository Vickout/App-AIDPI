import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const ClassifyTosse: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A criança está com sibilância?</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sibilancia' as never)}>
          <Icon name="check" size={40} color="#8cf22c" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tosse' as never)}>
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

export default ClassifyTosse;
