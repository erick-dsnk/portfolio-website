"use client";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-start justify-center min-h-[100vh] h-[100vh] max-w-[1000px] p-0 text-lightestslate hero-section"
    >
      <h1 className="font-mono text-green text-[clamp(14,5vw,16)] [font-weight:400] mb-5 xs:mb-[30px] ml-0.5 xs:ml-1 [line-height:1.1]">
        Hi, my name is
      </h1>

      <h2 className="p-0 m-0 text-[clamp(40px,8vw,80px)] mb-[10px] [line-height:1.1] [font-weight:600]">
        Eric Tabacaru.
      </h2>

      <h3 className="p-0 m-0 text-[clamp(40px,8vw,80px)] mt-[5px] text-slate [line-height:0.9] [font-weight:600]">
        I turn ideas into reality.
      </h3>

      <p className="pt-5 max-w-[540px] text-slate">
        I am a software engineer specialized in turning dreams into real,
        tangible projects. I currently work as a freelancing web developer,
        building apps and websites for a range of domains.
      </p>
    </section>
  );
};

export default HeroSection;
