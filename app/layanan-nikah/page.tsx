// app/layanan-nikah/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LayananNikah() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const layanan = [
    { title: 'Pendaftaran Kehendak Nikah', href: '/layanan-nikah/pendaftaran-kehendak-nikah' },
    { title: 'Rekomendasi / Pindah Nikah', href: '/layanan-nikah/rekomendasi-pindah-nikah' },
    { title: 'Isbat Nikah', href: '/layanan-nikah/isbat-nikah' },
    { title: 'Legalisasi Buku Nikah', href: '/layanan-nikah/legalisasi-buku-nikah' },
    { title: 'Permohonan Taukil Wali bil Kitabah', href: '/layanan-nikah/permohonan-taukil-wali' },
    { title: 'Duplikat Buku Nikah (Rusak/Hilang)', href: '/layanan-nikah/duplikat-buku-nikah' },
    { title: 'Perubahan Data pada Buku Nikah', href: '/layanan-nikah/perubahan-data-buku-nikah' },
    { title: 'Pencatatan Perjanjian Perkawinan', href: '/layanan-nikah/pencatatan-perjanjian-perkawinan' },
    { title: 'Pendaftaran Bukti Nikah di Luar Negeri', href: '/layanan-nikah/pendaftaran-bukti-nikah-luar-negeri' },
  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9fafb',
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ddd',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img
              src="/logo.png"
              alt="Logo Kemenag"
              width={60}
              height={60}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              KUA Rantepao
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              Kab. Toraja Utara
            </div>
          </div>
        </Link>
      </div>

      {/* Navbar Sederhana */}
      <nav style={{
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '1rem',
        marginBottom: '2rem'
      }}>
        <Link href="/" style={{
          color: '#4b5563',
          textDecoration: 'none'
        }}>
          ← Kembali ke Beranda
        </Link>
      </nav>

      {/* Judul */}
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        Layanan Nikah
      </h1>

      {/* Daftar Layanan */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '1.5rem'
      }}>
        {layanan.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            style={{
              backgroundColor: '#026d19',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              border: '1px solid #e5e7eb'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        marginTop: '2rem',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        © 2025 KUA Rantepao — Kabupaten Toraja Utara
      </footer>
    </div>
  );
}