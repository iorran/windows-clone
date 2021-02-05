import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="md:container md:mx-auto">
        <div class="flex">
          <div class="justify-start items-end">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
