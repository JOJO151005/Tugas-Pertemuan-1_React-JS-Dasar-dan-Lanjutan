import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Team from './Team';
import Contact from './Contact';

function App() {
  // Sistem navigasi sederhana berbasis URL untuk memudahkan screenshot tugas
  const path = window.location.pathname;

  return (
    <div>
      {/* Navigasi simpel untuk berpindah halaman */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Fruity Music</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/team">Team</a>
            <a className="nav-link" href="/contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Menampilkan komponen sesuai URL */}
      {path === '/' && <Home />}
      {path === '/team' && <Team />}
      {path === '/contact' && <Contact />}
    </div>
  );
}

export default App;