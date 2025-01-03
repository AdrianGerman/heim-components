import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Cards from "./components/pages/Cards"
import Images from "./components/pages/Images"

import { Menu } from "./components/icons/Menu"

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  return (
    <Router>
      <div className="flex h-screen">
        {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}

        {!isSidebarVisible && (
          <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50">
            <Menu />
          </button>
        )}

        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
