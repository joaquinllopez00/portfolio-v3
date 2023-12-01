"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg"; // Make sure to import your logo correctly

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  return (
    <nav className="flex justify-between items-center py-8 max-w-5xl mx-auto animate-fade-down animate-delay-[2000ms]">
      <div>
        <Image priority src={Logo} alt="Joaquin Lopez" width={60} height={60} />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${isOpen ? "transform rotate-45" : ""} h-0.5 w-8 bg-black my-1 transition duration-300`}></div>
        <div className={`${isOpen ? "opacity-0" : ""} h-0.5 w-8 bg-black my-1 transition duration-300`}></div>
        <div
          className={`${isOpen ? "transform -rotate-45" : ""} h-0.5 w-8 bg-black my-1 transition duration-300`}
        ></div>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row items-center md:justify-end absolute md:static top-16 right-0 py-8 px-4 w-full bg-white md:bg-transparent`}
      >
        <div className="mt-4 md:mt-0 md:ml-8">About</div>
        <div className="mt-4 md:mt-0 md:ml-8">Experience</div>
        <div className="mt-4 md:mt-0 md:ml-8">Projects</div>
      </div>
    </nav>
  );
};
