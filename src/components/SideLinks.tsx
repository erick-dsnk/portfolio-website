import { LiaDiscord } from "react-icons/lia";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialSpotify,
} from "react-icons/sl";

const SideLinks = ({ side }: { side: "left" | "right" }) => {
  let socialIcons = [
    <SlSocialGithub key={0} size={20} />,
    <SlSocialInstagram key={1} size={20} />,
    <SlSocialSpotify key={2} size={20} />,
    <LiaDiscord key={3} size={20} />,
  ];

  if (side === "left") {
    return (
      <div className="fixed w-5 lg:w-10 left-5 lg:left-10 right-auto bottom-0">
        <ul className="flex flex-col items-center text-lightestslate m-0 p-0 list-none after:content-[''] after:w-[1px] after:h-[90px] after:bg-lightestslate after:block">
          {socialIcons.map((icon, idx) => {
            return (
              <li key={idx} className="w-full list-item last-of-type:mb-5">
                <a className="inline-block py-[10px] lg:p-[10px] hover:text-green hover:translate-y-[-3px] hover:cursor-pointer transition">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (side === "right") {
    return (
      <div className="fixed w-5 lg:w-10 right-5 lg:right-10 left-auto bottom-0">
        <div className="flex flex-col items-center text-lightestslate m-0 p-0 after:content-[''] after:w-[1px] after:h-[90px] after:bg-lightestslate after:block">
          <a
            className="font-mono text-[14px] [line-height:18px] [letter-spacing:0.1em] [writing-mode:vertical-rl] mb-5 p-2.5 hover:text-green hover:translate-y-[-3px] hover:cursor-pointer transition"
            href="mailto:erick.8bld@gmail.com"
          >
            erick.8bld@gmail.com
          </a>
        </div>
      </div>
    );
  } else {
    throw new Error("Invalid side");
  }
};

export default SideLinks;
