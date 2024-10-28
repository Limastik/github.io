import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import RangeInput from './RangeInput'
import './App.css'

function App() {

  return (
    <div className="">
          <Header/>
          <RangeInput initialPreviousValue={25} />
    </div>
  )
}

export default App
