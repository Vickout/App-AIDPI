import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

interface CheckBoxProps extends RectButtonProperties {
  children: string;
}

const Checkbox: React.FC<CheckBoxProps> = ({children, ...rest}) => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  console.log(selectedIcon);
  return (
    <RectButton
      style={styles.container}
      //onPress={() => console.log('apertou')}
      {...rest}>
      <Text style={styles.question}>{children}</Text>
      {selectedIcon ? (
        <Icon name="check" size={20} color="#129400" />
      ) : (
        <Icon name="circle" size={20} color="#000" />
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
});

export default Checkbox;
