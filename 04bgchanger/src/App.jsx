import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
      <div style={{width: "85vw", height: "90vh", backgroundColor: "black"}}>
        <button style={{backgroundColor: "white"}}></button>
        <button style={{backgroundColor: "grey"}}></button>
        <button style={{backgroundColor: "blue"}}></button>
        <button style={{backgroundColor: "yellow"}}></button>
        <button style={{backgroundColor: "green"}}></button>
        <button style={{backgroundColor: "beige"}}></button>
        <button style={{backgroundColor: "purple"}}></button>
      </div>
    </>
  )
}

export default App
