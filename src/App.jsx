import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Categories from './components/Categories'
import Exploreby from './components/Exploreby'
import { Route, Routes } from 'react-router-dom'
import Restaurants from './components/Restaurants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/explore" element={<Exploreby />} />
        <Route path="/restaurant" element={<Restaurants />} />
    </Routes>
    </>
  )
}

export default App
