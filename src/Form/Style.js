import Styled from "styled-components";

const Container = Styled.div`
    margin: 10% auto;
    width: 400px;
    height: 500px;
    padding: 15px 15px 15px 15px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeaderContainer = Styled.div`
    border-radius: 50%;
    background-color: pink;
    width: 50px;
    height: 50px;
    margin-top: 50px;
`

const ImgHeader = Styled.div`
    position: relative;
    width: 42px;
    height: 42px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const TextContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 15px;
    font-size: 20px;
    margin-top: 10px;
`

const ContainerNameInput = Styled.input`
    width: 145px;
    height: 40px;
    border-radius: 2px;
    border: solid 1px grey;
    background-color: rgba(218, 223, 225, 0.9);
    margin-top: 20px;
    margin-bottom: 10px;
    &:hover {
             background-color: #fff;
    }
`

const ContainerInput = Styled.input`
    width: 320px;
    height: 40px;
    border-radius: 2px;
    border: solid 1px grey;
    background-color: rgba(218, 223, 225, 0.9);
    margin-top: 20px;
    margin-bottom: 10px;
    &:hover {
         background-color: #fff;
    }
`

const EnterButton = Styled.button`
    width: 320px;
    height: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
    background-color: rgba(89, 171, 227, 1);
    border-radius: 5px;
    &:hover {
        background-color: rgba(103, 65, 114, 0.9);
    }
`

const EnterText = Styled.a`
    font-size: 10px;
    color: #19b5fe;
    margin-left: 45px;
    margin-right: 45px;
    &:hover {
        color: #674172;
    }
`

export {Container, HeaderContainer, TextContainer, ImgHeader, ContainerInput, EnterButton, EnterText, ContainerNameInput};