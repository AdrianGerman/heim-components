import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Cards from "./components/pages/Cards"
import Images from "./components/pages/Images"
import Loaders from "./components/pages/Loaders"
import Buttons from "./components/pages/Buttons"

import { Menu } from "./components/icons/Menu"

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true)
  const [isSidebarFullyHidden, setSidebarFullyHidden] = useState(false)

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      setSidebarVisible(false)
      setTimeout(() => {
        setSidebarFullyHidden(true)
      }, 500)
    } else {
      setSidebarFullyHidden(false)
      setSidebarVisible(true)
    }
  }

  return (
    <Router>
      <div className="flex h-screen">
        <div
          className={`bg-[#171717] text-white shadow-lg h-full transition-all duration-500 ${
            isSidebarVisible ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>

        {isSidebarFullyHidden && (
          <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50">
            <Menu />
          </button>
        )}

        <main className="flex-1 overflow-y-auto p-6 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/images" element={<Images />} />
            <Route path="/loaders" element={<Loaders />} />
            <Route path="/buttons" element={<Buttons />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
