import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import Home from './Home';
import Team from './Team';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Book from './Book'; // Tambahan import untuk halaman Book (Lineup)

function App() {
  return (
    <BrowserRouter>
      {/* STYLING NAVIGASI */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4 px-3 sticky-top">
        <div className="container">
          
          {/* KIRI: Logo/Brand */}
          <NavLink className="navbar-brand fw-bold text-success fs-4" to="/">
            Fruity Music
          </NavLink>
          
          {/* TENGAH: Menu Utama (menggunakan mx-auto) */}
          <div className="navbar-nav mx-auto gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link text-success fw-bold border-bottom border-success border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => isActive ? "nav-link text-success fw-bold border-bottom border-success border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Team
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link text-success fw-bold border-bottom border-success border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Contact
            </NavLink>
            {/* Tambahan Menu Book / Lineup */}
            <NavLink 
              to="/book" 
              className={({ isActive }) => isActive ? "nav-link text-success fw-bold border-bottom border-success border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Lineup
            </NavLink>
          </div>

          {/* KANAN: Menu Akun */}
          <div className="navbar-nav gap-4">
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "nav-link text-success fw-bold border-bottom border-success border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Login
            </NavLink>
            <NavLink 
              to="/register" 
              className={({ isActive }) => isActive ? "nav-link text-warning fw-bold border-bottom border-warning border-2 px-0" : "nav-link text-secondary fw-semibold px-0"}
            >
              Register
            </NavLink>
          </div>

        </div>
      </nav>

      {/* KATEGORI ROUTING DECLARATIVE */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} /> {/* Tambahan Rute Book */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;