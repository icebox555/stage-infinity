import Link from 'next/link'

export default function ShowCard({ show }) {
  return (
    <Link href={`/show/${show.id}`}>
      <div className="bg-gray-900 hover:bg-gray-800 p-4 rounded shadow">
        <img src={show.image} alt={show.title} className="w-full h-48 object-cover mb-2 rounded" />
        <h2 className="text-xl font-bold">{show.title}</h2>
        <p className="text-sm text-gray-400">{show.date} / {show.group}</p>
        <p className="text-sm mt-1">{show.desc}</p>
      </div>
    </Link>
  )
}
