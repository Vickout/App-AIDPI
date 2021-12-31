import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useClassify} from '../../hooks/classify';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Title, Button, ButtonTitle, IconContainer} from './styles';

interface IClassification {
  classify: string;
  type: string;
  screen: string;
}

const Classification: React.FC = () => {
  const navigation = useNavigation();
  const {yesDisease, resetClassification} = useClassify();
  const [classify, setClassify] = useState<IClassification>(
    {} as IClassification,
  );
  const [text, setText] = useState('');

  console.log('::::::::::::::', classify);
  useEffect(() => {
    const classifyValue: Array<IClassification> = [];
    yesDisease.forEach(data =>
      classifyValue.push({
        type: data.type,
        classify: data.classify,
        screen: data.screen,
      }),
    );

    let classifyData = {} as IClassification;
    classifyValue.forEach(data => {
      if (data.type === 'danger') {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
        };
        setClassify(classifyData);
        setText(classifyData.classify);
      } else if (data.type === 'moderate' && classifyData.type !== 'danger') {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
        };
        setClassify(classifyData);
        setText(classifyData.classify);
      } else if (
        data.type === 'none' &&
        classifyData.type !== 'danger' &&
        classifyData.type !== 'moderate'
      ) {
        classifyData = {
          classify: data.classify,
          type: data.type,
          screen: data.screen,
        };
        setClassify(classifyData);
        setText(classifyData.classify);
      }
    });
  }, [yesDisease]);

  return (
    <Container typeOfClassification={classify.type}>
      <IconContainer>
        {classify.type === 'danger' ? (
          <Icon name="x-circle" size={70} color="#fff" />
        ) : classify.type === 'moderate' ? (
          <Icon name="alert-triangle" size={70} color="#000" />
        ) : (
          <Icon name="thumbs-up" size={70} color="#fff" />
        )}
      </IconContainer>
      <Title typeOfClassification={classify.type} stringLength={text.length}>
        {classify.classify}
      </Title>
      <Button
        style={{elevation: 4}}
        onPress={() => {
          resetClassification();
          setClassify({} as IClassification);
          navigation.navigate('Disease' as never);
        }}>
        <ButtonTitle>Prosseguir</ButtonTitle>
      </Button>
    </Container>
  );
};

export default Classification;
