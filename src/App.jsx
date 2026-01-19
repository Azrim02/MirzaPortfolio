import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Entries from './pages/Entries';
import Projects from './pages/Projects';
import EntryDetail from './pages/EntryDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter basename='MirzaPortfolio'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/entries/:entryName" element={<EntryDetail />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App
