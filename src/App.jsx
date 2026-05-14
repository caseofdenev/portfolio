import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DeepBio from './pages/DeepBio.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deepbio" element={<DeepBio />} />
      </Routes>
    </HashRouter>
  )
}
