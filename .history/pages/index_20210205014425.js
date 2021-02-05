import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="h-screen flex justify-start items-end bg-gray-800">
        <div class="">1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}
