import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-24 text-foreground flex flex-col w-full">
      <div className="flex ml-4 md:ml-16 mt-24 mb-24 md:mb-28">
        <h1 className="text-6xl md:text-[10rem]">premium. <br /> minimalistic.</h1>
      </div>
      <div className="flex space-x-4 ml-4 md:ml-12">
        <span className="text-neutral-600 font-bold">new</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">Collection</span>
      </div>
      <div className="w-full border my-4"></div>
      <div className="w-full flex flex-col md:flex-row  mt-4 overflow-hidden">
        <Link className="md:w-1/3 h-[400px] hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            quality={100}
            src='/Labels-Tag-Dlaune.png'
            alt="T-Shirt-Collection"
            width={400}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
        <Link className="md:w-2/3 h-[400px] hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            quality={100}
            src='/Hoodies.png'
            alt="Hoodies-Collection"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
      </div>
      <div className="flex space-x-4 ml-4 md:mt-12">
        <span className="text-neutral-600 font-bold">01</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">Basics</span>
      </div>
      <div className="w-full border my-4"></div>
      <div className="w-full flex flex-col md:flex-row  mt-4 overflow-hidden">
        <Link className="hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            quality={100}
            src='/Hanger-Tee-Front-Rose.png'
            alt="Hanger-Tee-Back-Rose"
            width={800}
            height={800}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
        <Link className="hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            quality={100}
            src='/Hoodie-Basic-Black-Front.png'
            alt="Hoodies-Collection"
            width={800}
            height={800}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
      </div>
      <div className="flex space-x-4 ml-4 md:mt-12">
        <span className="text-neutral-600 font-bold">02</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">about us</span>
      </div>
      <div className="w-full border my-4"></div>
      <div className="w-full flex flex-col md:flex-row p-8 justify-evenly items-center space-x-8">
        <div className="">
          <Image
            src={'/Dlaune-Logo.svg'}
            alt="Logo"
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className="text-4xl md:text-5xl md:w-1/2 uppercase font-bold">
          Our goal is to deliver modern, minimalistic, premium quality clothings.
        </div>
      </div>
      <div className="w-full">
        <div className="text-2xl md:text-3xl md:w-1/2 uppercase text-center md:text-start md:ml-12">
          We archive this with swiss made fabrics and hand printed designs.
        </div>
      </div>
    </div>
  );
}
