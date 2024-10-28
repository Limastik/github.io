import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './App.css'
import PartialLoader from './PartialLoader'

function App() {

  return (
    <div className="">
          <Header/>

          <div>
            <PartialLoader resource="posts" />
            <PartialLoader resource="comments" />
          </div>
    </div>
  )
}

export default App
