import styled, {css} from 'styled-components/native';

interface ClassificationProps {
  typeOfClassification: string;
}

export const Container = styled.View<ClassificationProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${props =>
    props.typeOfClassification === 'danger'
      ? css`
          background-color: #f59258;
        `
      : props.typeOfClassification === 'moderate'
      ? css`
          background-color: #f2ed4b;
        `
      : props.typeOfClassification === 'none' &&
        css`
          background-color: #7af591;
        `}
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 80px;
`;

export const Title = styled.Text<ClassificationProps>`
  font-size: 48px;
  font-weight: bold;
  line-height: 60px;

  ${props =>
    props.typeOfClassification === 'danger' ||
    props.typeOfClassification === 'none'
      ? css`
          color: #fff;
        `
      : props.typeOfClassification === 'moderate' &&
        css`
          color: #000;
        `}
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  background-color: #ff8903;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
