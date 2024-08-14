import { FormEvent, useState } from "react";
import styled from "styled-components"
import { useAuth } from "../contexts/auth";
import { SubmitButton } from "../components/Button";
import Form from "../components/Form"
import { useNavigate } from "react-router-dom";

const {EmailInput, PasswordInput} = Form

const Title = styled.h1`
    color: var(--titleColor);
`

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e: FormEvent){
        console.log(e)
        e.preventDefault()

        try{
            await login(email, password)
            navigate("/")
        }catch(error){
            console.log('Something went wrong with login')
        }
    }

    return (
        <>
            <Form.Container onSubmit={handleSubmit}>
                <Title>Login</Title>
                <Form.Label htmlFor="email">Email</Form.Label>
                <EmailInput
                 value={email}
                 required
                 onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Label htmlFor="password">Password</Form.Label>
                <PasswordInput
                 value={password}
                 required
                 onChange={(e) => setPassword(e.target.value)}
                />

                <SubmitButton value="Login"/>
            </Form.Container>
        </>
    )
}