import { HeaderWithLeftDivide } from "./HeaderWithLeftDivide";
import { HistoricalTimeline } from "./HistoricalTimeline";
import { TextWithGradient } from "./TextWithGradient";

export const About = () => {
  return (
    <>
      <div className="relative py-14 md:pb-14 md:py-28 animate-fade animate-delay-[2000ms]">
        <div className="pb-12 relative">
          <HeaderWithLeftDivide text="About Me" />
        </div>
        <div className="flex gap-8">
          <div className="md:basis-2/3 space-y-4 font-extralight">
            <p>
              During the day, i’m a professional Full Stack Engineer working on early-stage SaaS companies at Red Hook
              Agency. I truly enjoy being hands-on in all stages of the Software Development Lifecycle, and have found
              that building new companies products from the ground up is extremely fulfilling. From gathering
              requirements, curating architectural design documentation, designing, implementing, testing, and rapid
              iteration - it’s what I live for.
            </p>
            <p>After hours, I enjoy building miscellaneous project’s, reading and spending time with my family.</p>
          </div>
        </div>
      </div>
    </>
  );
};
