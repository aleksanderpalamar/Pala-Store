import Link from "next/link";
import { FooterContainer } from "./styles";

export function FooterComponent() {
  return (
    <FooterContainer>
      <p>
        Desenvolvido com ❤️ por{" "}
        <Link href="https://palamarsolutionit.com.br/" target="_blank">
          <a>Palamar</a>
        </Link>
      </p>
    </FooterContainer>
  );
}