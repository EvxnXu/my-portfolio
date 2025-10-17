// app/page.tsx - Main Portfolio Page
import { FaGithub, FaCloudDownloadAlt, FaLinkedin } from "react-icons/fa";
const projects = [
  {
    id: 1,
    title: "Coup Discord Bot",
    description: "A Discord bot that enables groups to play the strategic card game Coup in Discord. Built with async Python to handle real-time player interactions, challenges, blocking and bluffing mechanics.",
    tech: ["Python", "Discord.py"],
    github: "https://github.com/EvxnXu/EjxBot",
    live: null,
    status: "In Progress"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/EvxnXu/my-portfolio",
    live: "https://evan-xu-portfolio.vercel.app/",
    status: "Updating"
  }
];

const skills = {
  languages: ["Python", "C", "C++", "C#", "JavaScript", "TypeScript", "Java"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "REST APIs"],
  databases: ["SQLite", "Microsoft SQL Server"],
  tools: ["Git", "GitHub", "VS Code"]
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="py-20 bg-background">
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {"Hi, I'm Evan Xu"}
          </h2>
          <p className="text-lg mb-2 text-foreground">
            Computer Science Student | Backend & Full-Stack Developer
          </p>
          <p className="text-base mb-4 text-foreground opacity-80">
            {`Senior at the University of Massachusetts at Lowell. Major in Computer Science with a Minor in Mathematics.
            Currently Seeking Full-Time Entry Level Software Developer Positions.`}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="#projects" 
              className="border-2 px-6 py-3 rounded-lg hover:opacity-90 transition font-medium text-sm"
            >
              View Projects
            </a>
            <a 
              href="https://www.linkedin.com/in/evxnxu/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-foreground text-foreground px-4.5 py-2 rounded-lg hover:bg-foreground hover:text-background transition font-medium text-sm"
            >
              <FaLinkedin/>
            </a>
            <a 
              href="https://github.com/EvxnXu" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-foreground text-foreground px-4.5 py-2 rounded-lg hover:bg-foreground hover:text-background transition font-medium text-sm"
            >
              <FaGithub/>
            </a>
            <a
              href="/resume.pdf"
              download="EvanXu_Resume.pdf"
              className="flex items-center gap-2 border-2 border-foreground text-foreground px-4.5 py-3 rounded-lg hover:bg-foreground hover:text-background transition font-medium text-sm">
              <FaCloudDownloadAlt/>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-10">
        <h2 className="text-3xl font-bold mb-5 text-center">Experience</h2>
        <div className="border-l-4 pl-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold">Software Engineering Intern</h3>
            <p className="text-lg opacity-90">Salary.com</p>
            <p className="text-lg opacity-70">Summer 2024 | Waltham, MA</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-base opacity-90">
            <li className="flex gap-2">
              <span className="opacity-70">•</span>
              <span>Designed and implemented a REST API for importing data into Microsoft SQL Server, enabling data integration across systems</span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-70">•</span>
              <span>Developed a newsletter search solution to improve content discoverability and user engagement</span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-70">•</span>
              <span>Collaborated with product managers to refine data requirements and iterate on backend service design</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 mx-4 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-background rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2 border-foreground"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                {project.status && (
                  <span className="text-sm bg-foreground text-background px-3 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-foreground mb-4 opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-sm border border-foreground text-foreground px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:opacity-70 transition font-medium"
                  >
                    Github < FaGithub/>
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition font-medium"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pb-20 pt-10">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded border-1 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded border-1 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded border-1 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded border-1 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded border-1 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}