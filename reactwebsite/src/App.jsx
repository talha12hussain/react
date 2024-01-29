import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'


const App = () => {
  return (
    <>
     <Navbar/>
     <main>
      <div id='home'>
    <Home/>

      </div>
     </main>
   
     </>
  )
}

export default App
