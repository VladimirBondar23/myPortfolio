import { useState } from "react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  githubUrls: string[];
  images: string[];
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev < project.images.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <article
      className="overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/60 shadow-lg shadow-slate-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.images[currentIndex] && (
        <div className="relative">
          {/* Prefetch adjacent images so arrow clicks feel instant */}
          {currentIndex > 0 && (
            <img alt="" aria-hidden src={project.images[currentIndex - 1]} className="hidden" fetchPriority="low" />
          )}
          {currentIndex < project.images.length - 1 && (
            <img alt="" aria-hidden src={project.images[currentIndex + 1]} className="hidden" fetchPriority="low" />
          )}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            decoding="async"
            onClick={() => setIsZoomed(true)}
            className={`h-48 w-full cursor-zoom-in object-cover transition-transform duration-300 ${
              isHovered ? "scale-105 " : ""
            }`}
          />

          {project.images.length > 1 && (
            <>
              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-xl text-white hover:bg-black/60"
                >
                  ‹
                </button>
              )}

              {currentIndex < project.images.length - 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-xl text-white hover:bg-black/60"
                >
                  ›
                </button>
              )}
            </>
          )}
        </div>
      )}

      <div className="p-6">
        <h2 className="text-xl font-semibold text-white">{project.title}</h2>

        <p className="mt-2 text-sm text-slate-300">
          {project.shortDescription}
        </p>

        <p className="mt-2 text-sm text-slate-400">
          {showFullDescription
            ? project.description
            : `${project.description.slice(0, 140)}${
                project.description.length > 140 ? "..." : ""
              }`}
        </p>

        {project.description.length > 140 && (
          <button
            type="button"
            onClick={() => setShowFullDescription((prev) => !prev)}
            className="mt-1 text-xs font-medium text-sky-400 hover:text-sky-300"
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.githubUrls.map((url, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Repo {index + 1}
            </a>
          ))}
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      )}
    </article>
  );
}

