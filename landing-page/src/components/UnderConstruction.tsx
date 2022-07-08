import { Button, Col, Container, Row, Spacer, Text, useTheme } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import barricade from '@iconify/icons-ph/barricade-light'
import trafficCone from '@iconify/icons-ph/traffic-cone-light'

export function UnderConstruction() {
    const { theme } = useTheme()
    return (
        <Container>
            <Row>
                <Text h1 color={theme?.colors.warning.value}>
                    <Col>
                        <Icon icon={trafficCone} />
                        <Icon icon={barricade} />
                    </Col>
                </Text>
                <Col>
                    <Text h1>Under construction</Text>
                    <Text h2>Coming soon</Text>
                    <Text color="dimmed">
                        We are working on our website. <br />
                        Stay tuned for some exciting updates.
                    </Text>
                </Col>
            </Row>
            <Spacer />
            <Row justify="center" align="center">
                <Button size='lg' color="gradient" auto ghost rounded>
                    <Text css={{ color: "inherit" }}>
                        Notify me
                    </Text>
                </Button>
            </Row>
        </Container>
    )
}