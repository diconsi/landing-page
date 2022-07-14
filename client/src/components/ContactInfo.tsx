import { Icon } from "@iconify/react";
import at from '@iconify/icons-ph/at'
import phone from '@iconify/icons-ph/phone'
import mapPin from '@iconify/icons-ph/map-pin'
import { Container, Row, Spacer, Text } from "@nextui-org/react";

export function ContactInfo() {
    return (
        <div>
            <Text h3>
                Contact Us
            </Text>
            <Container>
                <Row justify="center" align="center">
                    <Text h3>
                        <Icon icon={at}></Icon>
                    </Text>
                    <Spacer x={1} />
                    <Spacer y={4} />
                    <div>
                        <Text size="0.8em">Email</Text>
                        <Text>Email</Text>
                    </div>
                </Row>
                <Row justify="center" align="center">
                    <Text h3>
                        <Icon icon={phone}></Icon>
                    </Text>
                    <Spacer x={1} />
                    <Spacer y={4} />
                    <div>
                        <Text size="0.8em">Phone</Text>
                        <Text>phone</Text>
                    </div>
                </Row>
                <Row justify="center" align="center">
                    <Text h3>
                        <Icon icon={mapPin}></Icon>
                    </Text>
                    <Spacer x={1} />
                    <Spacer y={4} />
                    <div>
                        <Text size="0.8em">Address</Text>
                        <Text>Address</Text>
                    </div>
                </Row>
            </Container>
        </div>
    )
}