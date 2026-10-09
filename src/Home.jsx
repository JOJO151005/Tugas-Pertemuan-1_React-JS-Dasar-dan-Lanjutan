import React, { useState } from 'react'; // Tambahkan useState di sini
import { Link } from 'react-router-dom';
import booksData from "./Utils/books";

function Home() {
  // HOOKS: State untuk menyimpan jumlah tiket yang dipesan
  const [jumlahTiket, setJumlahTiket] = useState(0);

  // Fungsi saat tombol pesan tiket diklik
  const handlePesanTiket = (namaBand) => {
    setJumlahTiket(jumlahTiket + 1);
    alert(`Yeay! 1 Tiket untuk penampilan ${namaBand} berhasil ditambahkan ke keranjangmu. 🍇`);
  };

  return (
    <div className="container mt-5">
      
      {/* ========================================== */}
      {/* KODE LAMA KAMU (FRUITY FEST) TETAP AMAN      */}
      {/* ========================================== */}
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

      {/* ========================================== */}
      {/* LINEUP BAND FRUITY FEST DENGAN FITUR TIKET */}
      {/* ========================================== */}
      <div className="mt-5 pt-5 border-top">
        <h2 className="text-center mb-3 fw-bold text-success">🎤 Lineup Penampil Segar</h2>
        
        {/* Indikator Keranjang Tiket (Nilai Tambah Tugas Hooks) */}
        <div className="text-center mb-5">
          <button className="btn btn-warning rounded-pill fw-bold px-4 shadow-sm">
            🛒 Keranjang Tiketmu: <span className="badge bg-danger ms-2 fs-6">{jumlahTiket}</span>
          </button>
        </div>
        
        <div className="row">
          {booksData.map((band) => (
            <div key={band.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <img 
                  src={band.image} 
                  className="card-img-top" 
                  alt={band.title} 
                  style={{ height: '220px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column text-center">
                  <h4 className="card-title fw-bold text-dark">{band.title}</h4>
                  <span className="badge bg-light text-success border border-success rounded-pill px-3 py-2 mx-auto mb-3">
                    {band.author} | {band.year}
                  </span>
                  {/* mb-4 memberikan jarak agar teks tidak menempel dengan tombol di bawahnya */}
                  <p className="card-text text-secondary mb-4">{band.description}</p>
                  
                  {/* Tombol Pesan Tiket (mt-auto akan mendorong tombol selalu ke posisi paling bawah kartu) */}
                  <button 
                    onClick={() => handlePesanTiket(band.title)} 
                    className="btn btn-outline-success w-100 rounded-pill fw-bold mt-auto"
                  >
                    🎟️ Pesan Tiket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;