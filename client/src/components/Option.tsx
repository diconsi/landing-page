import { createTheme, Grid, NextUIProvider, Switch } from '@nextui-org/react'
import { UnderConstruction } from './UnderConstruction'
import sun from '@iconify/icons-ph/sun-dim'
import moon from '@iconify/icons-ph/moon-stars'
import { Icon } from '@iconify/react'
import { ContactForm } from './ContactForm'
import { DownloadLink } from './DownloadLink'

export function Option() {
    return (
        <div>
            <NextUIProvider theme={createTheme({ type: 'dark' })}>
                <div style={{ display: 'grid', placeContent: 'center' }}>
                    <UnderConstruction />
                </div>
                <DownloadLink></DownloadLink>
                <div style={{ display: 'grid', placeContent: 'center', minHeight: '80vh' }}>
                    <ContactForm></ContactForm>
                </div>
            </NextUIProvider >
        </div>
    )
}

