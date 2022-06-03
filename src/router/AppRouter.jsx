import { Routes, Route, Link } from 'react-router-dom'

// components
import { MainPage } from '../pages/Main'
import { About } from '../pages/About'
import { Users } from '../components/Users'
import { UserPage } from '../pages/User'
import { HelloWorld } from '../pages/HelloWorld'

export const AppRouter = () => (
    <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/about' element={<About />} />

        <Route path='/users' element={<Users />} />

        <Route path='/users/:id' element={<UserPage />} />

        <Route path='/hello' element={<HelloWorld />} />
    </Routes>
)