import { useRouter } from 'next/router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (

      <Component {...pageProps} router={router} />
     
  )
}
