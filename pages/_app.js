import "../styles/global.css";
//can import global CSS file from here AND ONLY HERE, doesn't work anywhere else

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
