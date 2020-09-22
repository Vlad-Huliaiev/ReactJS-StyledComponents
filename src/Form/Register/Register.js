import React, { Component } from 'react'
import "./Register.css";
import {Container, HeaderContainer, TextContainer, ImgHeader, ContainerInput, EnterButton, ContainerNameInput} from "../Style.js";
import {ReactComponent as ReactLogo} from '../img/padlock.svg';
import {Link} from "react-router-dom";

class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    }

    onChange = this.onChange.bind(this)
    onSubmit = this.onSubmit.bind(this)

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
    }

    show = () => {
        console.log(this.state);
    }

    render(){
        return(
            <Container>
                <HeaderContainer>
                    <ImgHeader>
                        <ReactLogo/>
                    </ImgHeader>
                </HeaderContainer>
                <form noValidate onSubmit={this.onSubmit}>
                    <TextContainer>Sign Up
                        <div className="register-text-name">
                            <div>
                                <ContainerNameInput
                                    type="text"
                                    name="first_name"
                                    placeholder=" First Name*"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                ></ContainerNameInput>
                            </div>

                            <div>
                                <ContainerNameInput
                                    type="text"
                                    name="last_name"
                                    placeholder=" Last Name*"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                ></ContainerNameInput>
                            </div>
                        </div>

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


                        <EnterButton onClick={this.show.bind(this)}>SIGN UP</EnterButton>
                        <div>
                            <Link to="/login" className="link-to-login">Already have an account? Sign In</Link>
                        </div>

                    </TextContainer>
                </form>
            </Container>
        )
    }
}

export default Register;