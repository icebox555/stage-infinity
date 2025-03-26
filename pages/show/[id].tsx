import { useRouter } from 'next/router'
import Head from 'next/head'

export default function ShowDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <Head>
        <title>Stage∞ - 公演詳細</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">公演ID: {id}</h1>
      <p>ここに {id} の詳細情報や動画を表示できます。</p>
      <div className="mt-4">
        <video controls width="100%">
          <source src="/sample.mp4" type="video/mp4" />
          お使いのブラウザは video タグに対応していません。
        </video>
      </div>
    </div>
  )
}
