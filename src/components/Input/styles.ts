import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;

  border-width: 2px;
  border-color: #232129;

  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ffff;
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
