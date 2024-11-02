import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-24 text-foreground flex flex-col w-full">
      <div className="flex ml-4 md:ml-16 mt-24 mb-24 md:mb-28">
        <h1 className="text-6xl md:text-[10rem]">premium. <br /> minimalistic.</h1>
      </div>
      <div className="flex space-x-4 ml-4 md:ml-12">
        <span className="text-neutral-600 font-bold">01</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">Collection</span>
      </div>
      <div className="w-full border my-4"></div>
      <div className="w-full flex flex-col md:flex-row  mt-4 overflow-hidden">
        <Link className="md:w-1/3 h-[400px] hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            src='/Labels-Tag-Dlaune.png'
            alt="T-Shirt-Collection"
            width={400}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
        <Link className="md:w-2/3 h-[400px] hover:scale-105 transition ease-out duration-200 mb-8" href={'/shop'}>
          <Image 
            src='/Hoodies.jpeg'
            alt="Hoodies-Collection"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </Link>
      </div>
    </div>
  );
}
