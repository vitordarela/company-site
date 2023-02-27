import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11095834681" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                            function gtag() {dataLayer.push(arguments)}
                            gtag('js', new Date());`,
                        }}
                    />
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