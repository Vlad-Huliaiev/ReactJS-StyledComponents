import React, { Component } from 'react'
//import "./Login.css";
import { login } from './LoginFunction';
import {Container, HeaderContainer, TextContainer, ImgHeader, ContainerInput, EnterButton, EnterText} from "../Style.js";
import {ReactComponent as ReactLogo} from '../img/padlock.svg';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    onChange = this.onChange.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
//        login(user).then(res => {
//            if (res) {
//                this.props.history.push(`/profile`);
//            }
//        })
    }

    show = () => {
        console.log(this.state);
    }

    forgotPassword = () => alert(`This is bullshit!`);

    render(){
        return(
            <Container>
                <HeaderContainer>
                    <ImgHeader>
                        <ReactLogo/>
                    </ImgHeader>
                </HeaderContainer>
                <form noValidate onSubmit={this.onSubmit}>
                    <TextContainer>Sign In
                        <div>
                            <ContainerInput
                                type="email"
                                name="email"
                                placeholder=" Email Address*"
                                value={this.state.email}
                                onChange={this.onChange}
                            >
                            </ContainerInput>
                        </div>

                        <div>
                            <ContainerInput
                                type="password"
                                name="password"
                                placeholder=" Password*"
                                value={this.state.password}
                                onChange={this.onChange}
                            >
                            </ContainerInput>
                        </div>

                        <EnterButton onClick={this.show.bind(this)}>SIGN IN</EnterButton>
                        <div>
                            <EnterText href="" onClick={this.forgotPassword}>Forgot password?</EnterText>
                            <EnterText href="/register">Don`t have an account? Sign Up</EnterText>
                        </div>
                    </TextContainer>
                </form>
            </Container>
        )
    }
}

export default Login;