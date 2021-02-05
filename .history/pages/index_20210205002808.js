import Head from 'next/head'
import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windows Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button type="primary">Button</Button>
      </main>

      <footer>
      </footer>
    </div>
  )
}
