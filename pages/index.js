import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import heroImg from '@/public/images/matt-webber.jpg'

const montserratBold = Montserrat({ weight: '700', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Webber: JavaScript Developer</title>
        <meta name="description" content="About JavaScript developer, SaaS builder, and digital professional Matt Webber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* create a flex container that centers its items */}
      <div className="flex flex-col gap-12">
        <div id='intro-section' className="grid grid-cols-2">
          <div className={`mt-auto grid grid-rows-3 gap-4 ml-auto text-3xl ${montserratBold.className}`}>
            <p className=''>Greetings,</p>
            <p className=''>my name</p>
            <p className=''>is Matt.</p>
          </div>
          <div className="">
            <Image
              src={heroImg}
              alt="Matt Webber"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <a href='mailto:dev.matthew.lee.webber.dev@gmail.com' className={styles.neonbutton}>
            Contact Me
          </a>
        </div>
      </div>
    </>
  )
}
