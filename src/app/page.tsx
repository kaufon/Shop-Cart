import Image from "next/image";
import image from "../public/imagem-de-fundo-bonita-do-céu-da-natureza-64743176.jpg";
import Link from "next/link";
import { Store } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className="mt-24 text-white relative">
        <Image
          src={image}
          alt="nana"
          className="flex flex-1 w-full h-full  rounded-md"
        />
        <div className="absolute inset-0 flex items-end justify-center flex-col m-20">
          <h1 className="text-7xl font-extrabold text-orange-300">ONLINE</h1>
          <h1 className="text-7xl font-extrabold text-orange-400">SHOPPING</h1>
          <Link
            href="/shop"
            className="bg-purple-600 p-4  rounded-full w-64 font-bold text-center text-5xl hover:bg-purple-900 transition items-center justify-center flex gap-2"
          >
            SHOP
          <Store className="size-10"/>
          </Link>
        </div>
      </div>
    </>
  );
}
