
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <AboutMe />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">My Projects</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <footer className="text-center text-slate-500 py-4">
        <p>
          &copy; {new Date().getFullYear()} Vladimir Bondar
        </p>
      </footer>
    </main>
  );
}

export default App;
