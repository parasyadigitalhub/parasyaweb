"use client";
// pages/index.js (or your preferred page in Next.js)
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        {/* Link to custom CSS files if necessary */}
        {/* <link rel="stylesheet" href="/path/to/custom.css" /> */}
        <title>Koncepts Lab | AI, Digital & CX Services</title>
      </Head>
      
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="relative overflow-hidden">
          {/* Add any animations you need here */}
          <div className="animate__animated animate__fadeIn animate__delay-1s"> {/* Animation example */}
            <div className="flex justify-center items-center p-4">
              <h1 className="text-4xl font-bold text-center mb-10">Welcome to Koncepts Lab</h1>
              <p className="text-lg">We're a forward-thinking solutions provider specializing in digital transformation, AI integration, and exceptional customer experiences (CX).</p>
            </div>

            <div className="grid grid-cols-4 gap-4 py-8">
              {/* Replace with your logos or any content */}
              <div className="flex justify-center items-center p-4 border border-white animate__animated animate__bounceIn">
                <Image src="/path/to/logo1.svg" alt="Logo 1" width={100} height={50} />
              </div>
              <div className="flex justify-center items-center p-4 border border-white animate__animated animate__bounceIn">
                <Image src="/path/to/logo2.svg" alt="Logo 2" width={100} height={50} />
              </div>
              <div className="flex justify-center items-center p-4 border border-white animate__animated animate__bounceIn">
                <Image src="/path/to/logo3.svg" alt="Logo 3" width={100} height={50} />
              </div>
              <div className="flex justify-center items-center p-4 border border-white animate__animated animate__bounceIn">
                <Image src="/path/to/logo4.svg" alt="Logo 4" width={100} height={50} />
              </div>
              {/* Add more logos here as needed */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
