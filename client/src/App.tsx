import { Button, Col, NextUIProvider, Row, Spacer, Text, createTheme } from '@nextui-org/react'
import { UnderConstruction } from './components/UnderConstruction'
import { ServiceInfo } from './components/ServiceInfo'
import { ContactForm } from './components/ContactForm'
import Logo from './img/industrial-code-logo-2022.svg'
import { Section } from './components/Section'
import { ContactInfo } from './components/ContactInfo'

function App() {
  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Section>
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <img src={Logo} alt="Industrial Code Logo" height={100} />
          <Spacer y={5} />
          <UnderConstruction />
          <Row justify="center" align="center">
            <Button
              as="a"
              size="lg"
              color="gradient"
              auto
              ghost
              rounded
              href="#service"
            >
              <Text css={{ color: 'inherit' }}>
                Learn more
              </Text>
            </Button>
            <Spacer />
            <Button
              as="a"
              size="lg"
              color="gradient"
              auto
              rounded
              href="#contact"
            >
              <Text css={{ color: 'inherit' }}>
                Notify me
              </Text>
            </Button>
          </Row>
        </div>
      </Section>
      <Section id="contact">
        <Row align="center">
          <Col>
            <ContactInfo />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Section>
      <Section id="service">
        <ServiceInfo />
      </Section>
    </NextUIProvider>
  )
}

export default App
