"use client";
import { navLinks } from "@/config/variables";
import useScrollDirection from "@/hooks/useScrollDirection";
import useScrollLock from "@/hooks/useScrollLock";
import { useClickAway } from "@uidotdev/usehooks";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    let section = document.querySelector(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useScrollLock(isOpen, "__next");

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

  useEffect(() => {
    let sidenav = document.querySelector("#sidenav");
    let body = document.querySelector("body");

    if (sidenav && body) {
      if (isOpen === true) {
        sidenav.classList.replace("sidenavClosed", "sidenavOpened");
        body.classList.add("bg-blur");
      } else {
        sidenav.classList.replace("sidenavOpened", "sidenavClosed");
        body.classList.remove("bg-blur");
      }
    }
  }, [isOpen]);

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

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
      })()} h-[100px] px-[25px] md:px-[40px] lg:px-[50px] backdrop-blur opacity-90 z-10 custom-transition font-mono md:text-sm text-lg text-lightestslate`}
    >
      <nav className="flex justify-between items-center relative w-full z-20">
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Image
            src="/logo.png"
            alt="Eric Tabacaru Logo"
            height={42}
            width={42}
          />
        </div>

        <div className="hidden md:flex items-center">
          <ol className="flex flex-row p-0 m-0 list-none">
            {navLinks &&
              navLinks.map(({ name, sectionId }, idx) => (
                <li key={idx} className="mx-[15px] relative">
                  <span
                    onClick={() => {
                      scrollTo(sectionId as string);
                    }}
                    className="hover:text-green hover:cursor-pointer custom-transition"
                  >
                    <span className="text-green">0{idx + 1}.</span> {name}
                  </span>
                </li>
              ))}
          </ol>
        </div>

        <div className="block md:hidden side-container" ref={ref as any}>
          <Hamburger
            toggled={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            direction="left"
            size={30}
            color="#64ffda"
            rounded={true}
          />

          <SideNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
