import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      {/* Hero Section: Banner Konser */}
      <div className="row align-items-center mb-5 bg-warning text-dark p-5 rounded-4 shadow">
        <div className="col-lg-7">
          <span className="badge bg-danger mb-3 fs-6 rounded-pill">🍉 Online Concert 2026</span>
          <h1 className="display-4 fw-bold">Fruity Indie Fest</h1>
          <p className="lead mt-3 fw-medium">
            Rasakan sensasi konser indie paling segar tahun ini! Menampilkan Bernadya, Perunggu, Hindia, dan Dongker dalam satu panggung virtual bertema kebun buah tropis. 🍓🍍
          </p>
          <div className="mt-4">
            <button className="btn btn-danger btn-lg me-3 rounded-pill fw-bold shadow-sm">
              🎟️ Beli Tiket Sekarang
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-pill fw-bold">
              Lihat Jadwal
            </button>
          </div>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0 text-center">
         <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe04juAKjKXt8qwfdrkvSmU797HTE1kHX1MSvHoAcYw&s=10" 
          alt="Fruity Fest Vibe" 
          className="img-fluid rounded-circle shadow-lg border border-5 border-white"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
        />
        </div>
      </div>

      {/* Section Lineup & Panggung */}
      <div className="row text-center mt-5 mb-5">
        <h2 className="fw-bold mb-4">Lineup Segar Hari Ini 🍋</h2>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 bg-light">
            <div className="card-body p-4">
              <div className="display-1 mb-3">🍓</div>
              <h3 className="h4 fw-bold">Bernadya</h3>
              <p className="text-muted">Tampil di <strong>Panggung Stroberi</strong> membawakan lagu-lagu galau dengan nuansa manis-asam yang pas di hati.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 bg-light">
            <div className="card-body p-4">
              <div className="display-1 mb-3">🍍</div>
              <h3 className="h4 fw-bold">Hindia & Perunggu</h3>
              <p className="text-muted">Kolaborasi epik di <strong>Panggung Nanas</strong>. Menyuarakan realita kehidupan dengan irama segar.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 bg-light">
            <div className="card-body p-4">
              <div className="display-1 mb-3">🍉</div>
              <h3 className="h4 fw-bold">Dongker</h3>
              <p className="text-muted">Hura-hura punk rock di <strong>Panggung Semangka</strong>. Pecah, berisik, dan dijamin sangat menyegarkan!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;