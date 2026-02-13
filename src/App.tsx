import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg'
import NavBar from './components/Navbar';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Entries from './pages/Entries';
import Projects from './pages/Projects';
import EntryDetail from './pages/EntryDetail';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/entries" element={<Entries />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/entries/:entryName" element={<EntryDetail />} />
//       </Routes>
//     </BrowserRouter>
//     <Footer />
//     </div>
//   );
// }

// export default App
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'entries',
        element: <Entries />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'entries/:entryName',
        element: <EntryDetail />,
        getStaticPaths: async () => {
          // 👇 match this to your markdown files
          return [
            'entries/initWebsite',
            'entries/DomainAndSEO',
          ]
        },
      },
    ],
  },
]

export default routes