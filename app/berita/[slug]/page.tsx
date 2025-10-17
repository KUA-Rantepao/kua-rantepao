// app/berita/[slug]/page.tsx
import { getAllBerita } from '@/lib/berita';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const beritaList = getAllBerita();
  return beritaList.map(b => ({ slug: b.slug }));
}

export default function DetailBerita({ params }: { params: { slug: string } }) {
  const beritaList = getAllBerita();
  const berita = beritaList.find(b => b.slug === params.slug);

  if (!berita) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Berita tidak ditemukan</h2>
        <Link href="/berita" style={{ color: '#16a34a' }}>← Lihat semua berita</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <Link href="/berita" style={{ display: 'inline-block', marginBottom: '1rem', color: '#16a34a' }}>
        ← Kembali ke Daftar Berita
      </Link>

      <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 0.5rem' }}>
        {berita.judul}
      </h1>
      <div style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        {berita.tanggal}
      </div>

      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <Image
          src={berita.gambar}
          alt={berita.judul}
          width={700}
          height={400}
          style={{ borderRadius: '8px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
        {berita.isi}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#16a34a', textDecoration: 'underline' }}>
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
