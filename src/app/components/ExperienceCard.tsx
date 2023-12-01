import { TextWithGradient } from "./TextWithGradient";

export const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
  };
}) => {
  return (
    <div className="flex flex-col gap-4 card hover-shadow">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold">{experience.title}</h2>
          <div className="flex">
            <h3 className="text-sm font-light text-gray-400 cursor-pointer">{experience.company}</h3>
            &nbsp;
            {experience.startDate && experience.endDate && (
              <h3 className="text-sm font-light text-gray-500">
                | {experience.startDate} - {experience.endDate}{" "}
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-sm font-light">{experience.description}</p>
        {experience.technologies.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2">
            {experience.technologies.map((technology) => {
              return (
                <div key={technology} className="px-2 py-1 bg-gray-400 rounded-md text-sm font-light">
                  {technology}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
