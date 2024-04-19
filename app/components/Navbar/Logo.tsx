"use client";

import Image from "next/image";
import React from "react";
import LogoImg from "@assets/logo.png";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row items-center gap-2 justify-center mx-3 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={LogoImg}
        alt="HomeHaven"
        height={40}
        width={40}
        className="hidden md:block "
      />
      <p className="text-rose-500 text-xl font-bold hidden md:block md:text-base text-wrap">
        HomeHaven
      </p>
    </div>
  );
};

export default Logo;
