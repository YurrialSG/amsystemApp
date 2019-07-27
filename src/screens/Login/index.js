import React, { Component } from 'react'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,
    TextComponent,
    Button,
    ButtonText,
    ButtonContainer,
    Input,
    Img,
} from './styles';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'yuri@gmail.com',
            senha: '123'
        }
    }


    limpar = () => (
        this.setState({
            email: '',
            senha: ''
        })
    )

    render() {

        return (
            <Container>
                <Img source={require('../../../assets/amsystem.png')} />
                <TextComponent> AMSYSTEM </TextComponent>

                <Input
                    placeholder='Digite seu e-mail'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <Input
                    placeholder='Digite sua senha'
                    secureTextEntry
                    onChangeText={(senha) => this.setState({ senha })}
                    value={this.state.senha}
                />

                <ButtonContainer>
                    <Button active
                        onPress={() => this.props.navigation.navigate('Home', {
                            userEmail: this.state.email,
                            userSenha: this.state.senha
                        })}><ButtonText active >Login</ButtonText></Button>
                    <Button border
                        onPress={this.limpar}>
                        <ButtonText>Limpar</ButtonText></Button>
                </ButtonContainer>
            </Container>
        )
    }
}