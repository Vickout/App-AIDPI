import styled, { css } from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #e27af5;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;

  ${props =>
    props.disabled &&
    css`
      background-color: ${lighten(0.15, '#e27af5')};
    `}
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
