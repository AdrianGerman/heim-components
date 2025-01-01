import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Home />
        </main>
      </div>
    </Router>
  )
}

export default App
