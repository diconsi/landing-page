import { Col, Container, Row, Spacer, Text, useTheme } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import barricade from '@iconify/icons-ph/barricade-duotone'
import trafficCone from '@iconify/icons-ph/traffic-cone-duotone'

export function UnderConstruction() {
  const { theme } = useTheme()
  return (
    <Container>
      <Row>
        <Text h2 color={theme?.colors.warning.value}>
          <Icon icon={trafficCone} />
          <Icon icon={barricade} />
        </Text>
        <Col>
          <Text h2>
            Our site is under construction
          </Text>
          <Text h3>
            Stay tuned for some exciting updates
          </Text>
        </Col>
      </Row>
      <Spacer />
    </Container>
  )
}
