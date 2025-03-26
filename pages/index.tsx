import Head from 'next/head'
import Header from '../components/Header'
import ShowCard from '../components/ShowCard'

const shows = [
  {
    id: 'next-dreamers',
    title: 'NEXT DREAMERS second',
    group: 'and∞Link',
    date: '2024年4月公演',
    desc: '夢を信じる若者たちの群像劇。',
    image: '/thumb1.jpg'
  },
  {
    id: 'shine-wolf',
    title: 'ミュージカル Shine -エピソードオブウルフ-',
    group: 'HotGeneration',
    date: '2024年8月公演',
    desc: 'オオカミと少年を題材にした冒険譚。',
    image: '/thumb2.jpg'
  },
  {
    id: 'sample-show',
    title: '2023年春公演',
    group: 'HotGeneration',
    date: '2023年春',
    desc: 'ある町の少女が不思議な旅に出る。',
    image: '/thumb3.jpg'
  }
]

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Stage∞</title>
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-semibold mb-6">公演アーカイブ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shows.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </main>
    </div>
  )
}
