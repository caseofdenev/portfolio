// src/pages/Home.jsx — FloorDirectory 버전
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FloorDirectory from '../components/FloorDirectory.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FloorDirectory />
        <About />
      </main>
      <Footer />
    </>
  )
}
