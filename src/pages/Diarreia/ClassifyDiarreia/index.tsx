import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, ButtonContainer, Button} from './styles';

const ClassifyDiarreia: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Há sangue nas fezes?</Title>
      <ButtonContainer>
        <Button
          buttonColor="#f59258"
          onPress={() => navigation.navigate('Disease' as never)}>
          <Icon name="x" size={40} color="#fff" />
        </Button>
        <Button
          buttonColor="#7af591"
          onPress={() =>
            navigation.navigate('Diarreia' as never, {cause: 'sangue'} as never)
          }>
          <Icon name="check" size={40} color="#fff" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ClassifyDiarreia;
