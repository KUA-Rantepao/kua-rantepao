// app/layanan-nikah/duplikat-buku-nikah/page.tsx
"use client";

import Link from "next/link";

export default function DuplikatBukuNikah() {
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
          Duplikat Buku Nikah
        </h1>

        <p
          style={{ color: "#4b5563", marginBottom: "1.5rem", lineHeight: 1.6 }}
        >
          Berdasarkan Peraturan Menteri Agama Nomor 30 Tahun 2024, pasangan
          suami/istri dapat mengajukan permohonan penerbitan duplikat atau buku
          nikah pengganti apabila buku nikah yang dimiliki mengalami kerusakan
          atau hilang.
        </p>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1rem",
          }}
        >
          KETENTUAN
        </h2>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
            paddingLeft: "1.5rem",
          }}
        >
          Penerbitan Buku Nikah hanya dapat dilakukan di Kantor Urusan Agama
          (KUA) tempat akad nikah dilaksanakan. (Misalkan A menikah di Kecamatan
          Tikala, Toraja Utara. Maka penerbitan buku nikah pengganti dilakukan
          di KUA Rantepao, karena Tikala merupakan wilayah kerja KUA Rantepao).
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
            Permohonan Penerbitan Buku Nikah Pengganti.{" "}
            <Link
              href="https://dl.dropboxusercontent.com/scl/fi/zy2jq4nj10gjixj4ta5tl/permohonan-duplikat-buku-nikah.docx?rlkey=wy67zcumfs6ztrjfm53mhg0w2&st=evzpc01r&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Download Formulir
            </Link>
          </li>
          <li>
            Jika Buku Nikah Rusak, maka buku yang rusak wajib dibawa ke KUA
            sebagai bukti.
          </li>
          <li>
            Jika Buku Nikah Hilang, maka wajib menyertakan surat keterangan
            kehilangan dari Kepolisian Republik Indonesia.
          </li>
          <li>Fotokopi KTP dan KK.</li>
          <li>Pas foto 2x3 latar belakang biru, 2 lembar.</li>
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
            Konfirmasi kelengkapan berkas melalui{" "}
            <Link
              href="https://wa.me/6282258891262"
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
          <li>Datang ke KUA Rantepao pada hari dan jam kerja.</li>
          <li>Mengikuti pemeriksaan berkas dan verifikasi.</li>
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
            Hari dan Jam Pelayanan KUA Rantepao:
          </p>
          <p style={{ margin: "0.5rem 0 0", color: "#065f46" }}>
            Senin–Kamis: 08.00 – 16.00 WITA
            <br />
            Jum’at: 08.00 – 16.30 WITA
            <br />
            istirahat: 12.00 - 13.30 WITA
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
