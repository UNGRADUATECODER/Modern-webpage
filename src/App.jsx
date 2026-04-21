import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Services from './components/Services'

const App = () => {
  const [theme,setTheme]=useState("light")

  return (
   
      <div className='dark:bg-black relative'>
        <Navbar theme={theme} setTheme={setTheme} />
         <Hero/>
       <Trusted/>
       <Services/>
      </div>

  
  )
}

export default App

