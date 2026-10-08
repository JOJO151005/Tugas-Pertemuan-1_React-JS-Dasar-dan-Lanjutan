import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Pastikan CSS aslimu tetap dipanggil

// Import komponen
import Home from './Home';
import Team from './Team';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      {/* STYLING NAVIGASI (Sesuai instruksi untuk Nilai Tambahan) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4 px-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-success fs-4" to="/">
            Fruity Music
          </NavLink>
          
          <div className="navbar-nav ms-auto gap-4">
            {/* NavLink otomatis memberikan style khusus jika halaman sedang aktif */}
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
          </div>
        </div>
      </nav>

      {/* KATEGORI ROUTING DECLARATIVE */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;