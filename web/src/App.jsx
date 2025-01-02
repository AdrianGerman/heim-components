import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Cards from "./components/pages/Cards"
import Images from "./components/pages/Images"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
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
