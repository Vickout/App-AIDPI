import styled, {css} from 'styled-components/native';

interface ContainerProps {
  disabledInput?: boolean | null | undefined;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  position: absolute;
  bottom: 40px;
  background-color: #ff8903;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  ${props =>
    props.disabledInput &&
    css`
      background-color: #fcb25e;
    `}
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
