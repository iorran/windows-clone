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
        <div class="flex items-end">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
