import { useState } from 'react'
import './App.css'
import Mybuilding from './components/myImg'
import MyFormH from './components/MyForms'
import { Contact } from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Mybuilding></Mybuilding>
          <MyFormH></MyFormH>
          {/* <Contact></Contact> */}
    </div>
  )
}

export default App
