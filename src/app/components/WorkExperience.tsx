import { ExperienceCard } from "./ExperienceCard";
import { HeaderWithLeftDivide } from "./HeaderWithLeftDivide";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Red Hook Agency",
    location: "Indianapolis, IN (Remote)",
    startDate: "04/2023",
    endDate: "Present",
    description:
      "As a full-stack software engineer at Red Hook Agency, I played a crucial role in driving early-stage SaaS companies products to their initial launch. My responsibilities encompassed a wide range of development activities, ensuring that the software solutions delivered were not only functional but also high-performing and user-friendly.",
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
    title: "Software Engineer",
    company: "Leadmatic",
    location: "Remote",
    startDate: "04/2023",
    endDate: "Present",
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
  {
    title: "Full Stack Software Engineer",
    company: "Approved Mortgage",
    location: "Greenwood, IN",
    startDate: "04/2023",
    endDate: "Present",
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
  {
    title: "Web Developer",
    company: "DLSII - through Christy Ventures",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    technologies: [],
  },
  {
    title: "Web Developer",
    company: "MVP Title - through Christy Ventures",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    technologies: [],
  },
  {
    title: "Web Developer",
    company: "BFI - through Christy Ventures",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    technologies: [],
  },
];

export const WorkExperience = () => {
  return (
    <div className="relative py-14  animate-fade animate-delay-[2000ms]">
      <div className="pb-12 relative">
        <HeaderWithLeftDivide text="Work Experience" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
};
