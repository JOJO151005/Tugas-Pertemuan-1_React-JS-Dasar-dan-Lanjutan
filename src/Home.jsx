import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 text-center bg-light rounded-4 shadow-sm border-0" style={{ backgroundImage: "linear-gradient(to right bottom, #fdfbfb, #ebedee)" }}>
        <span className="badge bg-warning text-dark mb-3 fs-6 rounded-pill px-4 py-2">
          📅 28 Oktober 2026 | 📍 Margonda, Depok
        </span>
        <h1 className="display-4 fw-bold text-success mb-3">Fruity Fest 2026 🍇</h1>
        <p className="lead text-muted mb-5 px-md-5">
          Festival musik indie paling segar tahun ini! Nikmati alunan nada di tengah kebun buah tropis bersama Hindia, Bernadya, Perunggu, dan Dongker.
        </p>
        
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/contact" className="btn btn-success btn-lg rounded-pill fw-bold shadow-sm px-4">
            🎟️ Beli Tiket Sekarang
          </Link>
          <Link to="/team" className="btn btn-outline-success btn-lg rounded-pill fw-bold px-4">
            👨‍🌾 Kenalan Sama Panitia
          </Link>
        </div>
      </div>

      {/* Section Tambahan Biar Gak Sepi */}
      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-0">
            <div className="display-4 mb-3">🎸</div>
            <h5 className="fw-bold">Lineup Segar</h5>
            <p className="text-muted">Artis-artis indie pilihan yang siap memanen emosi penonton.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-0">
            <div className="display-4 mb-3">🏕️</div>
            <h5 className="fw-bold">Camping Ground</h5>
            <p className="text-muted">Area santai beralaskan rumput asli, cocok buat piknik sambil nyanyi.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-0">
            <div className="display-4 mb-3">🍉</div>
            <h5 className="fw-bold">Bazaar Buah</h5>
            <p className="text-muted">Bukan cuma musik, ada pasar buah potong gratis buat pemegang tiket VIP.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;