import styled from "styled-components";

const Button = styled.button`
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    color: #fff;
    background-color: var(--primaryColor);
    &:hover{
        color: var(--primaryColor);
        background-color: transparent;
        border-color: var(--primaryColor);
    }
`

const SubmitButton = styled.input.attrs(_ => ({
    type: "submit",
  }))`
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: bolder;
    font-family: inherit;
    cursor: pointer;
    width: 100%;
    transition: border-color 0.25s;
    color: #fff;
    background-color: var(--primaryColor);
    &:hover{
        color: var(--primaryColor);
        background-color: transparent;
        border-color: var(--primaryColor);
    }
`

export {Button, SubmitButton}