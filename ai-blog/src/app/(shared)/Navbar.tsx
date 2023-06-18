import Link from "next/link";
import { FC } from "react";
import SocialLinks from "./SocialLinks";

interface NavBarProps {}

const Navbar: FC<NavBarProps> = ({}) => {
  return (
    <header className="mb-5">
      <nav className="flex bg-wh-900 text-wh-10 justify-between items-center w-full px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks isDark={false} />
        </div>
        <div className="flex justify-between gap-10 items-center">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mb-4 mt-5 mx-10 ">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="mt-3 text-sm">
            Blog dedicated towards AI generation and job automation.
          </p>
        </div>
        <div className="basis-full h-32 bg-wh-500 relative">Image</div>
      </div>
      <hr className="border-1 mx-10"></hr>
    </header>
  );
};

export default Navbar;
