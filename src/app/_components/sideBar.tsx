"use client";

import Link from "next/link";
import MotionSidebar from "./motionSidebar";

const SideBar = () => {

  return (
    <>
      <div className="col-[1/2] row-span-2 py-4 border-r border-black text-black font-medium max-md:hidden">
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
          </div>
        </nav>
      </div>

      <MotionSidebar />
    </>
  );
};

export default SideBar;
