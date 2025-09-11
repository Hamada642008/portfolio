
import './App.css'


import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
