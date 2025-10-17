import { getBeritaBySlug, getAllBerita } from '../../../lib/berita'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

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


