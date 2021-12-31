import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useClassify} from '../../hooks/classify';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  TitleContainer,
  Title,
  Button,
  ButtonTitle,
  TreatmentContainer,
  TreatmentTitle,
  TreatmentItem,
  TreatmentHeader,
  TreatmentItemContainer,
  Dot,
  TreatmentList,
} from './styles';
import {View} from 'react-native';

interface IClassification {
  classify: string;
  type: string;
  screen: string;
  treatments: Array<{
    id: number;
    treat: string;
    result?: string;
  }>;
}

const ClassificationDisease: React.FC = () => {
  const navigation = useNavigation();
  const {yesDisease, resetClassification} = useClassify();

  const [classify, setClassify] = useState<IClassification>(
    {} as IClassification,
  );
  const [clicked, setClicked] = useState(false);

  console.log('::::::::::::::', classify);
  useEffect(() => {
    const classifyValue: Array<IClassification> = [];
    yesDisease.forEach(data =>
      classifyValue.push({
        type: data.type,
        classify: data.classify,
        screen: data.screen,
        treatments: data.treatments,
      }),
    );

    let classifyData = {} as IClassification;
    classifyValue.forEach(data => {
      if (data.type === 'danger') {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
          treatments: data.treatments,
        };
        setClassify(classifyData);
      } else if (data.type === 'moderate' && classifyData.type !== 'danger') {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
          treatments: data.treatments,
        };
        setClassify(classifyData);
      } else if (
        data.type === 'none' &&
        classifyData.type !== 'danger' &&
        classifyData.type !== 'moderate'
      ) {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
          treatments: data.treatments,
        };
        setClassify(classifyData);
      }
    });
  }, [yesDisease]);

  const nextScreen = () => {
    if (classify.screen === 'Sibilancia') {
      navigation.navigate('Tosse' as never);
    } else if (classify.screen === 'Hidratacao') {
      navigation.navigate('ClassifyDiarreiaTime' as never);
    } else if (classify.screen === '14dias') {
      navigation.navigate('ClassifyDiarreia' as never);
    } else if (classify.screen === 'Desnutricao') {
      navigation.navigate('Anemia' as never);
    } else {
      navigation.navigate('Disease' as never);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Container
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          paddingTop: 40,
          paddingBottom: 140,
          paddingHorizontal: 20,
        }}
        typeOfClassification={classify.type}>
        <TitleContainer>
          {classify.type === 'danger' ? (
            <Icon name="x-circle" size={40} color="#fff" />
          ) : classify.type === 'moderate' ? (
            <Icon name="alert-triangle" size={40} color="#000" />
          ) : (
            <Icon name="thumbs-up" size={40} color="#fff" />
          )}
          <Title typeOfClassification={classify.type}>
            {classify.classify}
          </Title>
        </TitleContainer>
        <TreatmentContainer
          activeOpacity={1}
          onPress={() => setClicked(!clicked)}>
          <TreatmentHeader>
            <TreatmentTitle>Tratamento</TreatmentTitle>
            {clicked ? (
              <Icon name="chevron-up" size={30} color="#474545" />
            ) : (
              <Icon name="chevron-down" size={30} color="#474545" />
            )}
          </TreatmentHeader>
          {clicked && (
            <TreatmentItemContainer>
              {classify.treatments.map(treatment => (
                <TreatmentList key={treatment.id}>
                  <Dot />
                  <TreatmentItem>{treatment.treat}</TreatmentItem>
                </TreatmentList>
              ))}
            </TreatmentItemContainer>
          )}
        </TreatmentContainer>
        <Button
          style={{elevation: 4}}
          onPress={() => {
            resetClassification();
            setClassify({} as IClassification);
            nextScreen();
          }}>
          <ButtonTitle>Prosseguir</ButtonTitle>
        </Button>
      </Container>
    </View>
  );
};

export default ClassificationDisease;
