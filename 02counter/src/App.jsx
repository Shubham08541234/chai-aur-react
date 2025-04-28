import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(0);

  function addVal() {
    console.log('clicked: ', Math.random());
    setValue(value+1)
  }

  function removeVal() {
    if(value < 1) {
      alert("You can't count negetive value");
    }
    else{
      setValue(value-1);
    }
  }

  
  

  return (
    <>
      <h1>Chai Aur Code</h1>
      <p>counter: {value}</p>

      <button onClick={addVal}>Add Value</button>
      <br />
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
