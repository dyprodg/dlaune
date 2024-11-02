'use client'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function FadeInSection({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="mt-24 text-foreground flex flex-col w-full">
      <FadeInSection>
        <div className="flex ml-4 md:ml-16 mt-24 mb-24 md:mb-28">
          <h1 className="text-6xl md:text-[10rem]">premium. <br /> minimalistic.</h1>
        </div>
      </FadeInSection>

      {/* Trending */}
      <FadeInSection>
        <div className="flex space-x-4 ml-4 md:ml-12">
          <span className="text-neutral-600 font-bold">new</span>
          <span className="text-4xl md:text-7xl uppercase font-bold">Collection</span>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-full border my-4"></div>
      </FadeInSection>

      <FadeInSection>
        <div className="w-full flex flex-col md:flex-row mt-4 overflow-hidden">
          <FadeInSection>
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
          </FadeInSection>
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Basics */}
      <FadeInSection>
        <div className="flex space-x-4 ml-4 md:mt-12">
          <span className="text-neutral-600 font-bold">01</span>
          <span className="text-4xl md:text-7xl uppercase font-bold">Basics</span>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-full border my-4"></div>
      </FadeInSection>

      <FadeInSection>
        <div className="w-full flex flex-col md:flex-row mt-4 overflow-hidden">
          <FadeInSection>
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
          </FadeInSection>
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* About */}
      <FadeInSection>
        <div className="flex space-x-4 ml-4 md:mt-12">
          <span className="text-neutral-600 font-bold">02</span>
          <span className="text-4xl md:text-7xl uppercase font-bold">about us</span>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-full border my-4"></div>
      </FadeInSection>

      <FadeInSection>
        <div className="w-full flex flex-col md:flex-row p-8 justify-evenly items-center space-x-8">
          <FadeInSection>
            <Image src={'/Dlaune-Logo.svg'} alt="Logo" width={400} height={400} />
          </FadeInSection>
          <FadeInSection>
            <div className="text-4xl md:text-5xl md:w-1/2 uppercase font-bold">
              Our goal is to deliver modern, minimalistic, premium-quality clothing.
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Socials */}
      <FadeInSection>
        <div className="flex space-x-4 ml-4 md:mt-12">
          <span className="text-neutral-600 font-bold">03</span>
          <span className="text-4xl md:text-7xl uppercase font-bold">Socials</span>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="w-full border my-4"></div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex space-x-8 justify-center md:justify-start md:ml-12 my-8">
          <FadeInSection>
            <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
              <FaInstagram />
            </a>
          </FadeInSection>
          <FadeInSection>
            <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
              <FaFacebook />
            </a>
          </FadeInSection>
          <FadeInSection>
            <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
              <FaTwitter />
            </a>
          </FadeInSection>
          <FadeInSection>
            <a href="#" className="text-neutral-600 hover:text-neutral-800 text-3xl hover:scale-105 transition ease-out duration-200">
              <FaTiktok />
            </a>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Impressum */}
      <FadeInSection>
        <div className="mt-16 mb-8 w-full border-t pt-8 text-center text-neutral-600">
          <FadeInSection>
            <h2 className="text-2xl font-bold mb-4">Impressum</h2>
          </FadeInSection>
          <FadeInSection><p>Dlaune Clothing</p></FadeInSection>
          <FadeInSection><p>1234 Fake Street, Zurich, Switzerland</p></FadeInSection>
          <FadeInSection><p>Email: info@dlaune-clothing.com</p></FadeInSection>
          <FadeInSection><p>Phone: +41 123 456 789</p></FadeInSection>
          <FadeInSection><p>VAT-ID: CHE-123.456.789</p></FadeInSection>
          <FadeInSection><p>Managing Director: John Doe</p></FadeInSection>
          <FadeInSection>
            <p className="mt-4 text-sm">Disclaimer: This is a fictitious company, created for demonstration purposes only.</p>
          </FadeInSection>
        </div>
      </FadeInSection>
    </div>
  );
}
