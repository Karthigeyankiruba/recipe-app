import React from 'react'
import { Home } from './Home'
import { Routes,Route, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Receipe from './Receipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}  key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path='/searched/:search' element={<Searched />}/>
        <Route path="/recipe/:name" element={<Receipe />}/>
        </Routes>
        </AnimatePresence>
 
  )
}

export default Pages