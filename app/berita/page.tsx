// app/berita/page.tsx
// TANPA 'use client' → jalan di server

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Fungsi baca semua berita
function getAllBerita() {
  const beritaDir = path.join(process.cwd(), 'content', 'berita');
  if (!fs.existsSync(beritaDir)) return [];

  const files = fs.readdirSync(beritaDir).filter(f => f.endsWith('.md'));
  const beritaList = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(beritaDir, file), 'utf8');
    const lines = content.split('\n').map(l => l.trim());

    // Ambil judul (baris pertama, hapus # jika ada)
    let judul = lines[0] || 'Tanpa Judul';
    if (judul.startsWith('# ')) judul = judul.slice(2);

    // Ambil tanggal (baris kedua)
    const tanggal = lines[1] || '';

    // Ambil isi (gabung baris ke-3 dst)
    const isi = lines.slice(2).join(' ');

    // Ekstrak tanggal ISO dari nama file: ...-27-09-2025.md
    const dateMatch = slug.match(/(\d{2})-(\d{2})-(\d{4})$/);
    const tanggalISO = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : '';

    // Path gambar: /berita/DD-MM-YYYY.jpg
    const tanggalGambar = dateMatch ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}` : '';
    const gambar = tanggalGambar ? `/berita/${tanggalGambar}.jpg` : '';

    beritaList.push({ slug, judul, tanggal, isi, gambar, tanggalISO });
  }

  // Urutkan terbaru dulu
  return beritaList
    .filter(b => b.tanggalISO)
    .sort((a, b) => b.tanggalISO.localeCompare(a.tanggalISO));
}

export default function BeritaPage() {
  const beritaList = getAllBerita();

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Logo + Nama KUA */}
      <Link
        href="/"
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ddd',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="/logo.png"
            alt="Logo Kemenag"
            width={60}
            height={60}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937' }}>
            KUA Rantepao
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Kab. Toraja Utara
          </div>
        </div>
      </Link>

      {/* Navbar */}
      <nav
        style={{
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          marginTop: '5rem',
        }}
      >
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none' }}>
          ← Kembali ke Beranda
        </Link>
      </nav>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        📰 Daftar Berita
      </h1>

      {beritaList.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>Belum ada berita.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {beritaList.map((berita) => (
            <Link
              key={berita.slug}
              href={`/berita/${berita.slug}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                padding: '1.5rem',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {berita.gambar && (
                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              )}
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem' }}>
                {berita.judul}
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>{berita.tanggal}</p>
              <p style={{ color: '#4b5563', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {berita.isi}
              </p>
            </Link>
          ))}
        </div>
      )}

      <footer
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          color: '#6b7280',
          fontSize: '0.875rem',
        }}
      >
        © 2025 KUA Rantepao — Kabupaten Toraja Utara
      </footer>
    </div>
  );
}
