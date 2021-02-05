import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
      <div class="h-screen flex justify-start items-end bg-gray-400">
        
        {/* Footer */}
        <div class="flex items-end bg-gray-800 w-screen h-14">
          
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Windows
          </button>

        </div>
      </div>
    </div>
  )
}
