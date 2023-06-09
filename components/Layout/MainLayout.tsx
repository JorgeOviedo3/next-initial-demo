import Head from "next/head"
import styles from "../../styles/Home.module.css"
import { Navbar } from "../Navbar"
import { PropsWithChildren, FC } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <>
      <Head>
        <title>Home - Jorge</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
