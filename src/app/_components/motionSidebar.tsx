import React from "react";
import { motion, stagger, Variants } from "motion/react";
import { useDimensions } from "../_utils/useDimensions";
import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../_context/themeProvider";

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 24px 24px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MotionSidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [toggle, setToggle] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="absolute top-0 left-0 h-full md:hidden text-black dark:text-amber-50 bg-amber-50 dark:bg-black">
      <motion.nav
        initial={false}
        animate={toggle ? "open" : "closed"}
        custom={height}
      >
        <motion.div
          ref={containerRef}
          className="bg-amber-100 text-amber-50 absolute top-0 left-0 bottom-0 w-[300px]"
          variants={sidebarVariants}
        />
        <div className="absolute top-20 h-full flex flex-col">
          <motion.ul variants={navVariants} className="flex flex-col gap-8 p-4">
            <motion.li variants={itemVariants}>
              <Link href="/work">Animate</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/studio">Components</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/blog">Figma</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/contact">Github</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/blog">Blog</Link>
            </motion.li>
          </motion.ul>

          <motion.div variants={itemVariants} className="p-4">
            <motion.p variants={itemVariants} className="py-4">
              <LanguageSwitcher />
            </motion.p>
            <motion.p variants={itemVariants}>
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
            </motion.p>
          </motion.div>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className="font-black text-2xl text-black outline-none border-none absolute top-0 left-0 w-12 h-12 select-none"
        >
          {toggle ? "◉" : "◎"}
        </button>
      </motion.nav>
    </div>
  );
};

export default MotionSidebar;
