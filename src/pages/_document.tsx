/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <>
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.svg" type="image/png" />
          <link rel="stylesheet" href="node_modules/spin.js/spin.css" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
