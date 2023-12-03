import { HeaderWithLeftDivide } from "./HeaderWithLeftDivide";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="relative py-14 animate-fade animate-delay-[2000ms]">
      <div className="pb-12 relative">
        <HeaderWithLeftDivide text="Projects" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-auto flex flex-col gap-4">
          {experiences1.map((experience) => (
            <ProjectCard key={experience.title} experience={experience} />
          ))}
        </div>
        <div className="h-auto flex flex-col gap-4">
          {experiences2.map((experience) => (
            <ProjectCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

const experiences1 = [
  {
    img: true,
    title: "Rare Pours",
    link: "https://rarepours.com",
    description:
      "Lorum Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Eget Nunc Eget Nibh Tincidunt Tincidunt.",
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Next.js",
      "Node.js",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS",
      "DynamoDB",
      "SST",
      "S3",
      "MUI",
      "TailwindCSS",
      "Jest",
      "HTML/CSS",
    ],
  },
  {
    title: "AI Sales Agent",
    description:
      "As a Full Stack Software Engineer at Leadmatic, I played a key role in a dynamic startup specializing in AI-agent platforms. My work involved integrating Leadmatic's diverse offerings into a unified application using cutting-edge technologies. In this fast-paced environment, I significantly contributed to enhancing the AI-agent platform, delivering robust technical solutions that aligned seamlessly with Leadmatic's innovative vision.",
    technologies: [
      "Next.js",
      "Typescript",
      "Python",
      "Prefect",
      "Prisma ORM",
      "PostgreSQL",
      "React Query",
      "Chakra UI",
      "Jest",
    ],
  },
];

const experiences2 = [
  {
    title: "DLSII",
    description:
      "Lorum Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Eget Nunc Eget Nibh Tincidunt Tincidunt.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MariaDB",
      "PHP",
      "Apache",
      "AWS",
      "Wordpress",
    ],
  },
  {
    title: "Approved Mortgage",
    img: true,
    description:
      "As a Full Stack Developer at Approved Mortgage, I played a pivotal role in improving the company's web and software applications, significantly contributing to the mortgage origination process. My multifaceted responsibilities ranged from developing technical solutions to influencing the strategic direction of software development. Collaborating closely with various departments, I ensured that our technology solutions were in sync with the company's broader business goals and operational requirements.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MariaDB",
      "PHP",
      "Apache",
      "AWS",
      "Wordpress",
    ],
  },
];
