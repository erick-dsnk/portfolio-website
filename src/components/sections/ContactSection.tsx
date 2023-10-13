const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col min-h-[100vh] max-w-[600px] w-full"
    >
      <h2 className="flex items-center relative w-full mt-2.5 mb-10 text-[clamp(26px,5vw,32px)] text-lightestslate [font-weight:600] [line-height:1.1] before:![content:'03.'] before:[font-weight:400] before:font-mono before:text-green before:mr-2.5 before:relative before:bottom-1 before:text-[clamp(16px,3vw,20px)] after:![content:''] after:relative after:w-full md:after:w-[200px] lg:after:w-[356px] after:h-[1px] after:bg-lightestnavy after:ml-2.5 md:after:ml-5">
        Contact
      </h2>

      <div className="flex flex-col w-full items-center mt-10">
        <h2 className="text-lightestslate text-[clamp(40px,5vw,60px)] [font-weight:600] [line-height:1.1]">
          Get in touch!
        </h2>

        <p className="max-w-[450px] text-center mt-10">
          If you have a question or inquiry, interested in my services, or just
          want to say hello, my inbox is always open!
        </p>

        <a
          className="text-green text-center font-mono bg-transparent border border-green rounded max-w-[150px] h-[60px] py-[1.25rem] px-[1.75rem] [line-height:1] text-[14px] mt-12 hover:bg-green hover:cursor-pointer hover:text-lightnavy custom-transition"
          href="mailto:erick.8bld@gmail.com"
        >
          Say hello!
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
