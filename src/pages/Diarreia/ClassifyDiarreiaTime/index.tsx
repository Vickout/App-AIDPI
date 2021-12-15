import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, ButtonContainer, Button} from './styles';

const ClassifyDiarreiaTime: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>A criança está com diarreia há 14 dias ou mais?</Title>
      <ButtonContainer>
        <Button
          buttonColor="#f59258"
          onPress={() => navigation.navigate('ClassifyDiarreia' as never)}>
          <Icon name="x" size={40} color="#fff" />
        </Button>
        <Button
          buttonColor="#7af591"
          onPress={() =>
            navigation.navigate('Diarreia' as never, {cause: '14dias'} as never)
          }>
          <Icon name="check" size={40} color="#fff" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ClassifyDiarreiaTime;
