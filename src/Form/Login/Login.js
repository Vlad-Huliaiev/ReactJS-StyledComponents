import React, { Component } from 'react'
import "./Login.css";
import {Container, HeaderContainer, TextContainer, ImgHeader, ContainerInput, EnterButton} from "../Style.js";
import {ReactComponent as ReactLogo} from '../img/padlock.svg';
import {Link} from "react-router-dom";

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
                            <Link to="" className="link-to-register" onClick={this.forgotPassword}>Forgot password?</Link>
                            <Link to="/register"  className="link-to-register">Don`t have an account? Sign Up</Link>
                        </div>
                    </TextContainer>
                </form>
            </Container>
        )
    }
}

export default Login;