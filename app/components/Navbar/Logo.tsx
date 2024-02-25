"use client";
import Image from "next/image";
import React from "react";
import LogoImg from "@assets/logo.png";
import LogoName from "@assets/logo_name.png";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2 justify-center mx-3">
      <Image
        src={LogoImg}
        alt="HomeHaven"
        height={40}
        width={40}
        className="hidden md:block cursor-pointer"
      />
      <p className="text-rose-500 text-xl font-bold hidden md:block md:text-base text-wrap">
        HomeHaven
      </p>
    </div>
  );
};

export default Logo;
