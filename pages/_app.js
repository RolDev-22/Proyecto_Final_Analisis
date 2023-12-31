import { useRouter } from 'next/router';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
      <Component {...pageProps} router={router} />
   
  )
}
