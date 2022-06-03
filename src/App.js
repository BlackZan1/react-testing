import { Link } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './components/Navbar'

// styles
import './App.css'

export default () => {
  return (
    <div>
      <Navbar />
      
      <AppRouter />
    </div>
  )
}