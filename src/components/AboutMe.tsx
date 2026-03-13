import vladimirImg from "../assets/vladimir.jpg";

function AboutMe() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Vladimir Bondar</h2>
        <p className="text-xl text-slate-400 font-medium mt-1">Full-stack Developer</p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
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
            This page is my portfolio, that showcases some of my personal
            projects. You can also find more on my{" "}
            <a
              href="https://github.com/VladimirBondar23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
