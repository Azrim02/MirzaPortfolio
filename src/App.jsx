import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Entries from './pages/Entries';

function App() {
  return (
    <BrowserRouter basename='MirzaPortfolio'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />z
        <Route path="/entries" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
