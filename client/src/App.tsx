import { Button, Text, createTheme, Grid, NextUIProvider, Switch } from '@nextui-org/react'
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
import { Section } from './components/Section'

function App() {

  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Section>
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <img src={Logo} alt="" />
          <UnderConstruction />
          <Button as="a" size='lg' color="gradient" auto ghost rounded href='#form'>
            <Text css={{ color: "inherit" }}>
              Notify me
            </Text>
          </Button>
        </div>
      </Section>
      <Section id="form">
        <ContactForm></ContactForm>
      </Section>
    </NextUIProvider>
  )
}

export default App
