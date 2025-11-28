"use client";

import Link from "next/link";
import MotionSidebar from "./motionSidebar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/_context/themeProvider";
import LanguageSwitcher from "./languageSwitcher";

const SideBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="col-[1/2] row-span-2 py-4 border-r text-black dark:text-amber-50 bg-amber-50 dark:bg-black font-medium max-md:hidden">
        <nav className="h-full flex flex-col justify-between">
          <ul className="flex flex-col gap-8">
            <li>
              <Link href="/work">Animate</Link>
            </li>
            <li>
              <Link href="/studio">Components</Link>
            </li>
            <li>
              <Link href="/blog">Figma</Link>
            </li>
            <li>
              <Link href="/contact">Github</Link>
            </li>
            <li>
              <Link href="/contact">Blog</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            <LanguageSwitcher />
            <button className="flex gap-2" onClick={toggleTheme}>
              <span>Theme</span>
              {theme === "light" ? (
                <span>
                  <Sun />
                </span>
              ) : (
                <span>
                  <Moon />
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      <MotionSidebar />
    </>
  );
};

export default SideBar;
