"use client";

import Link from "next/link";
import MotionSidebar from "./motionSidebar";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/_context/themeProvider";

const SideBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="col-[1/2] row-span-2 py-4 border-r text-black dark:text-amber-50 bg-amber-50 dark:bg-black font-medium max-md:hidden">
        <nav className="h-full flex flex-col justify-between">
          <ul className="flex flex-col gap-8">
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/studio">Studio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div>
            <p className="py-4">@MagazineDope</p>
            <p>Subscribe</p>

            <button onClick={toggleTheme}>
              {theme === "light" ? <Sun /> : <Moon />}
            </button>
          </div>
        </nav>
      </div>

      <MotionSidebar />
    </>
  );
};

export default SideBar;
