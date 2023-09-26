import { navLinks } from "@/config/variables";
import React from "react";

import Link from "next/link";

const SideNav = () => {
  return (
    <aside
      id="sidenav"
      className="flex md:hidden fixed top-0 bottom-0 right-0 min-h-[100vh] w-[min(75vw,400px)] justify-center items-center bg-lightnavy sidenavClosed transition"
    >
      <nav className="flex justify-between items-center w-full flex-col">
        <div className="flex items-center">
          <ol className="flex flex-col p-0 m-0 list-none">
            {navLinks &&
              navLinks.map(({ name, url }, idx) => (
                <li key={idx} className="my-[15px] relative">
                  <Link href={url} className="hover:text-green transition">
                    <span className="text-green">
                      0{idx + 1}.<br />
                      </span>{" "}
                    {name}
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
