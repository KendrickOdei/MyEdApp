import { useState,useEffect, } from 'react';
import {  Routes, Route, Navigate, useLocation, } from 'react-router-dom';
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
import CustomLoadingBar from './Components/CustomLoadingBar';





const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading when location changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this duration to match your loading needs

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <CustomLoadingBar duration={1000} />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/DirectorsMessage" element={<DirectorsMesssage />} />
        <Route path="/preschool" element={<Preschool />} />
        <Route path="/jhs" element={<Jhs />} />
        <Route path="/Services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
