import Image from "next/image";
import { FaLink } from "react-icons/fa";
import PlaceholderImage from "../assets/placeholder.png";
export const ProjectCard = ({
  experience,
}: {
  experience: {
    title: string;
    link?: string;
    img?: string;
    description: string;
    technologies: string[];
  };
}) => {
  return (
    <div className="flex flex-col gap-2 card hover-shadow">
      {experience.img && (
        <div className="w-full h-auto hidden sm:block">
          <Image src={PlaceholderImage} alt="Project" />
        </div>
      )}

      {experience.link ? (
        <a href={experience.link} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
          <h2 className="text-md sm:text-xl font-semibold">{experience.title}</h2>
          <FaLink className="text-md" />
        </a>
      ) : (
        <h2 className="text-md sm:text-xl font-semibold">{experience.title}</h2>
      )}
      <div className="flex flex-col space-y-4">
        <p className="text-xs sm:text-sm font-light">{experience.description}</p>
        {experience.technologies.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2">
            {experience.technologies.map((technology) => {
              return (
                <div key={technology} className="px-1.5 py-0.5 bg-gray-400 rounded-md text-xs sm:text-sm font-light">
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
