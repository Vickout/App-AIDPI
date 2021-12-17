import React, {useEffect, useState} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useClassify} from '../../hooks/classify';
import {Container, ButtonText} from './styles';

const Button: React.FC<TouchableOpacityProps> = ({children, ...rest}) => {
  const {yesDisease} = useClassify();
  const [hasNotDisease, setHasNotDisease] = useState(false);

  useEffect(() => {
    if (yesDisease.length === 0) {
      setHasNotDisease(true);
    } else {
      setHasNotDisease(false);
    }
  }, [yesDisease]);

  return (
    <Container disabled={hasNotDisease} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
