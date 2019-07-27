import React, { Component } from 'react'
import { Text } from 'react-native'
import { MaterialIndicator } from 'react-native-indicators';

import {
    Container,
    Texto,
    TabHolder
} from './styles';

import RepoTabs from '../../components/RepoTabs'

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
        const { userEmail, userSenha } = this.props.navigation.state.params;
        this.setState({ email: userEmail, senha: userSenha, isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 4000);
    }

    render() {
        return (
            this.state.isLoading ?
                <Container>
                    <MaterialIndicator size={40} color="#00838f" animationDuration={800} />
                </Container>
                :
                <Container>
                    <Texto>E-mail: {this.state.email}</Texto>
                    <Texto>Senha: {this.state.senha}</Texto>
                    <TabHolder>
                        <RepoTabs />
                    </TabHolder>
                </Container>
        )
    }
}
