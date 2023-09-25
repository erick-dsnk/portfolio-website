"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Contact", url: "/" },
  ];

  return (
    <header
      className={`flex justify-between items-center fixed top-0 w-full ${(() => {
        let className = "";

        if (!scrolledToTop) {
          if (scrollDirection === "down") {
            className = "scrollingDownNav";
          } else {
            className = "scrollingUpNav";
          }
        }

        return className;
      })()} h-[100px] px-[25px] md:px-[40px] lg:px-[50px] backdrop-blur opacity-90 z-10 transition font-mono text-sm`}
    >
      <nav className="flex justify-between items-center relative w-full z-20">
        <div>Eric Tabacaru</div>

        <div className="hidden md:flex items-center text-lightestslate">
          <ol className="flex flex-row p-0 m-0 list-none">
            {navLinks &&
              navLinks.map(({ name, url }, idx) => (
                <li key={idx} className="mx-[15px] relative">
                  <Link href={url} className="hover:text-green transition">
                    <span className="text-green">0{idx + 1}.</span> {name}
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
