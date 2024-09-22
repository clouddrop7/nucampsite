import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CampsitesDirectoryPage  from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import './App.css';
import { fetchCampsites } from './features/campsites/campsitesSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  },[dispatch]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
        <Route path='about' element={<AboutPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
