import React from 'react';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Jonathan Hibran Ramadhan",
      role: "Festival Director",
      icon: "🥭",
      description: "Otak di balik konsep konser indie buah-buahan ini. Memastikan tiket online dan sistem web berjalan tanpa kendala."
    },
    {
      id: 2,
      name: "Fadhel Yihua Rafael",
      role: "Artist Management",
      icon: "🍈",
      description: "Penanggung jawab *riders* dan jadwal artis agar Bernadya dan Dongker tampil tepat waktu di panggung virtual."
    },
    {
      id: 3,
      name: "Xavier Ananda Sadex",
      role: "Stage & Visual Designer",
      icon: "🍊",
      description: "Mendesain pencahayaan dan visual panggung dengan tema kebun buah tropis untuk memanjakan mata penonton."
    }
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <span className="badge bg-success mb-2 fs-6 rounded-pill">Tim Inti</span>
        <h2 className="fw-bold">Panitia Fruity Fest 🍇</h2>
        <p className="text-muted">Para "petani nada" yang mewujudkan konser paling meriah tahun ini.</p>
      </div>
      
      <div className="row justify-content-center">
        {teamMembers.map((member) => (
          <div className="col-md-4 col-sm-6 mb-4" key={member.id}>
            <div className="card h-100 shadow-sm text-center border-0 rounded-4">
              <div className="card-body p-4">
                <div className="display-1 mb-3">{member.icon}</div>
                <h5 className="card-title fw-bold">{member.name}</h5>
                <h6 className="card-subtitle mb-3 text-success fw-semibold">{member.role}</h6>
                <p className="card-text text-muted">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;