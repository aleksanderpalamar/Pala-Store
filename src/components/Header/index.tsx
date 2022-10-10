import Image from "next/future/image";
import logoImg from "../../assets/palamar-logo.svg";

import { Header, Text } from "./styles";

export function HeaderComponent() {
  return (
    <Header>
      <Image
        src={logoImg}
        width={64}                                
        alt="" 
      />
      <Text>Pala
        <span>Store</span>
      </Text>
    </Header>
  )
}