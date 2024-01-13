import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkModeProvider from './context/DarkModeContext';
import Home from './pages/Home'
import Slider from './pages/Slider';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/slider/:title" element={<Slider />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App
