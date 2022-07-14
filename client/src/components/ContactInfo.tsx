import { Container, Row, Spacer, Text, useTheme } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import at from '@iconify/icons-ph/at-duotone'
import phone from '@iconify/icons-ph/phone-duotone'
import clock from '@iconify/icons-ph/clock-duotone'
import mapPin from '@iconify/icons-ph/map-pin-duotone'

export function ContactInfo() {
  const { theme } = useTheme()
  return (
    <div>
      <Container>
        <Text h2>
          Contact us
        </Text>
        <Text>
          Leave your info and we will get back to you within 24 hours
        </Text>
      </Container>
      <Spacer />
      <Container>
        <Row align="center">
          <Text h3>
            <Icon icon={at} color={theme?.colors.secondary.value} />
          </Text>
          <Spacer />
          <div>
            <Text size="0.8em">Email</Text>
            <Text>info@industrial-code.com</Text>
          </div>
        </Row>
        <Spacer />
        <Row align="center">
          <Text h3>
            <Icon icon={phone} color={theme?.colors.secondary.value} />
          </Text>
          <Spacer />
          <div>
            <Text size="0.8em">Phone</Text>
            <Text>+52 81 2892 7509</Text>
          </div>
        </Row>
        <Spacer />
        <Row align="center">
          <Text h3>
            <Icon icon={mapPin} color={theme?.colors.secondary.value} />
          </Text>
          <Spacer />
          <div>
            <Text size="0.8em">Address</Text>
            <Text>Monterrey, Mexico</Text>
          </div>
        </Row>
        <Spacer />
        <Row align="center">
          <Text h3>
            <Icon icon={clock} color={theme?.colors.secondary.value} />
          </Text>
          <Spacer />
          <div>
            <Text size="0.8em">Working hours</Text>
            <Text>9 a.m. - 6 p.m.</Text>
          </div>
        </Row>
      </Container>
    </div>
  )
}
