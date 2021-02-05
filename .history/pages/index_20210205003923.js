import Head from 'next/head'
import { Provider, Button } from "reakit";
import * as system from "reakit-system-bootstrap";

export default function Home() {
  return (
    <Provider unstable_system={system}>
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
