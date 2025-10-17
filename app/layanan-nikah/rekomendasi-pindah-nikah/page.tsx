// app/layanan-nikah/rekomendasi-pindah-nikah/page.tsx
"use client";

import Link from "next/link";

export default function RekomendasiPindahNikah() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "1rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #ddd",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo Kemenag"
              width={60}
              height={60}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              KUA Rantepao
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
              }}
            >
              Kab. Toraja Utara
            </div>
          </div>
        </Link>
      </div>

      {/* Navbar */}
      <nav
        style={{
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/layanan-nikah"
          style={{
            color: "#4b5563",
            textDecoration: "none",
          }}
        >
          ← Kembali ke Layanan Nikah
        </Link>
      </nav>

      {/* Konten */}
      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1.5rem",
          }}
        >
          Rekomendasi Nikah / Pindah Nikah
        </h1>

        <p
          style={{ color: "#4b5563", marginBottom: "1.5rem", lineHeight: 1.6 }}
        >
          Bagi calon pengantin yang akan melangsungkan pernikahan di luar
          kecamatan domisili maka wajib menyertakan Rekomendasi Nikah.
          Rekomendasi Nikah (formulir N10) diterbitkan oleh Kantor Urusan Agama
          (KUA) atau instansi terkait di wilayah domisili calon mempelai,
          sebagai persyaratan administratif untuk mendaftarkan pernikahan di KUA
          tujuan.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1rem",
          }}
        >
          SYARAT
        </h2>

        <ol
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "1.5rem",
            color: "#4b5563",
            lineHeight: 1.6,
          }}
        >
          <li>
            Mengisi Formulir Permohonan Rekomendasi/Pindah Nikah.{" "}
            <Link
              href="https://dl.dropboxusercontent.com/scl/fi/avtkmv9joppxxvg4ij8nt/Permohonan-Rekomendasi-Pindah-Nikah.docx?rlkey=mlo9zd5vvgagut3t751xumdms&st=zygbkjg6&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Download Format
            </Link>
          </li>
          <li>
            Surat Pengantar nikah dari Desa/Kelurahan (N1){" "}
            <Link
              href="https://dl.dropboxusercontent.com/scl/fi/ydj9v4wxmyzen4o8pbo3v/FORMULIR-PENGANTAR-NIKAH-n1.docx?rlkey=bptjnflgk1z31eyg7ey8fnx0q&st=u0w4zcvd&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Download Format
            </Link>
          </li>
          <li>
            Fotokopi/scan Persetujuan Calon Mempelai (N4){" "}
            <Link
              href="https://www.dl.dropbox.com/scl/fi/7d1zaepyilf5iq3i9hm09/PERSETUJUAN-CALON-PENGANTIN-N4.docx?rlkey=ivq6k49q6os2qkrzpa2flvpon&st=4xt9vzut&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Download Format
            </Link>
          </li>
          <li>Fotokopi/scan KTP Calon Mempelai Laki-laki dan Perempuan</li>
          <li>
            Fotokopi/scan KTP Orang Tua Calon Mempelai Laki-laki dan Perempuan
          </li>
          <li>
            Fotokopi/scan Kartu Keluarga Calon Mempelai Laki-laki dan Perempuan
          </li>
        </ol>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1rem",
          }}
        >
          PROSEDUR
        </h2>

        <ol
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "1.5rem",
            color: "#4b5563",
            lineHeight: 1.6,
          }}
        >
          <li>
            Persyaratan yang telah lengkap dan tertandatangan Kepala Desa/Lurah
            dapat diupload di{" "}
            <Link
              href="https://forms.gle/SrLJBs8tWuHvKpji8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              form ini
            </Link>{" "}
            disertai konfirmasi kepada petugas KUA RANTEPAO melalui{" "}
            <Link
              href="https://wa.me/6282258891262?text=Assalamualaikum%20wr%20wb.%0A%0AKonfirmasi%20rekomendasi%20nikah.%0ANama%3A%0AAlamat%3A%0A%0ABerkas%20telah%20saya%20upload%2C%20mohon%20diperiksa.%20Terimakasih"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              WhatsApp
            </Link>
            .
          </li>
          <li>
            Petugas menjadwalkan untuk verifikasi berkas yang asli di kantor
            KUA.
          </li>
          <li>
            Datang ke KUA pada hari dan jam kerja dengan membawa berkas-berkas
            yang asli.
          </li>
          <li>Mengikuti pemeriksaan dan verifikasi.</li>
          <li>Mendapatkan layanan.</li>
        </ol>

        <div
          style={{
            backgroundColor: "#e6f4ea",
            borderLeft: "4px solid #16a34a",
            padding: "1rem",
            borderRadius: "4px",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ margin: 0, color: "#065f46", fontWeight: "bold" }}>
            Hari kerja KUA Rantepao:
          </p>
          <p style={{ margin: "0.5rem 0 0", color: "#065f46" }}>
            Senin–Kamis: 08.00 – 16.00 WITA
            <br />
            Jum’at: 08.00 – 16.30 WITA
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#e6f4ea",
            borderLeft: "4px solid #16a34a",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0, color: "#065f46" }}>
            <strong>Info Penting:</strong> Jika ada hal yang kurang jelas atau
            ingin ditanyakan, silakan hubungi admin melalui{" "}
            <Link
              href="https://wa.me/6282258891262"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#065f46",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              WhatsApp 0822-5889-1262
            </Link>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#6b7280",
          fontSize: "0.875rem",
        }}
      >
        © 2025 KUA Rantepao — Kabupaten Toraja Utara
      </footer>
    </div>
  );
}
