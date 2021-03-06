import React from 'react'
import Nav from './Nav'
// import { RandomReveal } from 'react-random-reveal'

import { motion } from 'framer-motion'

function Home() {

  const transition = { duration: 0.6, ease: [0.9, 0.06, -0.05, 0.9] };


  return (

    <>
      <>
        <motion.section className="homePage-wrapper">
          <header>
            {/* <div className="fullName">
              <RandomReveal
                isPlaying
                duration={4.6}
                revealDuration={0.5}
                characters="Oluwatobi Ebunoluwa Adewale Lesi"
              />
            </div> */}
            <div className="title">
              <motion.div className="h1">
                <motion.span initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    delayChildren: 1.6,
                    staggerChildren: 0.04,
                    staggerDirection: 1,
                  }} className="first-name">
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>T</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>o</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>b</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>i</motion.span>
                </motion.span>
                <motion.span initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    delayChildren: 1.6,
                    staggerChildren: 0.04,
                    staggerDirection: 1,
                  }} className="second-name">
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>L</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>e</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>s</motion.span>
                  <motion.span initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1, ...transition }}>i</motion.span>
                </motion.span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1, y: 20,
                  transition: { delay: 0.9, ...transition }
                }}>
                Junior Software Engineer
            </motion.h3>
            </div>
          </header>
          <Nav />
        </motion.section>
      </>
    </>
  )


}
export default Home