import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets'
import{Toaster} from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'
import { ChatProvider } from '../context/ChatContext'

const App = () => {
  const{ authUser } = useContext(AuthContext)
  return (
    <div className="min-h-screen w-full bg-[url('/bgImage.svg')]
    bg-cover bg-no-repeat bg-center">
      <Toaster/>
      <Routes>
        <Route path='/'element={authUser ? <HomePage/>: <Navigate to= "/login"/>}/>
        <Route path='/login'element={!authUser ? <Login/>:<Navigate to="/"/>}/>
        <Route path='/Profile'element={authUser ?<ProfilePage/>:<Navigate to= "/login"/>}/>
      </Routes>
    </div>
  )
}

export default App
