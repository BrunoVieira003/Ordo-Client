import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface props{
    children: ReactNode
}

interface AuthContextData {
    signed: boolean;
    user: any,
    login(email: string, password: string): Promise<void>;
    logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }:props) => {
    const [user, setUser] = useState<object | null>(null);

    async function login(email: string, password: string){
        const response = await api.post('/auth/login', {
            email,
            password
        })

        setUser(response.data.user)
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`

        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', response.data.token);
    }

    function logout(){
        setUser(null)
        localStorage.removeItem('@App:user')
        localStorage.removeItem('@App:token')
    }

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
        }, []);
    

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);
   
    return context;
}