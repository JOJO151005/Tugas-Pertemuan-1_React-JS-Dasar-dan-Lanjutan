import React from 'react';

function Contact() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Pusat Bantuan Tiket 🍒</h2>
        <p className="text-muted">Gagal checkout tiket Bernadya? Atau butuh info panggung? Hubungi kami!</p>
      </div>

      <div className="row justify-content-center">
        {/* Informasi Kontak */}
        <div className="col-md-4 mb-4">
          <div className="p-4 rounded-4 shadow-sm bg-success text-white h-100 border-0">
            <h4 className="fw-bold mb-4">Posko Buah</h4>
            <p className="mb-3">
              <strong>📍 Basecamp:</strong><br />
              Jl. Margonda Raya, Kota Depok, Jawa Barat
            </p>
            <p className="mb-3">
              <strong>📧 Email:</strong><br />
              tiket@fruityfest.id
            </p>
            <p className="mb-3">
              <strong>📞 WhatsApp Ticket Box:</strong><br />
              +62 879 9231 2154
            </p>
            <hr className="border-light" />
            <p className="small mb-0">
              <strong>Jam Buka Loket Virtual:</strong><br />24 Jam Selama Musim Konser
            </p>
          </div>
        </div>

        {/* Formulir Bantuan */}
        <div className="col-md-7 mb-4">
          <div className="p-4 border-0 rounded-4 shadow-sm bg-light h-100">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Nama Penonton</label>
                <input type="text" className="form-control rounded-pill" placeholder="Masukkan nama sesuai KTP" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email Aktif</label>
                <input type="email" className="form-control rounded-pill" placeholder="Untuk pengiriman e-ticket" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Kategori Kendala</label>
                <select className="form-select rounded-pill">
                  <option>Pilih jenis bantuan...</option>
                  <option>Pembayaran Tiket Gagal</option>
                  <option>Info Jadwal Hindia / Perunggu</option>
                  <option>Refund Tiket</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Detail Pesan</label>
                <textarea className="form-control rounded-4" rows="4" placeholder="Ceritakan kendala Anda secara detail di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-warning rounded-pill w-100 fw-bold shadow-sm">
                Kirim Pesan 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;