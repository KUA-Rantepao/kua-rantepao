// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// 🔹 Komponen Jadwal Shalat
function WidgetJadwalShalat() {
  const [waktu, setWaktu] = useState({ masehi: '', jam: '' });
  const [jadwal, setJadwal] = useState(null);
  const [loadingJadwal, setLoadingJadwal] = useState(true);
  const [errorJadwal, setErrorJadwal] = useState(false);

  useEffect(() => {
    const updateWaktu = () => {
      const now = new Date();
      const masehi = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const jam = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      setWaktu({ masehi, jam });
    };
    updateWaktu();
    const interval = setInterval(updateWaktu, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadJadwal = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const response = await fetch(`/jadwal-shalat/jadwal-shalat-${month}-${year}.json`);
        if (!response.ok) throw new Error('File tidak ditemukan');
        const data = await response.json();
        const todayStr = `${year}-${month}-${String(today.getDate()).padStart(2, '0')}`;
        const item = data.find((d: any) => d.tanggal === todayStr); // ✅ Perbaikan: tambahkan :any
        setJadwal(item);
        setLoadingJadwal(false);
      } catch (err) {
        console.error('Error load jadwal:', err);
        setErrorJadwal(true);
        setLoadingJadwal(false);
      }
    };
    loadJadwal();
  }, []);

  return (
    <section
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem',
        }}
      >
        🕰️ Jadwal Shalat Kab. Toraja Utara
      </h2>

      <div
        style={{
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#16a34a',
          marginBottom: '1rem',
          minHeight: '3rem',
        }}
      >
        <div>{waktu.masehi}</div>
        <div style={{ marginTop: '0.5rem' }}>{waktu.jam}</div>
      </div>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '300px',
          margin: '0 auto',
          fontSize: '1rem',
          color: '#1f2937',
          minHeight: '12rem',
        }}
      >
        {loadingJadwal ? (
          'Memuat jadwal shalat...'
        ) : errorJadwal ? (
          'Gagal memuat jadwal shalat.'
        ) : jadwal ? (
          ['imsak', 'subuh', 'duha', 'dzuhur', 'ashar', 'maghrib', 'isya'].map(
            (w) =>
              jadwal[w] && (
                <div
                  key={w}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '4px 0',
                  }}
                >
                  <span>{w.toUpperCase()}</span>
                  <strong>{jadwal[w]}</strong>
                </div>
              )
          )
        ) : (
          'Jadwal belum tersedia.'
        )}
      </div>

      <div
        style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          color: '#6b7280',
        }}
      >
        Sumber:{' '}
        <a
          href="https://bimasislam.kemenag.go.id/web/jadwalshalat"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#16a34a', textDecoration: 'underline' }}
        >
          bimasislam.kemenag.go.id
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem('popupClosed');
    if (!popupClosed) {
      const timer = setTimeout(() => setShowPopup(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // 🔥 Animasi teks berjalan: satu teks, reset instan saat habis
  useEffect(() => {
    const el = textRef.current;
    if (!el || !el.parentElement) return;

    let position = el.parentElement.offsetWidth; // mulai dari kanan luar
    const textWidth = el.scrollWidth;
    const containerWidth = el.parentElement.offsetWidth;

    const move = () => {
      position -= 1; // kecepatan: 1px per tick
      el.style.transform = `translateX(${position}px)`;

      // Saat seluruh teks sudah keluar layar (ujung kiri < 0)
      if (position + textWidth <= 0) {
        position = containerWidth; // reset ke kanan
      }
    };

    const interval = setInterval(move, 30); // ~33 FPS
    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('popupClosed', 'true');
  };

  const menuItems = [
    { name: 'Beranda', href: '/', active: true },
    { name: 'Profil Organisasi', href: '/profil-organisasi' },
    { name: 'Visi & Misi', href: '/visi-misi' },
    { name: 'Struktur Organisasi', href: '/struktur-organisasi' },
    { name: 'Layanan Nikah', href: '/layanan-nikah' },
    { name: 'Konsultasi & Bimbingan', href: 'https://konsultasi-agama-islam.vercel.app/' },
    { name: 'Panduan SIMKAH', href: '#' },
  ];

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        paddingTop: '6rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Logo */}
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
          zIndex: 20,
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo Kemenag"
          width={60}
          height={60}
          style={{
            borderRadius: '8px',
            border: '1px solid #ddd',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        />
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937' }}>
            KUA Rantepao
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Kab. Toraja Utara
          </div>
        </div>
      </Link>

      {/* 🟢 TEKS BERJALAN - Satu teks, looping instan */}
      <div
        style={{
          backgroundColor: '#166534',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '6px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',
          zIndex: 5,
          padding: '0.5rem 0',
          marginTop: '1rem',
        }}
      >
        <div
          ref={textRef}
          style={{
            display: 'inline-block',
          }}
        >
          Akad Nikah di Kantor KUA Gratis/tidak dipungut biaya apapun. Akad Nikah di Luar Kantor KUA dikenakan biaya Rp. 600.000.
        </div>
      </div>

      {/* Navbar */}
      <nav
        style={{
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          marginTop: '2rem',
        }}
      >
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            ☰
          </button>
        )}

        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
          }}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.href.startsWith('http') ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: item.active ? 'bold' : 'normal',
                    color: item.active ? '#1f2937' : '#4b5563',
                    borderBottom: item.active ? '2px solid #16a34a' : 'none',
                    textDecoration: 'none',
                    display: 'inline-block',
                    padding: '0.25rem 0',
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    fontWeight: item.active ? 'bold' : 'normal',
                    color: item.active ? '#1f2937' : '#4b5563',
                    borderBottom: item.active ? '2px solid #16a34a' : 'none',
                    textDecoration: 'none',
                    display: 'inline-block',
                    padding: '0.25rem 0',
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Foto Kepala KUA */}
      <div
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
          aspectRatio: '3/4',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #ddd',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          margin: '0 auto',
        }}
      >
        <Image
          src="/kepala-kua.jpg"
          alt="Kepala KUA"
          width={300}
          height={400}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Nama Kepala KUA */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#1f2937',
        }}
      >
        Ahmad Mu'abid, Lc.
      </div>
      <div
        style={{
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '1.5rem',
        }}
      >
        Kepala KUA Rantepao
      </div>

      {/* Alamat & Peta */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          Jl. Kostan, No. 16, Kel. Malango, Kec. Rantepao, Kab. Toraja Utara
        </p>
        <div
          style={{
            width: '100%',
            height: '250px',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.372838532148!2d119.8989188!3d-2.9677346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d93e9e17c202c2b%3A0xfa6826e932114410!2sKUA%20Kecamatan%20Rantepao!5e0!3m2!1sid!2id!4v1720000000000!5m2!1sid!2id"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi KUA Rantepao"
          ></iframe>
        </div>
      </div>

      {/* Maklumat Pelayanan */}
      <section style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}
        >
          <Image
            src="/maklumat.jpg"
            alt="Maklumat Pelayanan KUA Rantepao"
            width={800}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </section>

      <WidgetJadwalShalat />
      
      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          backgroundColor: '#026d19',
          color: '#ffffff',
          padding: '2rem 1rem',
          borderRadius: '8px',
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '1.1rem',
            }}
          >
            IKUTI KAMI DI MEDIA SOSIAL
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
            }}
          >
            <a
              href="https://www.facebook.com/kuakecrantepao.rantepao/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span>📘</span> Facebook
            </a>
            <a
              href="https://www.instagram.com/kua_rantepao/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span>📸</span> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@kua.rantepao"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span>🎵</span> TikTok
            </a>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '1.1rem',
            }}
          >
            KUA di Toraja Utara
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            <a
              href="https://linktr.ee/kuasesean01"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              KUA Sesean
            </a>
            <a
              href="https://linktr.ee/kamilahsanggalangi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              KUA Sanggalangi
            </a>
            <a
              href="https://linktr.ee/kuarindingallo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              KUA Rindingallo
            </a>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '1.1rem',
            }}
          >
            Link Terkait
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            <a
              href="https://kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              Kementerian Agama RI
            </a>
            <a
              href="https://kemenag.go.id/tag/kanwil-kemenag-sulsel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              KEMENAG KANWIL Sulawesi Selatan
            </a>
            <a
              href="https://simkah4.kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              SIMKAH
            </a>
            <a
              href="https://siwak.kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              SIWAK
            </a>
            <a
              href="https://simas.kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              SIMAS
            </a>
            <a
              href="https://pkubpusat.kemenag.go.id/ews/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              SI-RUKUN
            </a>
          </div>
        </div>

        <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
          © 2025 KUA Rantepao — Kabupaten Toraja Utara
        </div>
      </footer>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              maxWidth: '95vw',
              maxHeight: '90vh',
              width: 'fit-content',
            }}
          >
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '1rem',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              ✕
            </button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/popupkua.jpg"
                alt="Selamat Datang di KUA Rantepao"
                width={800}
                height={1000}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  height: 'auto',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
