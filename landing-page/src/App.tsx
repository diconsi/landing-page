import Mybuilding from './components/myImg'
import MyFormH from './components/MyForms'
import { Contact } from './components/Contact'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { UnderConstruction } from './components/UnderConstruction'

function App() {
  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <div style={{ display: 'grid', placeContent: 'center', minHeight: '100vh' }}>
        <UnderConstruction />
      </div>
    </NextUIProvider >
  )
}

export default App
