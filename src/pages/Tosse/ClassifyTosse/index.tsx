import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Title, ButtonContainer, Button} from './styles';

const ClassifyTosse: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>A criança está com sibilância?</Title>
      <ButtonContainer>
        <Button
          buttonColor="#f59258"
          onPress={() => navigation.navigate('Tosse' as never)}>
          <Icon name="x" size={40} color="#fff" />
        </Button>
        <Button
          buttonColor="#7af591"
          onPress={() => navigation.navigate('Sibilancia' as never)}>
          <Icon name="check" size={40} color="#FFF" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ClassifyTosse;
