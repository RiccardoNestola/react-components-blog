import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/footer'
import Card from './components/Card/Card'

function App() {

  return (
    <>
      <Header/>
      <main>

      <Card/>

      </main>

      <Footer/>
    </>
  )
}

export default App
