import MyFormH from './components/MyForms'
import { createTheme, Grid, NextUIProvider, Switch } from '@nextui-org/react'
import { UnderConstruction } from './components/UnderConstruction'
import sun from '@iconify/icons-ph/sun-dim'
import moon from '@iconify/icons-ph/moon-stars'
import { Icon } from '@iconify/react'
import { useState } from 'react'

function App() {
  
  const [val, setVal] = useState("ON")
  function toggle() {
    setVal((val==="ON")?"OFF":"ON");
  }
  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Grid>
        <Switch
          onClick={toggle}
          // checked={false}
          size="xl"
          iconOn={<Icon icon={sun} />}
          iconOff={<Icon icon={moon} />}
        />
        {val}
      </Grid>
      <div style={{ display: 'grid', placeContent: 'center', minHeight: '100vh' }}>
        <UnderConstruction />
        <br />
        <MyFormH></MyFormH>
      </div>
    </NextUIProvider >
  )
}

export default App
