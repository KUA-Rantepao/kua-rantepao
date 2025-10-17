// app/layanan-nikah/isbat-nikah/page.tsx
'use client';

import Link from 'next/link';

export default function IsbatNikah() {
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

      {/* Navbar */}
      <nav style={{
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '1rem',
        marginBottom: '2rem'
      }}>
        <Link href="/layanan-nikah" style={{
          color: '#4b5563',
          textDecoration: 'none'
        }}>
          ← Kembali ke Layanan Nikah
        </Link>
      </nav>

      {/* Konten */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1.5rem'
        }}>
          Isbat Nikah
        </h1>

        <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Isbat Nikah adalah salah satu cara bagi pasangan suami istri yang telah menikah, tetapi belum tercatat pernikahannya (Nikah belum tercatat). Isbat nikah dilakukan oleh pengadilan agama, dan kemudian apabila isbatnya disahkan oleh pengadilan, maka dapat dicatatkan di KUA untuk mendapatkan buku nikah yang sah.
        </p>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          SYARAT
        </h2>

        <ol style={{
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem',
          color: '#4b5563',
          lineHeight: 1.6
        }}>
          <li>
            Permohonan pencatatan isbat nikah (N3).{" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/oje7daj5iv6krm066skiz/Model-N3.docx?rlkey=sk4ia9l7st4uhjqhd3m87nhsn&st=28nk1ima&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>Fotokopi Putusan/penetapan isbat nikah dari Pengadilan Agama.</li>
          <li>Fotokopi KTP suami dan istri.</li>
          <li>Fotokopi Kartu Keluarga.</li>
          <li>
            Pas foto suami istri (latar belakang biru):<br />
            &nbsp;&nbsp;• 2x3 = 2 lembar<br />
            &nbsp;&nbsp;• 4x6 = 1 lembar
          </li>
        </ol>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          SYARAT TAMBAHAN
        </h2>

        <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: 1.6, paddingLeft: '1.5rem' }}>
          Apabila dalam amar putusan Pengadilan Agama tidak disebutkan secara spesifik KUA yang ditunjuk untuk melakukan pencatatan isbat nikah, maka permohonan pencatatan wajib dilengkapi dengan:<br />
          &nbsp;&nbsp;• Surat pernyataan belum pernah mencatatkan isbat pernikahan di KUA manapun yang dibubuhi meterai 10.000
        </p>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          PROSEDUR
        </h2>

        <ol style={{
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem',
          color: '#4b5563',
          lineHeight: 1.6
        }}>
          <li>
            Semua berkas diupload di{" "}
            <Link href="https://forms.gle/WoPXKe8ygZ3wiedA9" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              form ini
            </Link>.
          </li>
          <li>Konfirmasi melalui WhatsApp untuk dijadwalkan verifikasi.</li>
          <li>Datang ke KUA pada hari dan jam kerja, dengan membawa semua berkas.</li>
          <li>Mengikuti pemeriksaan dan verifikasi.</li>
          <li>Menerima layanan.</li>
        </ol>

        <div style={{
          backgroundColor: '#e6f4ea',
          borderLeft: '4px solid #16a34a',
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '1.5rem'
        }}>
          <p style={{ margin: 0, color: '#065f46', fontWeight: 'bold' }}>
            Hari dan Jam Kerja KUA Rantepao:
          </p>
          <p style={{ margin: '0.5rem 0 0', color: '#065f46' }}>
            Senin–Kamis: 08.00 – 16.00 WITA<br />
            Jum’at: 08.00 – 16.30 WITA<br />
            istirahat: 12.00 - 13.30 WITA
          </p>
        </div>

        <div style={{
          backgroundColor: '#e6f4ea',
          borderLeft: '4px solid #16a34a',
          padding: '1rem',
          borderRadius: '4px'
        }}>
          <p style={{ margin: 0, color: '#065f46' }}>
            <strong>Info Penting:</strong> Jika ada hal yang kurang jelas atau ingin ditanyakan, silakan hubungi admin melalui{" "}
            <Link href="https://wa.me/6282258891262" target="_blank" rel="noopener noreferrer" style={{ color: '#065f46', fontWeight: 'bold', textDecoration: 'underline' }}>
              WhatsApp 0822-5889-1262
            </Link>.
          </p>
        </div>
      </main>

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