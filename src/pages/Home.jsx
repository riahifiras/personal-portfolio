import Header from '../containers/Header/Header'
import Front from '../containers/Front/Front'
import About from '../containers/About/About'
import Interests from '../containers/Interests/Interests'
import Projects from '../containers/Projects/Projects'
import Footer from '../containers/Footer/Footer'

function Home() {
  return(
    <>
        <Header/>
        <Front/>
        <About/>
        <hr />
        <Interests/>
        <hr />
        <Projects/>
        <Footer/>
    </>
  )
}

export default Home
