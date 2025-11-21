import { ReactLogo, TailwindLogo, JSLogo, NextjsLogo, TSLogo } from "./logos";

export const Marquee2 = () => {
  return (
    <div className="wrapper text-black dark:text-amber-50 bg-amber-50 dark:bg-black">
      <div className="marquee fadeout-horizontal">
        <div className="marquee-track">
          <div className="marquee-item border-2 border-black dark:border-amber-50">
            <ReactLogo />
          </div>
          <div className="marquee-item border-2 border-black dark:border-amber-50 ">
            <TailwindLogo />
          </div>
          <div className="marquee-item border-2 border-black dark:border-amber-50">
            <JSLogo />
          </div>
          <div className="marquee-item border-2 border-black dark:border-amber-50">
            <NextjsLogo />
          </div>
          <div className="marquee-item border-2 border-black dark:border-amber-50">
            <TSLogo />
          </div>

          <div aria-hidden="true" className="marquee-item border-2 border-black dark:border-amber-50">
            <ReactLogo />
          </div>
          <div aria-hidden="true" className="marquee-item border-2 border-black dark:border-amber-50">
            <TailwindLogo />
          </div>
          <div aria-hidden="true" className="marquee-item border-2 border-black dark:border-amber-50">
            <JSLogo />
          </div>
          <div aria-hidden="true" className="marquee-item border-2 border-black dark:border-amber-50">
            <NextjsLogo />
          </div>
          <div aria-hidden="true" className="marquee-item border-2 border-black dark:border-amber-50">
            <TSLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
