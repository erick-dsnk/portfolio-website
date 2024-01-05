import { navLinks } from "@/config/variables";
import React from "react";
import { LiaDiscord } from "react-icons/lia";
import {
  SlSocialGithub,
  SlSocialSpotify,
} from "react-icons/sl";

const scrollTo = (sectionId: string) => {
  let section = document.querySelector(sectionId);

  section?.scrollIntoView({
    behavior: "smooth",
  });
};

const SideNav = () => {
  let socialIcons = [
    <SlSocialGithub key={0} size={28} />,
    <SlSocialSpotify key={2} size={28} />,
    <LiaDiscord key={3} size={28} />,
  ];

  let links = [
    "https://github.com/erick-dsnk",
    "https://open.spotify.com/user/du8p75yg1h2s39iz2aepn6hio?si=15a53990c5e44676",
    "",
  ];

  return (
    <aside
      id="sidenav"
      className="flex md:hidden justify-center items-center fixed top-0 bottom-0 right-0 min-h-[100vh] w-[min(75vw,400px)] bg-lightnavy sidenavClosed custom-transition"
    >
      <nav className="flex flex-col justify-between items-center w-full">
        <div className="flex items-center justify-center w-full px-6 my-8 text-green xs:before:content-[''] xs:before:h-[1px] xs:before:grow xs:before:bg-lightestslate xs:after:content-[''] xs:after:h-[1px] xs:after:grow xs:after:bg-lightestslate">
          <span className="mx-6 font-bold text-xl">Eric Tabacaru</span>
        </div>

        <div className="flex items-center my-8">
          <ol className="flex flex-col p-0 m-0 list-none">
            {navLinks &&
              navLinks.map(({ name, sectionId }, idx) => (
                <li key={idx} className="my-[15px] relative">
                  <span
                    onClick={() => {
                      scrollTo(sectionId as string);
                    }}
                    className="focus:text-green hover:text-green hover:cursor-pointer custom-transition "
                  >
                    <span className="text-green">
                      0{idx + 1}.<br />
                    </span>{" "}
                    {name}
                  </span>
                </li>
              ))}
          </ol>
        </div>

        <div className="flex w-full items-center justify-center my-8">
          <ul className="flex flex-row w-full items-center justify-center text-lightestslate m-0 px-6 py-0 list-none xs:before:content-[''] xs:before:h-[1px] xs:before:grow xs:before:bg-lightestslate xs:after:content-[''] xs:after:h-[1px] xs:after:grow xs:after:bg-lightestslate">
            {socialIcons.map((icon, idx) => {
              return (
                <li
                  key={idx}
                  className="list-item mx-2 first-of-type:ml-6 last-of-type:mr-6"
                >
                  <a
                    href={links[idx]}
                    target="_blank"
                    className="inline-block py-[10px] lg:p-[10px] hover:text-green hover:translate-y-[-3px] hover:cursor-pointer custom-transition"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
