import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import { AuthProvider } from './contexts/auth'

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
