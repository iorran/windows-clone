import Head from 'next/head'
import { Provider, Button } from "reakit";

export default function Home() {
  return (
    <Provider>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>Button</Button>
      </main>

      <footer>
      </footer>
    </Provider>
  )
}
