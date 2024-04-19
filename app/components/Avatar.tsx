"use client";
import Image from "next/image";
import React from "react";
import Placeholder from "@assets/placeholder.jpg";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        src={src || Placeholder}
        alt="Avatar"
        className="rounded-full"
        height={30}
        width={30}
      />
    </div>
  );
};

export default Avatar;
