import styled from 'styled-components';
import { View, Image, Text } from 'react-native';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-left: 8px;
`;