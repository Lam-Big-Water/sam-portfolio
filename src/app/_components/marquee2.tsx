import { ReactLogo, TailwindLogo, JSLogo, NextjsLogo, TSLogo } from "./logos";

export const Marquee2 = () => {
  return (
    <div className="wrapper">
      <div className="marquee fadeout-horizontal">
        <div className="marquee-track">
          <div className="marquee-item">
            <ReactLogo />
          </div>
          <div className="marquee-item">
            <TailwindLogo />
          </div>
          <div className="marquee-item">
            <JSLogo />
          </div>
          <div className="marquee-item">
            <NextjsLogo />
          </div>
          <div className="marquee-item">
            <TSLogo />
          </div>

          <div aria-hidden="true" className="marquee-item">
            <ReactLogo />
          </div>
          <div aria-hidden="true" className="marquee-item">
            <TailwindLogo />
          </div>
          <div aria-hidden="true" className="marquee-item">
            <JSLogo />
          </div>
          <div aria-hidden="true" className="marquee-item">
            <NextjsLogo />
          </div>
          <div aria-hidden="true" className="marquee-item">
            <TSLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
