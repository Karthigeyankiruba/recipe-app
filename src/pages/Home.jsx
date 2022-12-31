import { motion } from 'framer-motion'
import React from 'react'
import Popular from '../components/Popular'
import Veggies from '../components/Veggies'

export const Home = () => {
  return (
    
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Popular />
        <Veggies />
        </motion.div>

  )
}
