import {  ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full bg-[#FF2301] text-3xl text-white fixed top-0 left-0 right-0 h-24 flex justify-center items-center ">
        <div className="w-[75%] flex justify-between items-center">
          <div className="flex justify-center items-center gap-8">
            <Link href={"/"} className="font-medium">
              Home
            </Link>
            <Link href={"/shop"} className=" font-medium">
              Shop
            </Link>
          </div>

          <ShoppingCart className="font-bold size-10" />
        </div>
      </div>
    </>
  );
}
