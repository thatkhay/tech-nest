import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white px-12 py-3 text-black flex justify-between items-center border border-b-gray-600 ">
      <div className="flex items-baseline  gap-2">
        <Image src={logo} alt="Logo" className="h-8 w-9" />
        <div className="text-[1rem] font-bold">TechNest</div>
      </div>
      <div className="flex justify-between items-center w-[30%] text-[1rem] font-semibold [&_a:hover]:text-[#ef3f23] [&_a]:transition-colors">
        <Link href={""}>Buy</Link>
        <Link href={""}>Sell</Link>
        <Link href={""}>Swap</Link>
        <Link href={""}>Categories</Link>
        <Link href={""}>Support</Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <button className=" bg-white border border-purple-600 text-[#77449D] rounded p-4 font-bold">
          Sign In
        </button>
        <button className="bg-[#77449D]  text-white rounded p-4 font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
