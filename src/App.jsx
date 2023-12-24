import { Card } from "./components/Card"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import CharactersPage from "./pages/charactersPage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<CharactersPage />} />
      </Routes>
    </>
  )
}

export default App
