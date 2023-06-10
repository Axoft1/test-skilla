import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideMenu from './components/SideMenu/SideMenu'
import { Home } from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideMenu />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
