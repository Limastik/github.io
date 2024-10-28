import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PricesList from './PricesList'
import PriceCreator from './PriceCreator'
import Header from './Header'
import './App.css'

function App() {

  return (
    <div className="">
          <Header/>
          <PriceCreator/>
          {/* <PricesList/> */}
    </div>
  )
}

export default App
