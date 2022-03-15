import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar  from '../comps/Navbar'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  const {name} = router.query
  console.log(name)
  return (
    <div className={styles.container}>
      <Head>
      <Navbar />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey <span className={styles.name}>{name === undefined ? "there" : name}!</span>
        </h1>
        <h1 className={styles.inviteText}>{"You're invited to intechgration's grad party  🎉 "}</h1>



        <div className={styles.grid}>
          <a  className={styles.card}>
            <h2>Date &darr;</h2>
            <p>Friday 18th</p>
          </a>

          <a href='https://goo.gl/maps/XuBjmnA3fYjS1vSh8' className={styles.card}>
            <h2>Place &darr;</h2>
            <p>Echo Hub Athens</p>
          </a>

          <a
            
            className={styles.card}
          >
            <h2>Time &darr;</h2>
            <p>7 PM</p>
          </a>

          <a
            href="tel:+306992870501"
            className={styles.card}
          >
            <h2>Contact &darr;</h2>
            <p>click to call</p>
            <a>+306992870501</a>

          </a>
        </div>
      </main>

      <footer className={styles.footer}>
    
          Powered by{' '} in<span className="footerTech">tech</span>gration
         
      
      </footer>
    </div>
  )
}
