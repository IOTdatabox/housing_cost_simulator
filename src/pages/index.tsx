import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })
import { UserButton } from "@clerk/nextjs";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired page
    router.push('/dashboard');
  }, []);

  const handleClick = () => {
    // Redirect to the desired page
    router.push('/dashboard');
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <p>Profile Edit</p>
      <UserButton afterSignOutUrl="/"/>
      <button onClick={handleClick}>Continue</button>
      </div>
    </main>
  )
}
