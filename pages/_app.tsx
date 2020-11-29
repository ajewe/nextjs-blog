import "../styles/global.css";
import { AppProps } from "next/app";
//can import global CSS file from here AND ONLY HERE, doesn't work anywhere else

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
