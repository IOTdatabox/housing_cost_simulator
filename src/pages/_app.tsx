import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from "../components/layout/MainLayout";
import { ClerkProvider } from '@clerk/nextjs'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ClerkProvider>
  );

}
