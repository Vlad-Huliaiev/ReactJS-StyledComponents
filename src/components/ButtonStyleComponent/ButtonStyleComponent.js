import styled from "styled-components";

const ButtonStyleComponent = styled.button`
    color: ${(props) => (props.primary ? "white" : "red")};
    background: ${(props) => (props.primary ? "red" : "white")};;
    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid red;
    border-radius: 3px;
    cursor: pointer;
`

export default ButtonStyleComponent;
