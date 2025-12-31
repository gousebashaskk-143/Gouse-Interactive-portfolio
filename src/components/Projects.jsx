import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      {loading ? (
        <p className="text-gray-500">Loading projects...</p>
      ) : (
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 px-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
