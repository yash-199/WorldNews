import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Latest from './pages/Latest'
import EntertainmentNew from './pages/EntertainmentNew'
import PoliticalNew from './pages/PoliticalNew'
import SportNew from './pages/SportNew'
import HealthNew from './pages/HealthNew'
import TechnologyNews from './pages/TechnologyNews'
import TravelNews from './pages/TravelNews'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/entertainment-new' element={<EntertainmentNew />} />
        <Route path='/political-news' element={<PoliticalNew />} />
        <Route path='/sport-news' element={<SportNew />} />
        <Route path='/health-news' element={<HealthNew />} />
        <Route path='/technology-news' element={<TechnologyNews />} />
        <Route path='/travel-news' element={<TravelNews />} />
      </Routes>
    </div>
  )
}

export default App