import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Phones limit how many WebGL canvases a page can hold, so plain icons are used there.
const mobileQuery = "(max-width: 768px), (pointer: coarse)";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(mobileQuery).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(mobileQuery);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            <div className="w-full h-full rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card">
              <img
                src={technology.icon}
                alt={technology.name}
                loading="lazy"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
