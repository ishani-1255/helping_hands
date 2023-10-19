import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <AboutUs />
      <HowItWorks />
       s<Footer />
    </div>
  );
}

export default App;
