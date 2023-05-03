import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/organisms/navbar'
import Container from '@/components/atoms/container'
import Header from '@/components/organisms/header'
import ActivitiesSection from '@/components/organisms/activities-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <Navbar/>
      <Header/>
      <ActivitiesSection/>
      </Container>
    </>
  )
}
