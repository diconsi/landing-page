import MyFormH from './components/MyForms'
import { createTheme, Grid, NextUIProvider, Switch } from '@nextui-org/react'
import { UnderConstruction } from './components/UnderConstruction'
import sun from '@iconify/icons-ph/sun-dim'
import moon from '@iconify/icons-ph/moon-stars'
import { Icon } from '@iconify/react'

const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
})

const darkMode = useDarkMode(false);

function App() {
  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Grid>
        <Switch
          checked={false}
          size="xl"
          iconOn={<Icon icon={sun} />}
          iconOff={<Icon icon={moon} />}
        />
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
