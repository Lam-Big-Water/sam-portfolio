import {
  ReactLogo,
  TailwindLogo,
  JSLogo,
  NextjsLogo,
  TSLogo,
} from "./logos";

export const Marquee = () => {
  return (
    <div className="wrapper ">
      <div
        className="marquee fadeout-horizontal"
        style={{ "--numItems": "5" } as React.CSSProperties}
      >
        <div className="marquee-track">
          <div
            className="marquee-item"
            style={{ "--item-position": "1" } as React.CSSProperties}
          >
            <ReactLogo />
          </div>

          <div
            className="marquee-item"
            style={{ "--item-position": "2" } as React.CSSProperties}
          >
            <TailwindLogo />
          </div>

          <div
            className="marquee-item"
            style={{ "--item-position": "3" } as React.CSSProperties}
          >
            <NextjsLogo />
          </div>

          <div
            className="marquee-item"
            style={{ "--item-position": "4" } as React.CSSProperties}
          >
            <JSLogo />
          </div>
          <div
            className="marquee-item"
            style={{ "--item-position": "5" } as React.CSSProperties}
          >
            <TSLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
