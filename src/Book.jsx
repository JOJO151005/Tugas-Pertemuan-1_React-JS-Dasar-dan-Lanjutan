import React, { useState } from 'react';
import booksData from './Utils/books';

function Book() {
  // HOOKS: Memasukkan data awal ke state agar bisa ditambah secara dinamis
  const [bandList, setBandList] = useState(booksData);
  
  // HOOKS: Menampung isian dari form tambah data
  const [formData, setFormData] = useState({
    title: '', author: '', year: '', description: '', image: ''
  });

  // Fungsi untuk menangani ketikan user di form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi saat tombol "Tambah Penampil" diklik
  const handleAddData = (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    
    // Membuat objek data baru
    const dataBaru = {
      id: bandList.length > 0 ? bandList[bandList.length - 1].id + 1 : 1, // Auto-increment ID
      title: formData.title,
      author: formData.author,
      year: formData.year,
      description: formData.description,
      // Jika gambar kosong, gunakan gambar placeholder
      image: formData.image || "https://via.placeholder.com/400x300/CCCCCC/000000?text=Artis+Baru" 
    };

    // Memasukkan data baru ke dalam list yang sudah ada
    setBandList([...bandList, dataBaru]);
    
    // Mengosongkan form kembali setelah berhasil ditambah
    setFormData({ title: '', author: '', year: '', description: '', image: '' });
    alert('Yeay! Penampil baru berhasil ditambahkan ke lineup!');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-success mb-2">Manajemen Lineup</h1>

      {/* FORM TAMBAH DATA (NILAI TAMBAH HOOKS) */}
      <div className="card shadow-sm border-0 rounded-4 mb-5 p-4 bg-light">
        <h4 className="fw-bold mb-4">➕ Tambah Penampil Baru</h4>
        <form onSubmit={handleAddData}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input type="text" name="title" className="form-control rounded-pill" placeholder="Nama Band/Artis" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="author" className="form-control rounded-pill" placeholder="Genre / Tema Buah (Misal: Pop 🍎 Apel)" value={formData.author} onChange={handleChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="year" className="form-control rounded-pill" placeholder="Hari Tampil (Misal: Hari 4)" value={formData.year} onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-8 mb-3">
              <input type="text" name="description" className="form-control rounded-pill" placeholder="Deskripsi Singkat" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <input type="text" name="image" className="form-control rounded-pill" placeholder="Link URL Gambar (Opsional)" value={formData.image} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-success rounded-pill fw-bold px-5">Simpan Data</button>
        </form>
      </div>

      {/* MENAMPILKAN DATA MENGGUNAKAN MAP */}
      <div className="row">
        {bandList.map((band) => (
          <div key={band.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img src={band.image} className="card-img-top" alt={band.title} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column text-center">
                <h4 className="card-title fw-bold text-dark">{band.title}</h4>
                <span className="badge bg-light text-success border border-success rounded-pill px-3 py-2 mx-auto mb-3">
                  {band.author} | {band.year}
                </span>
                <p className="card-text text-secondary">{band.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;