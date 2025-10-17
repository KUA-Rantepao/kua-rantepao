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

const BERITA_DIR = path.join(process.cwd(), 'content', 'berita');

function extractDateFromSlug(slug: string): { iso: string; display: string } {
  const match = slug.match(/(\d{2})-(\d{2})-(\d{4})$/);
  if (!match) return { iso: '', display: '' };
  const [_, day, month, year] = match;
  const iso = `${year}-${month}-${day}`;
  const date = new Date(iso);
  const formatter = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return { iso, display: formatter.format(date) };
}

export function getAllBerita(): Berita[] {
  if (!fs.existsSync(BERITA_DIR)) return [];

  const files = fs.readdirSync(BERITA_DIR).filter(f => f.endsWith('.md'));
  const list: Berita[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(BERITA_DIR, file), 'utf8');
    const lines = content.split('\n').map(l => l.trim());

    const judul = lines[0]?.startsWith('# ') ? lines[0].slice(2) : lines[0] || 'Tanpa Judul';
    const tanggal = lines[1] || '';
    const { iso: tanggalISO } = extractDateFromSlug(slug);
    const isi = lines.slice(2).join(' ').trim();

    const bulan = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(new Date(tanggalISO));
    const tanggalFile = slug.match(/(\d{2}-\d{2}-\d{4})$/)?.[1] || '01-01-2025';
    const gambar = `/berita/${bulan.toLowerCase()}/${tanggalFile}.jpg`;

    list.push({ slug, judul, tanggal, tanggalISO, isi, gambar });
  }

  return list
    .filter(b => b.tanggalISO)
    .sort((a, b) => b.tanggalISO.localeCompare(a.tanggalISO));
}
