import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ nama: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Pendaftaran berhasil untuk: ${formData.nama} (${formData.email})`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h3 className="text-center fw-bold mb-4">Daftar Akun Baru</h3>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label text-muted">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="nama"
                  className="form-control rounded-pill px-3" 
                  placeholder="Masukkan nama Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Alamat Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control rounded-pill px-3" 
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="form-label text-muted">Kata Sandi</label>
                <input 
                  type="password" 
                  name="password"
                  className="form-control rounded-pill px-3" 
                  placeholder="Buat kata sandi yang kuat"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 rounded-pill fw-bold mb-3">
                Daftar Sekarang
              </button>
            </form>
            <p className="text-center text-muted mt-3 mb-0">
              Sudah punya akun? <Link to="/login" className="text-success fw-bold text-decoration-none">Masuk</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;