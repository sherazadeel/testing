import React from 'react'
import Routing from './router/Routing'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'

function App() {
  return (
    <>
    <div class="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Navbar/>
    <Bottombar/>
   <Routing/>
    </>
  )
}

export default App
