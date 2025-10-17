// lib/berita.ts
import fs from 'fs';
import path from 'path';

export type Berita = {
  slug: string;
  judul: string;
  tanggal: string;
  tanggalISO: string;
  isi: string;
  gambar: string;
};

export function getAllBerita(): Berita[] {
  const BERITA_DIR = path.join(process.cwd(), 'content', 'berita');
  if (!fs.existsSync(BERITA_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BERITA_DIR).filter(f => f.endsWith('.md'));
  const beritaList: Berita[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(BERITA_DIR, file), 'utf8');
    const lines = content.split('\n').map(l => l.trim());

    let judul = lines[0] || 'Tanpa Judul';
    if (judul.startsWith('# ')) {
      judul = judul.slice(2);
    }

    const tanggal = lines[1] || '';
    
    // Ekstrak tanggal dari nama file: ...-27-09-2025.md
    const dateMatch = slug.match(/(\d{2})-(\d{2})-(\d{4})$/);
    const tanggalISO = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : '';
    const tanggalGambar = dateMatch ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}` : '';

    const isi = lines.slice(2).join(' ').trim();
    const gambar = tanggalGambar ? `/berita/${tanggalGambar}.jpg` : '';

    beritaList.push({ slug, judul, tanggal, tanggalISO, isi, gambar });
  }

  // Urutkan dari terbaru
  return beritaList
    .filter(b => b.tanggalISO)
    .sort((a, b) => b.tanggalISO.localeCompare(a.tanggalISO));
}

export function getBeritaBySlug(slug: string): Berita | null {
  const semuaBerita = getAllBerita();
  return semuaBerita.find(b => b.slug === slug) || null;
}
