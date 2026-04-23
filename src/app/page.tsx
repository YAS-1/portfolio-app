import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { aboutText, education, personalInfo, workExperience } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-24 md:px-8">
        <section id="home" className="py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#d4462c]">
                Welcome to my portfolio
              </p>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="mb-3 text-lg text-slate-600">{personalInfo.greeting}</p>
              <p className="mb-8 font-medium text-slate-700">{personalInfo.tagline}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-[#ff694d] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,105,77,0.35)] transition hover:bg-[#f45a3d]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="neo-card rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                >
                  Contact Me
                </a>
                <a
                  href="/My-CV.pdf"
                  download
                  className="neo-card inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#d4462c] transition hover:text-[#b93d27]"
                >
                  <FaDownload /> Download CV
                </a>
              </div>
            </div>
            <div className="neo-panel mx-auto p-2">
              <Image
                src="/pic1.png"
                alt="Yawe Arthur Shalom portrait"
                width={420}
                height={420}
                priority
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>

        <SectionWrapper id="about" title="About Me">
          <p className="max-w-3xl text-justify leading-8 text-slate-600">{aboutText}</p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-semibold text-[#d4462c] transition hover:text-[#b93d27]"
          >
            View my GitHub profile
          </a>
        </SectionWrapper>

        <SectionWrapper id="education" title="Education">
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.institution}
                className="neo-card p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                  {item.institution}
                </h3>
                <p className="mb-2 text-slate-600">{item.degree}</p>
                <p className="text-sm font-medium text-[#d4462c]">{item.duration}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills" title="Skills">
          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="experience" title="Work Experience">
          <div className="space-y-5">
            {workExperience.map((job) => (
              <article
                key={job.company}
                className="neo-card p-6"
              >
                <h3 className="text-xl font-semibold text-slate-800">
                  {job.role} - {job.company}
                </h3>
                <p className="mt-1 mb-4 text-sm font-medium text-[#d4462c]">
                  {job.duration}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact" title="Contact">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <a
                className="flex items-center gap-3 text-slate-600 transition hover:text-slate-900"
                href={`mailto:${personalInfo.email}`}
              >
                <FaEnvelope className="text-[#d4462c]" /> {personalInfo.email}
              </a>
              <a
                className="flex items-center gap-3 text-slate-600 transition hover:text-slate-900"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-[#d4462c]" /> LinkedIn
              </a>
              <a
                className="flex items-center gap-3 text-slate-600 transition hover:text-slate-900"
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-[#d4462c]" /> WhatsApp
              </a>
              <a
                className="flex items-center gap-3 text-slate-600 transition hover:text-slate-900"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-[#d4462c]" /> GitHub
              </a>
            </div>

            <form className="neo-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-800">Send a message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="neo-inset w-full rounded-lg px-4 py-2 text-slate-700 outline-none placeholder:text-slate-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="neo-inset w-full rounded-lg px-4 py-2 text-slate-700 outline-none placeholder:text-slate-500"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="neo-inset w-full rounded-lg px-4 py-2 text-slate-700 outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#ff694d] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,105,77,0.35)] transition hover:bg-[#f45a3d]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
