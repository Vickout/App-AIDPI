import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {useClassify} from '../../hooks/classify';

interface IDisease {
  id: number;
  signal: string;
  classify: string;
  type: string;
}

interface CheckBoxProps {
  children: string;
  data: IDisease;
  screen: string;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  children,
  data,
  screen,
  ...rest
}) => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  const {addDisease} = useClassify();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setSelectedIcon(!selectedIcon);
        addDisease({...data, screen});
      }}
      {...rest}>
      <Text style={styles.question}>{children}</Text>
      {selectedIcon ? (
        <Icon name="check" size={20} color="#129400" />
      ) : (
        <Icon name="circle" size={20} color="#6b6767" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
  },
  question: {
    color: '#6b6767',
    fontWeight: 'bold',
    fontSize: 16,
    width: 250,
  },
});

export default Checkbox;
