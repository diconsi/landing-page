import { Text, Image, Loading, Row, Spacer } from "@nextui-org/react";
import Engrane from "../img/engrane.jpg"
import { DownloadLink } from "./DownloadLink";

export default function Mybuilding() {
  return (
    <>
      <DownloadLink></DownloadLink>
      <Spacer y={2} />
      <Image
        height={180}
        maxDelay={100}
        src={Engrane}
        alt="Pagina en construccion"
        objectFit="cover"
      />

    </>
  );
}
