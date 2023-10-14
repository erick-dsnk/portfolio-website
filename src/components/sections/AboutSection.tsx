"use client";

import { useCallback, useEffect } from "react";
import AboutImage from "../AboutImage";

// TODO: Remove lorem ipsum and add real text
// TODO: Fix scroll effect on mobile devices
const AboutSection = () => {
  const onScroll = useCallback((e: Event) => {
    const { scrollY } = window;
    const image = document.querySelector(".about-wrapper");

    let imagePos = image?.getBoundingClientRect().top;

    if (imagePos) {
      if (imagePos - scrollY < 200 && imagePos - scrollY > -200) {
        image?.querySelector(".about-overlay")?.setAttribute("opacity", "0");
      } else {
        image?.querySelector(".about-overlay")?.setAttribute("opacity", "1");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-start justify-center min-h-[100vh] max-w-[900px] py-[60px] xs:py-[80px] md:py-[100px] px-0 text-lightestslate"
    >
      <h2 className="flex items-center relative w-full mt-2.5 mb-10 text-[clamp(26px,5vw,32px)] text-lightestslate [font-weight:600] [line-height:1.1] before:![content:'01.'] before:[font-weight:400] before:font-mono before:text-green before:mr-2.5 before:relative before:bottom-1 before:text-[clamp(16px,3vw,20px)] after:![content:''] after:relative after:w-full md:after:w-[200px] lg:after:w-[356px] after:h-[1px] after:bg-lightestnavy after:ml-2.5 md:after:ml-5">
        About
      </h2>

      <div className="flex flex-col items-center md:items-start md:grid [grid-template-columns:2fr_1fr] md:[gap:50px]">
        <div>
          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            Hey! My name is Eric and I am a software engineer that specializes
            in creating projects that live on the internet. My interest for
            programming started back when I was 10 years old when I got a
            beginner&apos;s book about Python. And that is how my burning
            passion for programming first sparked.
          </p>

          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            Along the years, I have ventured into many domains of programming.
            From systems programming to web development, from machine learning
            to Discord bots, I have tried a little bit of everything until I
            settled on the web. I now work as a freelance web developer and also
            work on other machine learning side projects!
          </p>

          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            If you are interested in my services, have an inquiry about one of
            my projects or want to collaborate with me on a project, go ahead
            and{" "}
            <span
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-green hover:cursor-pointer "
            >
              contact me!
            </span>
          </p>
        </div>

        <AboutImage />
      </div>
    </section>
  );
};

export default AboutSection;
