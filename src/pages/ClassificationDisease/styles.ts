import styled, {css} from 'styled-components/native';

interface ClassificationProps {
  typeOfClassification: string;
}

interface TreatmentItemProp {
  condition?: boolean;
}

export const Container = styled.ScrollView<ClassificationProps>`
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

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text<ClassificationProps>`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  width: 300px;

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

export const TreatmentContainer = styled.TouchableOpacity`
  background: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-top: 40px;
`;

export const TreatmentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TreatmentTitle = styled.Text`
  color: #474545;
  font-weight: bold;
  font-size: 20px;
`;

export const TreatmentItemContainer = styled.View`
  margin-top: 10px;
`;

export const TreatmentList = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #474545;
  margin-right: 10px;
`;

export const TreatmentItem = styled.Text<TreatmentItemProp>`
  margin: 10px 0;
  font-size: 16px;

  ${props =>
    props.condition &&
    css`
      font-weight: bold;
    `}
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  background-color: #e27af5;
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
