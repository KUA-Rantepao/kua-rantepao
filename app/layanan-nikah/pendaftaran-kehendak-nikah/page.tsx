// app/layanan-nikah/pendaftaran-kehendak-nikah/page.tsx
'use client';

import Link from 'next/link';

export default function PendaftaranKehendakNikah() {
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
          Pendaftaran Kehendak Nikah
        </h1>

        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          Setiap orang yang akan melangsungkan pernikahan, memberitahukan kehendak nikahnya kepada Pegawai Pencatat Nikah (PPN) di Kecamatan tempat pernikahan akan dilangsungkan sekurang-kurangnya 10 (sepuluh) hari kerja, oleh calon mempelai atau wakilnya dengan syarat sebagai berikut:
        </p>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          SYARAT-SYARAT PENDAFTARAN KEHENDAK NIKAH
        </h2>

        <ol style={{
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem',
          color: '#4b5563',
          lineHeight: 1.6
        }}>
          <li>
            Surat pengantar dari Desa/kelurahan tempat tinggal Catin (N1){" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/a4jj16q4mm9793zodh7im/FORMULIR-PENGANTAR-NIKAH-n1.docx?rlkey=xmcf04dd415pltf8jc5miz05r&st=7k3flk7f&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>
            Surat Permohonan Kehendak nikah (N2){" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/r6vmgwu7866181gqrlk6w/permohonan-kehendak-nikah-N2.docx?rlkey=nkn1i0lzwv9kdtbtl3o1c9vpj&st=mwmnxxp7&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>
            Surat Persetujuan Mempelai (N4){" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/7d1zaepyilf5iq3i9hm09/PERSETUJUAN-CALON-PENGANTIN-N4.docx?rlkey=ivq6k49q6os2qkrzpa2flvpon&st=mtr8zdaw&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>
            Surat Pertanggungjawaban Mutlak.{" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/ni81iwt7fu8ccin01nx0y/SPTJM-CATIN-SAAT-PEMRIKSAAN-WALI.docx?rlkey=ujm4hrsey54nojtdmpiahufd5&st=ss99g8qr&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>
            Surat izin dari orang tua/wali/pengampu bagi calon mempelai yang belum berusia 21 tahun (N5).{" "}
            <Link href="https://dl.dropboxusercontent.com/scl/fi/jac125oivt5m9e6gxnywg/Model-N-5.docx?rlkey=32dk8g2yz3rrudaav1w7ahheu&st=1wtw7ojl&dl=1" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Download Format
            </Link>
          </li>
          <li>Surat dispensasi nikah dari pengadilan agama, bagi calon mempelai laki-laki yang belum berusia 19 tahun atau calon mempelai perempuan yang belum berusia 19 tahun dihitung pada tanggal pelaksanaan akad nikah.</li>
          <li>Fotokopi akta kematian istri/suami bagi duda/janda ditinggal mati</li>
          <li>Surat keterangan sehat bagi calon pengantin laki-laki dan calon pengantin perempuan yang diterbitkan oleh fasilitas kesehatan (puskesmas, rumah sakit umum daerah/rsud, atau fasilitas kesehatan pemerintah lainnya).</li>
          <li>Akta cerai bagi calon mempelai yang berstatus sebagai duda/janda cerai</li>
          <li>Fotokopi akta kelahiran</li>
          <li>Fotokopi KTP dan KK</li>
          <li>Fotokopi KTP dan KK orang tua kedua calon mempelai</li>
          <li>Sertifikat telah mengikuti Bimbingan Perkawinan (BIMWIN)</li>
          <li>Surat izin menikah dari atasan atau kesatuan, bagi anggota TNI atau POLRI.</li>
          <li>Surat izin poligami dari pengadilan agama, bagi calon pengantin laki-laki yang hendak beristri lebih dari satu.</li>
          <li>Surat rekomendasi nikah dari KUA asal, bagi calon pengantin yang bukan berdomisili di Kecamatan Rantepao, Tallunglipu, dan Tikala.</li>
          <li>Surat dispensasi dari camat atas nama bupati, apabila karena suatu alasan yang penting, pernikahan akan dilangsungkan kurang 10 hari kerja sejak pemberitahuan diterima.</li>
          <li>Pas foto berwarna ukuran 2x3 = 3 lembar, dan 4x6 = 2 lembar. Dengan latar belakang warna biru.</li>
        </ol>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          PENGEMBALIAN DOKUMEN DAN VERIFIKASI
        </h2>

        <ol style={{
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem',
          color: '#4b5563',
          lineHeight: 1.6
        }}>
          <li>
            Semua dokumen persyaratan di atas, di upload pada{" "}
            <Link href="https://forms.gle/oNWPGjR69EW7nTct6" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              Link Ini
            </Link>{" "}
            dan konfirmasi kepada admin KUA melalui{" "}
            <Link href="https://wa.me/6282258891262?text=Assalamualaikum%20wr%20wb.%0A%0AKonfirmasi%20pendaftaran%20nikah.%0ANama%3A%0AAlamat%3A%0A%0ABerkas%20telah%20saya%20upload%2C%20mohon%20diperiksa.%20Terimakasih" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 'bold', textDecoration: 'underline' }}>
              WhatsApp
            </Link>{" "}
            paling lambatnya 10 (sepuluh) hari kerja sebelum pelaksanaan akad nikah.
          </li>
          <li>Semua dokumen persyaratan yang asli beserta surat pengantar yang telah ditandatangani oleh kepala desa/lurah dibawa ke kantor KUA Rantepao pada hari dan jam kerja.</li>
          <li>Petugas KUA melakukan verifikasi.</li>
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
            Jum’at: 08.00 – 16.30 WITA
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