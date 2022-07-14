import { Button, Col, Container, Row, Spacer, Text, useTheme } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import barricade from '@iconify/icons-ph/barricade-light'
import trafficCone from '@iconify/icons-ph/traffic-cone-light'

export function UnderConstruction() {
    const { theme } = useTheme()
    return (
        <Container>
            <Row>
                <Text h2 color={theme?.colors.secondary.value}>
                    <Col>
                        <Icon icon={trafficCone} />
                        <Icon icon={barricade} />
                    </Col>
                </Text>
                <Col>
                    <Text h2>Under construction</Text>
                    <Text h3>Coming soon</Text>
                    <Text color="dimmed">
                        We are working on our website. <br />
                        Stay tuned for some exciting updates.
                    </Text>
                </Col>
            </Row>
            <Spacer />
        </Container>
    )
}