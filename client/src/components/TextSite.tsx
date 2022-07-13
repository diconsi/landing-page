import { Text, Image, Loading, Row } from "@nextui-org/react";
import Engrane from "../img/engrane.jpg"


export default function MytextSite() {
    return (
        <>
            <Row justify="center">
                <Text blockquote
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    Site Under Construction
                </Text>

                {/* <Image
                    height={180}
                    maxDelay={100}
                    src={Engrane}
                    alt="Pagina en construccion"
                    objectFit="cover"
                /> */}
            </Row>
        </>
    );
}
