import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'


const App = () => {
  return (
    
     <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='services'>
          <Services/>
        </div>
        
      </main>
      </div>
     
  )
}

export default App
