import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import Tasks from "./Tasks"
import { Button } from "../components/Button"

export default function HomePage(){
    const { signed } = useAuth()
    const navigate = useNavigate()
    return (
        <>
            {signed ? 
            <Tasks/>
            :
            <>
            <h1>Welcome to Ordo</h1>
            <Button onClick={() => navigate('/login')}>Login</Button>
            </>
            }
        </>
    )
}