"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-8 max-w-5xl mx-auto animate-fade-down animate-delay-[2000ms]">
      {/* Logo */}
      <div>
        <Image priority src={Logo} alt="Joaquin Lopez" width={60} height={60} />
      </div>

      {/* Mobile Navigation Links */}
      <div className="flex flex-row items-center gap-4 sm:hidden">
        <a
          href="https://www.linkedin.com/in/joaquin-lopez-a955451a8/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://www.github.com/joaquin-lopez" target="_blank" rel="noreferrer" className="cursor-pointer">
          <FaGithub className="text-2xl" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex flex-row items-center justify-end">
        {/* Desktop Links */}
        <div className="ml-8">About</div>
        <div className="ml-8">Experience</div>
        <div className="ml-8">Projects</div>
        <a
          href="https://www.linkedin.com/in/joaquin-lopez-a955451a8/"
          target="_blank"
          rel="noreferrer"
          className="ml-8 cursor-pointer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://www.github.com/joaquin-lopez" target="_blank" rel="noreferrer" className="ml-8 cursor-pointer">
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </nav>
  );
};
