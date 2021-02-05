import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div class="bg-white dark:bg-gray-800">
        <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p class="text-gray-600 dark:text-gray-300">
          Lorem ipsum...
        </p>
      </div>
        <div className="mt-4 p-4 w-1/4 rounded bg-blue-300 text-center">
          <p className="text-blue-600">This should be very blue.</p>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
