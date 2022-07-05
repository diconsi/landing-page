import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Mybuilding from './myImg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Mybuilding></Mybuilding>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
      {/* </header> */}
    </div>
  )
}

export default App
