import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #7d3ee4;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover{
        background-color: #1a1a1a;
        border-color: #7d3ee4;
    }
`

export default function HomePage(){
    const navigate = useNavigate()
    return (
        <>
            <h1>Welcome to Ordo</h1>
            <Button onClick={() => navigate('/login')}>Login</Button>
        </>
    )
}