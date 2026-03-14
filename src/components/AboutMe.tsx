import vladimirImg from "../assets/vladimir.jpg";

function AboutMe() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Vladimir Bondar</h2>
        <p className="text-xl text-slate-400 font-medium mt-1">Full-stack Developer</p>
        <p className="mt-4 text-md font-medium text-slate-400">Contact me: </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/VladimirBondar23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100 hover:border-slate-300"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vladimir-bondar-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100 hover:border-slate-300"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold text-slate-900">
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            vdecbel@gmail.com
          </span>
          <a
            href="tel:0584718822"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100 hover:border-slate-300"
            aria-label="Phone"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            0584718822
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-8 rounded-2xl border border-slate-900 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40 md:flex-row md:items-start md:p-8">
        <div className="shrink-0 w-40 md:w-48">
          <img
            src={vladimirImg}
            alt="Vladimir Bondar"
            decoding="async"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>Hi! My name is Vladimir.</p>
          <p>
            {" "}
            I'm a Full-stack Developer with hands-on experience from a Software
            Engineering Bootcamp and diverse personal projects. I build REST
            APIs, make responsive layouts and integrate AI into systems. I truly like what I do and constantly improve my skills.
          </p>
          <p>
            I graduated with a Computer Science degree from Tel Hai College (now
            Tel Hai University) with a GPA of 85. My main stack includes
            JavaScript/TypeScript and React for the frontend, and FastAPI and
            Node.js for the backend. I feel comfortable working with both SQL
            and NoSQL databases, collaborating in a team using Git and Docker,
            and using AI tools to enhance development speed and efficiency.
          </p>
          <p>
            This page is my portfolio, showcasing some of my personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
