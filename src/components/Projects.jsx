import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white flex justify-center"
    >
      <div className="w-full max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
