import type { GetStaticProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import { Container, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { NextSeo } from "next-seo";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps): JSX.Element {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },    
  });
  return (
    <>
      <NextSeo
        title="Pala Store"
        description="Aqui você encontra os melhores produtos da cultura pop."
        canonical="https://palastore.vercel.app/"
        twitter={{
          handle: "@devhearts_",
          site: "https://palamarsolutionit.com.br/",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://palastore.vercel.app/",
          title: "Pala Store",
          description:
            "Aqui você encontra os melhores produtos da cultura pop.",
          images: [
            {
              url: "/favicon.png",
              width: 256,
              height: 256,
              alt: "Pala Store",
              type: "image/png",
            },
          ],
        }}
      />
      <Container ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
