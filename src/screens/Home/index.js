import React, { Component } from 'react';
import { MaterialIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description,
    Annotation
} from './styles';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            senha: ''
        };
    }

    componentDidMount() {
        //const { userEmail, userSenha } = this.props.navigation.state.params;
        this.setState({ email: 'userEmail', senha: 'userSenha', isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 4000);
    }

    render() {
        return (
            this.state.isLoading ?
                <Container>
                    <MaterialIndicator size={40} color="#FFFFFF" animationDuration={800} />
                </Container>
                :
                <Container>
                    <Header />
                    <Content>
                        <Card>
                            <CardHeader>
                                <Icon name="attach-money" size={28} color="#666" />
                                <Icon name="visibility-off" size={28} color="#666" />
                            </CardHeader>
                            <CardContent>
                                <Title>Saldo disponível</Title>
                                <Description>R$ 197.611,65</Description>
                            </CardContent>
                            <CardFooter>
                                <Annotation>
                                    Tranferência de R$ 20,00 recebida de Yuri Silveira hoje às 06:00h
                                </Annotation>
                            </CardFooter>
                        </Card>
                    </Content>
                    <Tabs />
                </Container>
        )
    }
}
