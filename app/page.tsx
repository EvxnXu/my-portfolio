// app/page.tsx - Main Portfolio Page

// Project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Coup Discord Bot",
    description: "A Discord bot replicating the Coup card game with async event handling and modular state management.",
    tech: ["Python", "Discord.py", "Async/Await"],
    github: "https://github.com/EvxnXu/EjxBot",
    live: null,
    status: "In Progress"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A modern portfollio website built with Next.js and Tailwind.css to showcase projects and skills.",
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
  tools: ["Git", "GitHub", "VS Code", "Linux"]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-background/100 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Evan Xu</h1>
            <div className="flex gap-6">
              <a href="#about" className=" hover:text-white transition">About</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#skills" className="hover:text-white transition">Skills</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-third py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">
            {"Hi, I'm Evan Xu"}
          </h2>
          <p className="text-xl mb-8">
            Computer Science Student | Backend & Full-Stack Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Passionate about building scalable backend systems and full-stack applications. 
            Currently seeking full time entry-level SWE opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/EvxnXu" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download="EvanXu_Resume.pdf"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              {`I'm a senior at UMass Lowell studying Computer Science with a Math minor. 
              What drives me in software development is solving complex problems with 
              clean, efficient code – whether it's designing APIs or optimizing algorithms.`}
            </p>
            <p className="text-lg mb-4">
              {`During my internship at Salary.com, I built a REST API for data import into 
              SQL Server and developed a newsletter search solution, gaining hands-on 
              experience with backend development and database architecture.`}
            </p>
            <p className="text-lg mb-4">
              {`I'm currently building full-stack projects with Next.js and exploring AI/ML 
              applications. I'm seeking entry-level opportunities where I can contribute 
              and grow as a backend or full-stack engineer.`}
            </p>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-third">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-foreground rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-background">{project.title}</h3>
                  {project.status && (
                    <span className="text-sm bg-background text-foreground px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm bg-background text-foreground px-3 py-1 rounded"
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
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      Link →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-third">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            {"I'm currently looking for full-time entry-level software engineering opportunities. "}            
            {"Feel free to reach out if you'd like to connect!"}
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="mailto:xuevanj@e.com"
              className="text-lg transition"
            >
              Email
            </a>
            <a 
              href="https://github.com/EvxnXu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/EvxnXu"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Evan Xu. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}