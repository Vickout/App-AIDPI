import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, ButtonContainer, Button} from './styles';

const ClassifyFebre: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>A região onde a criança mora tem risco de malária?</Title>
      <ButtonContainer>
        <Button
          buttonColor="#f59258"
          onPress={() =>
            navigation.navigate(
              'Febre' as never,
              {region_has_malaria: 'sem_malaria'} as never,
            )
          }>
          <Icon name="x" size={40} color="#fff" />
        </Button>
        <Button
          buttonColor="#7af591"
          onPress={() =>
            navigation.navigate(
              'Febre' as never,
              {region_has_malaria: 'com_malaria'} as never,
            )
          }>
          <Icon name="check" size={40} color="#fff" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ClassifyFebre;
