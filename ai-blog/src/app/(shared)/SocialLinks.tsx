import { FC } from "react";
import Image from "next/image";
import Twitter from "@/assets/social_twitter.png";
import Facebook from "@/assets/social_facebook.png";
import Instagram from "@/assets/social_instagram.png";
import Google from "@/assets/social_google.png";
import Discord from "@/assets/social_discord.png";

interface SocialLinksProps {
  isDark?: boolean;
}

const SocialLinks: FC<SocialLinksProps> = ({ isDark = false }) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          src={Twitter}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="twitter"
          width={20}
          height={20}
        />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          src={Facebook}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="facebook"
          width={20}
          height={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        {" "}
        <Image
          src={Instagram}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="instagram"
          width={20}
          height={20}
        />
      </a>

      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          src={Google}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="google"
          width={20}
          height={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        {" "}
        <Image
          src={Discord}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="discord"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
