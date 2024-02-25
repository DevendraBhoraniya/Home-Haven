"use client";
import Image from "next/image";
import React from "react";
import Placeholder from "@assets/placeholder.jpg";

const Avatar = () => {
  return (
    <div>
      <Image
        src={Placeholder}
        alt="Avatar"
        className="rounded-full"
        height={30}
        width={30}
      />
    </div>
  );
};

export default Avatar;
