import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-24 text-foreground flex flex-col w-full">
      <div className="flex ml-4 md:ml-16 mt-24 mb-24 md:mb-28">
        <h1 className="text-6xl md:text-[10rem]">premium. <br /> minimalistic.</h1>
      </div>

      {/* Trending */}
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

      {/* Basics */}
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

      {/* About */}
      <div className="flex space-x-4 ml-4 md:mt-12">
        <span className="text-neutral-600 font-bold">02</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">about us</span>
      </div>
      <div className="w-full border my-4"></div>
      <div className="w-full flex flex-col md:flex-row p-8 justify-evenly items-center space-x-8">
        <div>
          <Image
            src={'/Dlaune-Logo.svg'}
            alt="Logo"
            width={400}
            height={400}
          />
        </div>
        <div className="text-4xl md:text-5xl md:w-1/2 uppercase font-bold">
          Our goal is to deliver modern, minimalistic, premium-quality clothing.
        </div>
      </div>
      <div className="w-full">
        <div className="text-2xl md:text-3xl md:w-1/2 uppercase text-center md:text-start md:ml-12">
          We achieve this with Swiss-made fabrics and hand-printed designs.
        </div>
      </div>
      <div className="w-full my-8">
        <div className="text-xl md:text-2xl md:w-1/2 uppercase text-center md:text-start md:ml-12 text-neutral-700">
          Each piece is crafted with attention to detail, ensuring longevity and style. We prioritize sustainable practices and high-quality materials to provide a product that meets our rigorous standards. Designed for those who value both elegance and durability.
        </div>
      </div>

      {/* Socials */}
      <div className="flex space-x-4 ml-4 md:mt-12">
        <span className="text-neutral-600 font-bold">03</span>
        <span className="text-4xl md:text-7xl uppercase font-bold">Socials</span>
      </div>
      <div className="w-full border my-4"></div>

      <div className="w-full flex flex-col md:flex-row  mt-4 overflow-hidden">
        <div className="md:w-1/3 h-[400px] mb-8" >
          <Image 
            quality={100}
            src='/social-1.JPG'
            alt="Model"
            width={400}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div className="md:w-1/3 h-[400px] mb-8">
          <Image 
            quality={100}
            src='/social-2.JPG'
            alt="me-working"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div className="md:w-1/3 h-[400px] mb-8">
          <Image 
            className="bg-white"
            quality={100}
            src='/Rose.svg'
            alt="rose"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="flex space-x-8 justify-center md:justify-start md:ml-12 my-8">
        <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
          <FaInstagram />
        </a>
        <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
          <FaFacebook />
        </a>
        <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
          <FaTwitter />
        </a>
        <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
          <FaTiktok />
        </a>
      </div>

      {/* Impressum */}
      <div className="mt-16 mb-8 w-full border-t pt-8 text-center text-neutral-600">
        <h2 className="text-2xl font-bold mb-4">Impressum</h2>
        <p>Dlaune Clothing</p>
        <p>1234 Fake Street, Zurich, Switzerland</p>
        <p>Email: info@dlaune-clothing.com</p>
        <p>Phone: +41 123 456 789</p>
        <p>VAT-ID: CHE-123.456.789</p>
        <p>Managing Director: John Doe</p>
        <p className="mt-4 text-sm">
          Disclaimer: This is a fictitious company, created for demonstration purposes only.
        </p>
      </div>
    </div>
  );
}
