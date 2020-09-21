import React, { Component } from 'react'
import "./Register.css";
import { register } from './RegisterFunction';
import {Container, HeaderContainer, TextContainer, ImgHeader, ContainerInput, EnterButton, EnterText, ContainerNameText, ContainerNameInput} from "../Style.js";
import {ReactComponent as ReactLogo} from '../img/padlock.svg';

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

    const newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
    }
//    register(newUser).then(res => {
//        this.props.history.push(`/login`)
//    })
    }

    show = () => {
//        if(this.state === a){
            console.log(this.state);
//        } else {
//            alert(`Enter your data!`);
//        }
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
                            <EnterText href="/login" className="register-text">Already have an account? Sign In</EnterText>
                        </div>
                    </TextContainer>
                </form>
            </Container>
        )
    }
}

export default Register;