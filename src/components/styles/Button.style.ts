import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100px;
  height:50px;
  background-color: ${(props)=>props.backgroundColor};

  &:hover{
    background-color: chartreuse;

    & label{
        color: pink;
    }
  }
`

export const ButtonLabel = styled.label`
  font-size: medium;
  color: brown;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`