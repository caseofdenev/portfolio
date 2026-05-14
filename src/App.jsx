import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 추후 케이스 스터디 페이지 추가 */}
        {/* <Route path="/connecteve" element={<Connecteve />} /> */}
        {/* <Route path="/deepbio" element={<DeepBio />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>
  )
}
