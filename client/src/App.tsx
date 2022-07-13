import { createTheme, Grid, NextUIProvider, Switch } from '@nextui-org/react'
import { UnderConstruction } from './components/UnderConstruction'
import sun from '@iconify/icons-ph/sun-dim'
import moon from '@iconify/icons-ph/moon-stars'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { DownloadLink } from './components/DownloadLink'
import Mybuilding from './components/myImg'
import { ContactForm } from './components/ContactForm'
import MytextSite from './components/TextSite'
import { Option } from './components/Option'
import Logo from './img/industrial-code-logo-2022.svg'

function App() {

  return (
    <div>
      <img src={Logo} alt="" />
      <Option></Option>
      {/* <MytextSite></MytextSite>
      <br />
      <Mybuilding></Mybuilding>
      <div style={{ display: 'grid', placeContent: 'center', minHeight: '100vh' }}>
        <ContactForm></ContactForm>
      </div> */}
    </div>
  )
}

export default App
