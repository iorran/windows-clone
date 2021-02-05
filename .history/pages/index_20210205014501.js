import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="h-screen flex justify-start items-end bg-gray-400">
        <div class="bg-gray-800 w-screen">1</div>
      </div>
    </div>
  )
}
