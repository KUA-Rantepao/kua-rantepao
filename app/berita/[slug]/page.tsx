// app/berita/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

// FUNGSI YANG DIUPDATE UNTUK STRUKTUR BARU
function getAllBerita() {
  const CONTENT_DIR = path.join(process.cwd(), 'content');
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const beritaList = [];

  // Baca semua tahun
  const tahunDirs = fs.readdirSync(CONTENT_DIR).filter(dir => 
    fs.statSync(path.join(CONTENT_DIR, dir)).isDirectory()
  );

  for (const tahun of tahunDirs) {
    const tahunPath = path.join(CONTENT_DIR, tahun);
    
    // Baca semua bulan dalam tahun
    const bulanDirs = fs.readdirSync(tahunPath).filter(dir =>
      fs.statSync(path.join(tahunPath, dir)).isDirectory()
    );

    for (const bulan of bulanDirs) {
      const bulanPath = path.join(tahunPath, bulan);
      
      // Baca semua file .md dalam bulan
      const files = fs.readdirSync(bulanPath).filter(f => f.endsWith('.md'));

      for (const file of files) {
        const slug = file.replace(/\.md$/, '');
        const content = fs.readFileSync(path.join(bulanPath, file), 'utf8');
        const lines = content.split('\n').map(l => l.trim());

        let judul = lines[0] || 'Tanpa Judul';
        if (judul.startsWith('# ')) judul = judul.slice(2);

        const tanggal = lines[1] || '';
        const isi = lines.slice(2).join(' ').trim();

        const dateMatch = file.match(/(\d{4})-(\d{2})-(\d{2})/);
        const tanggalISO = dateMatch ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}` : '';
        
        const tanggalGambar = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : '';
        const gambar = tanggalGambar ? `/berita/${tahun}/${bulan}/${tanggalGambar}.jpg` : '';

        beritaList.push({ 
          slug, 
          judul, 
          tanggal, 
          tanggalISO, 
          isi, 
          gambar,
          tahun,
          bulan
        });
      }
    }
  }

  return beritaList
    .filter(b => b.tanggalISO)
    .sort((a, b) => b.tanggalISO.localeCompare(a.tanggalISO));
}

function getBeritaBySlug(slug: string) {
  const semuaBerita = getAllBerita();
  return semuaBerita.find(b => b.slug === slug) || null;
}

interface Props {
  params: {
    slug: string
  }
}

export default function BeritaDetailPage({ params }: Props) {
  const berita = getBeritaBySlug(params.slug)

  if (!berita) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/berita"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Kembali ke Berita
      </Link>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {berita.judul}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {berita.tanggal || new Date(berita.tanggalISO).toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          {berita.gambar && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line leading-relaxed text-gray-700">
            {berita.isi}
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  const beritas = getAllBerita()
  
  return beritas.map((berita) => ({
    slug: berita.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const berita = getBeritaBySlug(params.slug)

  if (!berita) {
    return {
      title: 'Berita Tidak Ditemukan - KUA Rantepao'
    }
  }

  return {
    title: `${berita.judul} | KUA Rantepao`,
    description: berita.isi.slice(0, 160) + '...',
  }
}
