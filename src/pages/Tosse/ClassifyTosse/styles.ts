import styled, {css} from 'styled-components/native';

interface ButtonProps {
  buttonColor: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 80px 20px 20px;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  bottom: 100px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  width: 80px;
  height: 80px;

  ${props =>
    props.buttonColor &&
    css`
      background: ${props.buttonColor};
    `}
`;
