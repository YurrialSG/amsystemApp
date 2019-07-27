import styled from 'styled-components';
import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const TextComponent = styled.Text`
  font-size: 25;
  font-weight: 800;  
  margin-bottom: 30px;
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 43;
  width: 80%;
  font-size: 14;
  border-radius: 5;
  border-width: 1;
  border-color: #eaeaea;
  background-color: #fafafa;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10;
  background-color: ${props => props.active ? "#00838f" : "#ffffff"};
  padding: 5px;
  width: 100px;
  margin: 10px;
  margin-bottom: 24px;
  border-color: ${props => props.border ? "#eaeaea" : "#ffffff"};
  border-width: 1px;
  border-radius: 5;
`;

export const ButtonText = styled.Text`
  color: ${props => props.active ? "#ffffff" : "#00838f"};
  text-align: center;
  font-size: 16;
`;