// app/profil-organisasi/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProfilOrganisasi() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
      {/* Logo Kemenag + Nama KUA */}
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

      {/* Navbar Sederhana */}
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

      {/* Foto Kantor KUA */}
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}
      >
        <Image
          src="/profil-organisasi/kantor-kua.png"
          alt="Kantor KUA Rantepao"
          width={800}
          height={500}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Konten Profil */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
        >
          Profil KUA Rantepao
        </h1>

        <p
          style={{
            color: '#4b5563',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            textAlign: 'justify'
          }}
        >
          Kantor Urusan Agama (KUA) Kecamatan Rantepao beralamat di Jl. Kostan
          No. 15 A, Kelurahan Malango’, Kecamatan Rantepao, Kabupaten Toraja
          Utara, Provinsi Sulawesi Selatan. KUA Rantepao merupakan unit
          pelaksana teknis Kementerian Agama Kabupaten Toraja Utara yang
          menyelenggarakan pelayanan dan pembinaan kehidupan keagamaan Islam di
          wilayah Kecamatan Rantepao, Tallunglipu, dan Tikala.
        </p>

        <p
          style={{
            color: '#4b5563',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            textAlign: 'justify'
          }}
        >
          Sebagai instansi yang menjadi ujung tombak pelayanan keagamaan, KUA
          Rantepao berkomitmen memberikan layanan yang mudah, murah, aman, dan
          profesional, serta adaptif terhadap kondisi geografis wilayah yang
          berbukit dan beragam karakter masyarakat.
        </p>

        <p
          style={{
            color: '#4b5563',
            lineHeight: 1.7,
            marginBottom: '1rem',
            textAlign: 'justify'
          }}
        >
          Berdasarkan Peraturan Menteri Agama Nomor 24 Tahun 2024, KUA Kecamatan
          Rantepao memiliki tugas dan fungsi yang meliputi:
        </p>

        <ol
          style={{
            paddingLeft: '1.5rem',
            marginBottom: '1.5rem',
            color: '#4b5563',
            lineHeight: 1.7,
            textAlign: 'justify'
          }}
        >
          <li>
            Pelayanan, pengawasan, pencatatan pernikahan, dan pelaporan nikah
            dan rujuk;
          </li>
          <li>Pelayanan bimbingan perkawinan dan keluarga sakinah;</li>
          <li>Pelayanan bimbingan kemasjidan;</li>
          <li>Pelayanan konsultasi syariah;</li>
          <li>Pelayanan bimbingan dan penerangan agama Islam;</li>
          <li>Pelayanan bimbingan zakat dan wakaf;</li>
          <li>Pengelolaan data dan pemanfaatan informasi keagamaan; dan</li>
          <li>Pelaksanaan ketatausahaan dan kerumahtanggaan KUA.</li>
        </ol>

        <p
          style={{
            color: '#4b5563',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            textAlign: 'justify'
          }}
        >
          Dalam pelaksanaannya, KUA Rantepao didukung oleh Kepala KUA,
          penghulu, penyuluh agama Islam, Penyuluh Agama Kristen, dan staf
          pelaksana administrasi yang bekerja dengan semangat pelayanan publik,
          menjunjung tinggi nilai integritas, disiplin, serta dedikasi terhadap
          masyarakat.
        </p>

        <p
          style={{
            color: '#4b5563',
            lineHeight: 1.7,
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          Dengan semangat <strong>“Siap Melayani Sepenuh Hati,”</strong> KUA
          Rantepao hadir sebagai pusat pelayanan keagamaan Islam yang terbuka,
          ramah, dan siap menjadi mitra masyarakat dalam mewujudkan kehidupan
          beragama yang harmonis dan berkeadaban.
        </p>
      </main>

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
