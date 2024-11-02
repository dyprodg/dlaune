import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 text-foreground flex flex-col w-full">
      <div className="flex ml-16 mt-24  mb-24 md:mb-28">
        <h1 className="text-[10rem]">premium. <br/>minimalstic.</h1>
      </div>
      <div className="flex space-x-4 ml-12">
        <span className="text-neutral-600 font-bold">01</span>
        <span className="text-6xl md:text-7xl uppercase font-bold">Collection</span>
        </div>
        <div className="w-full border my-4"></div>
    </div>
  );
}
