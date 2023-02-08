import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Provider from './pages/provider/Provider';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/provider/:id" element={ <Provider/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
