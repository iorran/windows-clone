import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum...
        </p>
      </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
