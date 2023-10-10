"use client";

import AboutImage from "../AboutImage";

// TODO: Remove lorem ipsum and add real text

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-center min-h-[100vh] h-[100vh] max-w-[900px] p-0 text-lightestslate"
    >
      <h2 className="flex items-center relative w-full mt-2.5 mb-10 text-[clamp(26px,5vw,32px)] text-lightestslate [font-weight:600] [line-height:1.1] before:![content:'01.'] before:[font-weight:400] before:font-mono before:text-green before:mr-2.5 before:relative before:bottom-1 before:text-[clamp(16px,3vw,20px)] after:![content:''] after:relative after:w-full md:after:w-[200px] lg:after:w-[356px] after:h-[1px] after:bg-lightestnavy after:ml-2.5 md:after:ml-5">
        About Me
      </h2>

      <div className="flex flex-col items-center md:items-start md:grid [grid-template-columns:2fr_1fr] [gap:50px]">
        <div>
          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>

          <p className="text-slate font-sans text-xl [line-height:1.3_!important] mb-4">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </div>

        <AboutImage />
      </div>
    </section>
  );
};

export default AboutSection;
