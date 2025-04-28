import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'Click to visit google'
)

createRoot(document.getElementById('root')).render(
  <>
    <App/>,
    {reactElement}
  </>
)
