'use client'
import Image from 'next/image'
import acmeLogo from '@/assests/images/logo-acme.png'
import quantumLogo from'@/assests/images/logo-quantum.png'
import echoLogo from '@/assests/images/logo-echo.png'
import celestialLogo from '@/assests/images/logo-celestial.png'
import pulseLogo from '@/assests/images/logo-pulse.png'
import apexLogo from '@/assests/images/logo-apex.png'
import { motion } from 'framer-motion'

const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-[#F9FAFB]'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt='acme logo'
              className='logo-ticker-logo' />
            <Image
              src={quantumLogo}
              alt='quantum logo'
              className='logo-ticker-logo' />
            <Image
              src={echoLogo}
              alt='echo logo'
              className='logo-ticker-logo' />
            <Image
              src={celestialLogo}
              alt='celestial logo'
              className='logo-ticker-logo' />
            <Image
              src={pulseLogo}
              alt='pulse logo'
              className='logo-ticker-logo' />
            <Image
              src={apexLogo}
              alt='apex logo'
              className='logo-ticker-logo' />

            {/*second section of logo*/}
            <Image
              src={acmeLogo}
              alt='acme logo'
              className='logo-ticker-logo' />
            <Image
              src={quantumLogo}
              alt='quantum logo'
              className='logo-ticker-logo' />
            <Image
              src={echoLogo}
              alt='echo logo'
              className='logo-ticker-logo' />
            <Image
              src={celestialLogo}
              alt='celestial logo'
              className='logo-ticker-logo' />
            <Image
              src={pulseLogo}
              alt='pulse logo'
              className='logo-ticker-logo' />
            <Image
              src={apexLogo}
              alt='apex logo'
              className='logo-ticker-logo' />


          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default LogoTicker