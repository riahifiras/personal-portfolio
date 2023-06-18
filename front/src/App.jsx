import './App.css'
import Header from './containers/Header/Header'
import Front from './containers/Front/Front'
import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Footer from './containers/Footer/Footer'

function App() {
  return(
    <>
        <Header/>
        <Front/>
        <About/>
        <hr />
        <Projects/>
        <Footer/>
    </>
  )
}

export default App
