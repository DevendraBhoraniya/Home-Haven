"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegistrationModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "../types";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const RentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    // Function to handle clicks outside of the section
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false); // Close isOpen if clicked outside
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const onRent = useCallback(() =>{
    if (!currentUser){
      return LoginModal.onOpen();
    }
     RentModal.onOpen();
  }, [currentUser , LoginModal , RentModal])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Haven Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image}/>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={ref}
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm border border-gray-300"
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem 
                onClick={() => router.push('/trips')} 
                label="My Trips" 
                />
                <MenuItem 
                onClick={() => router.push('/reservations')} 
                label="My Reservations" 
                />
                <MenuItem 
                onClick={() => router.push('/favorites')} 
                label="My Favorites" 
                />
                <MenuItem 
                onClick={() => router.push('/properties')} 
                label="My Properties" 
                />
                <MenuItem 
                onClick={RentModal.onOpen} 
                label="Haven My Home" 
                />
                <hr />
                <MenuItem 
                onClick={() => signOut()}
                 label="Logout" 
                 />
              </>
            ) : (
              <>
                <MenuItem onClick={LoginModal.onOpen} label="Login" />
                <MenuItem onClick={RegisterModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
