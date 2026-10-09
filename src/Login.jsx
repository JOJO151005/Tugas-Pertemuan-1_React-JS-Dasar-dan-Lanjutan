import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Di sini nantinya logika untuk mengecek email & password ke database
    alert(`Berhasil! Anda mencoba login dengan email: ${formData.email}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h3 className="text-center fw-bold mb-4">Masuk Akun</h3>
            <form onSubmit={handleLogin}>
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
                  placeholder="******"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-pill fw-bold mb-3">
                Masuk
              </button>
            </form>
            <p className="text-center text-muted mt-3 mb-0">
              Belum punya akun? <Link to="/register" className="text-success fw-bold text-decoration-none">Daftar di sini</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;