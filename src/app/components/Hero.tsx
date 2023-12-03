import { CohesiveCircle } from "./CohesiveCircle";
import { TextWithGradient } from "./TextWithGradient";

export const Hero = () => {
  return (
    <div className="flex flex-row gap-4 w-full py-14 md:py-28">
      <div className="md:basis-1/2 flex flex-col justify-center">
        <div className="space-y-6 mb-6">
          <h1 className="md:text-6xl text-6xl sm:text-4xl font-extrabold animate-fade-right">Hello,</h1>
          <h1 className="md:text-6xl text-6xl font-extrabold md:text-right animate-fade-right animate-delay-[500ms]">
            I&apos;m <TextWithGradient text="Joaquin" />
          </h1>
        </div>
        <div className="animate-fade-right animate-delay-[1000ms]">
          <h2 className="text-xl font-medium mb-2">Full Stack Software Engineer</h2>
          <p className="font-extralight mt-0">
            A high-energy, motivated Full Stack Engineer who specializes in creating scalable, data-intensive web
            applications. I’ve had the privelage of working on a{" "}
            <span className="font-bold">real-time auction platform</span>, an{" "}
            <span className="font-bold"> ai-driven sales copilot</span>, and a project to deliver
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:basis-1/2">
        <CohesiveCircle />
      </div>
    </div>
  );
};
