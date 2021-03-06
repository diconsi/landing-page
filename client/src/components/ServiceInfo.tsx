import { Button, Container, Row, Spacer, Text, useTheme } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import arrowDown from '@iconify/icons-ph/arrow-down'
import path from '@iconify/icons-ph/path-duotone'

export function ServiceInfo() {
  const { theme } = useTheme()
  return (
    <Container justify="center">
      <Row align="center">
        <Text h2 color={theme?.colors.neutral.value}>
          <Icon icon={path} />
        </Text>
        <Spacer />
        <div>
          <Text h2>
            We offer smart solutions
          </Text>
          <Text h3>
            Discover our service catalog
          </Text>
        </div>
      </Row>
      <Spacer y={2} />
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <Button
          iconRight={<Icon icon={arrowDown} />}
          as="a"
          rounded
          auto
          color="primary"
          href="https://aws-bucket-diconsi.s3.us-east-2.amazonaws.com/industrial_code/Industrial-Code.pdf"
        >
          Download here
        </Button>
      </div>
    </Container>
  )
}
