import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

// _document is necessary to have to propagate [lang] property

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
      <Head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#0f0f0f" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}
export default MyDocument;
