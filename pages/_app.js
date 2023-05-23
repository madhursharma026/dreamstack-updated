import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'Inter,X-LocaleSpecific,sans-serif' }}>
      <Component {...pageProps} />
    </div>
  )
}
