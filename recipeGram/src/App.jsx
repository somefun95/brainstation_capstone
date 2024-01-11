import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {useState} from "react";
import './App.css';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import HomePage from '../src/pages/HomePage/HomePage';
// import UserPage from '../src/pages/UserPage/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          {/* <Route path="user/:id" element={<UserPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
