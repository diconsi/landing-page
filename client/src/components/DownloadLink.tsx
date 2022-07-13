import { Group, Image } from '@mantine/core'
import { Link } from '@nextui-org/react'

export function DownloadLink() {
    return (
        <div>
            <Group position="center">
                <Link color="secondary" href="https://aws-bucket-diconsi.s3.us-east-2.amazonaws.com/industrial_code/Industrial-Code.pdf">
                    Descarga aquí nuestro catalago de servicios
                </Link>
            </Group>
        </div>
    )
}
