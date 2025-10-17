// app/struktur-organisasi/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StrukturOrganisasi() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
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
          zIndex: 10
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ddd',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          <Image
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
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}
          >
            KUA Rantepao
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}
          >
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
          marginTop: '5rem'
        }}
      >
        <Link
          href="/"
          style={{
            color: '#4b5563',
            textDecoration: 'none'
          }}
        >
          ← Kembali ke Beranda
        </Link>
      </nav>

      {/* Gambar Struktur Organisasi */}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          backgroundColor: '#fff'
        }}
      >
        <Image
          src="/struktur-organisasi/struktur-organisasi.jpg"
          alt="Struktur Organisasi KUA Rantepao"
          width={900}
          height={700}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
          priority
        />
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          color: '#6b7280',
          fontSize: '0.875rem'
        }}
      >
        © 2025 KUA Rantepao — Kabupaten Toraja Utara
      </footer>
    </div>
  );
}
