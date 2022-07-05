import { useState } from 'react'
import './App.css'
import Mybuilding from './myImg'
import MyFormH from './MyForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Mybuilding></Mybuilding>
          <MyFormH></MyFormH>
    </div>
  )
}

export default App
