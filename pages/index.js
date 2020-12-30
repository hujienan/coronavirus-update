import Head from 'next/head'
import Content from '../components/content'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Coronavirus Update' />
        <meta name='keywords' content='Coronavirus Update' />
        <title>Coronavirus Update</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>

      <main>
        <h1 className="text-center text-2xl 2xl:text-4xl 2xl:text-red-600">Coronavirus Update</h1>
        <Content></Content>
      </main>

      <footer className='text-center'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className='w-12 inline-block' />
        </a>
      </footer>
    </div>
  )
}
