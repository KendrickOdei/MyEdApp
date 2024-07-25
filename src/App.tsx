
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layouts/layouts';
import NavBar from '../src/Components/NavBar';
import Hero from '../src/Components/hero'; // Adjusted filename assuming correct case
import Footer from './Components/footer'; // Adjusted filename assuming correct case
import Services from './pages/Services'; // Adjusted filename assuming correct case
import Contact from './pages/Contact'; // Adjusted filename assuming correct case
import Jhs from './pages/jhs';
import Preschool from './pages/preschool';
import DirectorsMesssage from './pages/DirectorsMesssage';


import './App.css';
import './Components/header.css';
import './index.css';


function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/DirectorsMessage" element={<DirectorsMesssage />}/>
        <Route path="/preschool" element={<Preschool />} />
        <Route path="/jhs" element={<Jhs />} />
        <Route path="/Services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
