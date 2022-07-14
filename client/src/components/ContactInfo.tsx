import { Container, Row, Spacer, Text } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import at from '@iconify/icons-ph/at'
import phone from '@iconify/icons-ph/phone'
import mapPin from '@iconify/icons-ph/map-pin'

export function ContactInfo() {
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
      <Spacer y={4} />
      <Container>
        <Row align="center">
          <Text h3>
            <Icon icon={at} />
          </Text>
          <Spacer x={1} />
          <div>
            <Text size="0.8em">Email</Text>
            <Text>Rene@gmail.com</Text>
          </div>
        </Row>
        <Spacer y={1} />
        <Row align="center">
          <Text h3>
            <Icon icon={phone} />
          </Text>
          <Spacer x={1} />
          <div>
            <Text size="0.8em">Phone</Text>
            <Text>+52 81 8250 2376 </Text>
          </div>
        </Row>
        <Spacer y={1} />
        <Row align="center">
          <Text h3>
            <Icon icon={mapPin} />
          </Text>
          <Spacer x={1} />
          <div>
            <Text size="0.8em">Address</Text>
            <Text>Monterrey, Mexico</Text>
          </div>
        </Row>
      </Container>
    </div>
  )
}
