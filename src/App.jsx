import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Entries from './pages/Entries';
import EntryDetail from './pages/EntryDetail';

function App() {
  return (
    <BrowserRouter basename='MirzaPortfolio'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/entries/:entryName" element={<EntryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
