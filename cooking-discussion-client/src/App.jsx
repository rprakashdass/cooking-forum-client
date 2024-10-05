import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/index.css'
import NavBar from './components/NabBar'
// import Home from './components/Home'
import CommunityPost from './components/CommunityPost'

function App() {
  return (
    <>
      <NavBar />
      <CommunityPost />
      {/* <Home /> */}
      {/* <p className='bg-slate-100'>Hello World</p> */}
    </>
  )
}

export default App;
