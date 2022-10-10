import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { ArrowLeft } from "phosphor-react";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Head from "next/head";
import { NextSeo } from "next-seo";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <NextSeo 
        title={product.name + " | compra realizada com sucesso!"}
        noindex={true}
      />
      <SuccessContainer>
        <h1>Compra efetuada com sucesso!</h1>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={120}
            height={110}
            alt={product.name}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> você receberá um email com os dados do
          envio do produto, por favor aguarde.
        </p>
        <Link href="/" prefetch>
          <a title="Voltar ao catálogo">
            <ArrowLeft size={32} weight="bold" />
          </a>
        </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionID = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionID, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
