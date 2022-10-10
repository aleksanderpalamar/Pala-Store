import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  const [isCreatingCheckoutSession, setCreatingCheckoutSession ] = useState(false);
  async function handleBuyProduct() {
    try {
      setCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceID: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout.');
    }
  }
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <ProductContainer>
        <ImageContainer></ImageContainer>
        <ProductDetails>
          <h1>Carregando...</h1>
          <span>Carregando...</span>

          <p>Carregando...</p>
          <button disabled>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    );
  }

  return (
    <>
      <NextSeo 
        title={product.name + " | Pala Store"}
        description="Aqui você encontra os melhores produtos da cultura pop."
        canonical="https://palastore.vercel.app/"
        twitter={{
          handle: '@devhearts_',
          site: 'https://www.palamarsolutionit.com.br/',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          url: 'https://palastore.vercel.app/',
          title: 'Pala Store',
          description: 'Aqui você encontra os melhores produtos da cultura pop.',          
          images: [
            {
              url: '/favicon.png',
              width: 256,
              height: 256,
              alt: 'Pala Store',
              type: 'image/png',
            }
          ],          
        }}        
      />      
      <ProductContainer>        
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <div>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
          <Link href="/" prefetch>
            <a href="" title="Voltar">
              <ArrowLeft size={20} weight="bold" />
            </a>
          </Link>
          </div>          
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
