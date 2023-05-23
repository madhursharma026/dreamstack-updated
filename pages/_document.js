import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ overflowX: "hidden" }}>
      <Head />
      <body>
        <Main />
        <head>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <NextScript />
      </body>
    </Html>
  )
}
