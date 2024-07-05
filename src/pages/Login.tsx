import { FormEvent, useState } from "react";
import styled from "styled-components"
import { useAuth } from "../contexts/auth";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2vh 0;
    background-color: #1b1b1b;
    padding: 30px;
    width: 30%;
    margin: 0 auto;
    border-radius: 5px;
`
const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 10px;
    width: calc(100% - 20px);
    color: #aaa;

    &:focus{
        color: white;
    }
`
const SubmitButton = styled.input`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #7d3ee4;
    cursor: pointer;
    width: 100%;
    transition: border-color 0.25s;

    &:hover{
        background-color: #1a1a1a;
        border-color: #7d3ee4;
    }
`

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth()

    async function handleSubmit(e: FormEvent){
        e.preventDefault()

        try{
            await login(email, password)
        }catch(error){
            console.log('Something went wrong with login')
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <Input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <Input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />

                <SubmitButton type="submit"/>
            </Form>
        </>
    )
}