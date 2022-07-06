import { Text, Image, Loading } from "@nextui-org/react";
import  Engrane  from "./img/engrane.jpg"

export default function Mybuilding() {
  return (
    <>    
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
      <Loading 
      className="loading"
      type="points-opacity"
      color="secondary"
      size="lg" />
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
