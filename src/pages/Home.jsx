import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}
