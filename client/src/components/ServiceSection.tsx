import { Button, Container, Row, Spacer, Text } from '@nextui-org/react'
import arrowDown from '@iconify/icons-ph/arrow-down'
import { Icon } from '@iconify/react'


export function ServiceInfo() {
    return (
        <Container justify="center">
            <Text h1>
                We offer smart solutions
            </Text>
            <Text h3>
                Discover our service catalog
            </Text>
            <Spacer y={2}></Spacer>
            <div style={{ display: 'grid', placeContent: 'center' }}>
                <Button iconRight={<Icon icon={arrowDown} />} as="a" rounded auto ghost color="gradient" href="https://aws-bucket-diconsi.s3.us-east-2.amazonaws.com/industrial_code/Industrial-Code.pdf">
                    Download Here
                </Button>
            </div>
        </Container>
    )
}
