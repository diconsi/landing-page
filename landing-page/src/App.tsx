import { useState } from 'react'
import './App.css'
import Mybuilding from './components/myImg'
import MyFormH from './components/MyForms'

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
