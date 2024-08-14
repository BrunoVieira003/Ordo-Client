import styled from "styled-components"

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2vh 0;
    padding: 30px;
    width: 30%;
    margin: 0 auto;
    border-radius: 5px;
`
const Input = styled.input`
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px;
    width: calc(100% - 20px);
    color: var(--inputTextColor);
    background-color: var(--inputBgColor);
`

const TextInput = styled(Input).attrs(_ => ({ type: "text" }))``
const PasswordInput = styled(Input).attrs(_ => ({ type: "password" }))``
const EmailInput = styled(Input).attrs(_ => ({ type: "email" }))``
const DateInput = styled(Input).attrs(_ => ({ type: "date" }))``

const Label = styled.label`
    color: var(--labelColor);
`

export default {
    Container,
    Label,
    TextInput,
    PasswordInput,
    EmailInput,
    DateInput
}