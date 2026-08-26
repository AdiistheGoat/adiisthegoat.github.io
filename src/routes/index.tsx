import { createFileRoute } from "@tanstack/react-router";

import scubaPhoto from "@/assets/scuba.jpg";
import squashPhoto from "@/assets/squash.jpg";
import paperThumb from "@/assets/paper-thumb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Goyal" },
      {
        name: "description",
        content:
          "Aditya Goyal — Computer Science, Data Science, and Mathematics at the University of Wisconsin–Madison. Researching how machine learning systems learn, reason, and operate efficiently.",
      },
      { property: "og:title", content: "Aditya Goyal" },
      {
        property: "og:description",
        content:
          "Computer Science · Data Science · Mathematics at UW–Madison. Understanding and improving how machine learning systems learn, reason, and operate efficiently.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/*  Edit these — everything on the page reads from this config.        */
/* ------------------------------------------------------------------ */
const links = {
  email: "mailto:agoyal@wisc.edu", // TODO: your email
  cv: "#", // TODO: link to your resume PDF
  scholar: "#", // TODO: Google Scholar
  github: "#", // TODO: GitHub
  linkedin: "#", // TODO: LinkedIn
};

const news = [
  { date: "Aug 2026", text: "Started working on symmetry-aware optimization for efficient fine-tuning." },
  { date: "Jun 2026", text: "Presented our work at ICML, Seoul." },
  { date: "Jun 2026", text: "Our paper on weight symmetries was accepted to ICML 2026." },
  { date: "May 2026", text: "Joined Frizzle as a Software Engineering Intern for the summer." },
];

const projects = [
  {
    n: "01",
    title: "Short and exact",
    desc: "A text shortener that compresses without losing meaning.",
    href: "#",
  },
  {
    n: "02",
    title: "Symmetry toolkit",
    desc: "Utilities for probing and exploiting weight symmetries in deep networks.",
    href: "#",
  },
  {
    n: "03",
    title: "Triage notes",
    desc: "Small models for structured clinical note summarization.",
    href: "#",
  },
];

const publications = [
  {
    title: "Understanding Weight Symmetries in Deep Networks",
    authors: "Aditya Goyal, et al.",
    venue: "ICML 2026 · Weight Symmetries",
    thumb: paperThumb,
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
      { label: "Poster", href: "#" },
      { label: "Media", href: "#" },
    ],
  },
];

const experience = [
  {
    org: "Frizzle",
    year: "2026",
    role: "Software Engineering Intern",
    desc: "Worked on agentic workflows and evaluation systems for education.",
    reflection: "Building AI for real users taught me that a model is only as good as the eval that grades it.",
  },
  {
    org: "UW–Madison",
    year: "2025–26",
    role: "Undergraduate Researcher",
    desc: "Studying weight symmetries in neural networks and what they imply about optimization.",
    reflection: "Research taught me that the interesting question is usually one level below the one you started with.",
  },
];

const writing = [
  {
    title: "Thoughts from ICML 2026",
    desc: "What I learned from presenting my first research paper.",
    meta: "Jun 2026 · 4 min",
    href: "#",
  },
  {
    title: "Understanding weight symmetries, gently",
    desc: "A short note on why neural networks have redundant structure.",
    meta: "May 2026 · 6 min",
    href: "#",
  },
  {
    title: "Building evals that people trust",
    desc: "LinkedIn · Apr 2026",
    meta: "",
    href: "#",
  },
];

const teaching = [
  { course: "CS 540 — Introduction to Artificial Intelligence", role: "Teaching Assistant", years: "2025–26" },
  { course: "CS 300 — Programming II", role: "Teaching Assistant", years: "2024–26" },
];

/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
      {children}
    </h2>
  );
}

function Index() {
  return (
    <main className="mx-auto w-full max-w-[42rem] px-6 pb-24 pt-20 sm:pt-28">
      {/* ---------- Intro ---------- */}
      <header>
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Aditya Goyal
        </h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          Computer Science · Data Science · Mathematics
        </p>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          University of Wisconsin–Madison
        </p>

        <p className="mt-8 text-base leading-relaxed text-foreground">
          I&rsquo;m interested in understanding and improving how machine
          learning systems learn, reason, and operate efficiently. More
          broadly, my work spans representation learning, optimization, and
          evaluation, with applications including healthcare.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Currently, I&rsquo;m a senior at UW–Madison researching weight
          symmetries in neural networks, and spending the summer building
          agentic evaluation systems at Frizzle.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
          <a className="u-link" href={links.email}>Email</a>
          <a className="u-link" href={links.cv}>CV</a>
          <a className="u-link" href={links.scholar}>Scholar</a>
          <a className="u-link" href={links.github}>GitHub</a>
          <a className="u-link" href={links.linkedin}>LinkedIn</a>
        </nav>
      </header>

      {/* ---------- News ---------- */}
      <section id="news" className="mt-16 scroll-mt-16">
        <SectionHeading>News</SectionHeading>
        <ul className="mt-5 space-y-3">
          {news.map((item) => (
            <li key={item.date + item.text} className="flex gap-4 text-sm leading-relaxed">
              <span className="w-20 shrink-0 font-mono text-muted-foreground">{item.date}</span>
              <span className="text-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
        <a href="#news" className="u-link mt-5 inline-block font-mono text-sm text-muted-foreground">
          All news →
        </a>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="mt-16 scroll-mt-16">
        <SectionHeading>Projects</SectionHeading>
        <ul className="mt-5 space-y-6">
          {projects.map((p) => (
            <li key={p.n} className="flex gap-5">
              <span className="font-mono text-sm text-muted-foreground">{p.n}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a href={p.href} className="u-link mt-1 inline-block font-mono text-sm">
                  Code ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Publications ---------- */}
      <section id="publications" className="mt-16 scroll-mt-16">
        <SectionHeading>Publications</SectionHeading>
        <ul className="mt-5 space-y-8">
          {publications.map((pub) => (
            <li key={pub.title} className="flex gap-5">
              <img
                src={pub.thumb}
                alt={`Figure from ${pub.title}`}
                width={640}
                height={640}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-sm border border-border object-cover"
              />
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{pub.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{pub.venue}</p>
                <p className="mt-2 flex flex-wrap gap-x-4 font-mono text-sm">
                  {pub.links.map((l) => (
                    <a key={l.label} href={l.href} className="u-link">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="mt-16 scroll-mt-16">
        <SectionHeading>Experience</SectionHeading>
        <ul className="mt-5 space-y-8">
          {experience.map((e) => (
            <li key={e.org}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-sm font-medium uppercase tracking-wide text-foreground">
                  {e.org}
                </p>
                <p className="font-mono text-sm text-muted-foreground">{e.year}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{e.desc}</p>
              <p className="mt-2 font-serif text-sm italic leading-relaxed text-muted-foreground">
                {e.reflection}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Writing ---------- */}
      <section id="writing" className="mt-16 scroll-mt-16">
        <SectionHeading>Writing</SectionHeading>
        <ul className="mt-5 space-y-6">
          {writing.map((w) => (
            <li key={w.title}>
              <div className="flex items-baseline justify-between gap-4">
                <a href={w.href} className="u-link text-sm font-medium text-foreground">
                  {w.title}
                </a>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">↗</span>
              </div>
              {w.desc && (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              )}
              {w.meta && (
                <p className="mt-1 font-mono text-xs text-muted-foreground">{w.meta}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Teaching ---------- */}
      <section id="teaching" className="mt-16 scroll-mt-16">
        <SectionHeading>Teaching</SectionHeading>
        <ul className="mt-5 space-y-5">
          {teaching.map((t) => (
            <li key={t.course}>
              <p className="text-sm font-medium text-foreground">{t.course}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.role} · {t.years}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Outside ---------- */}
      <section id="outside" className="mt-16 scroll-mt-16">
        <SectionHeading>Outside Research</SectionHeading>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          When I&rsquo;m away from a computer, you&rsquo;ll usually find me
          playing squash or underwater.
        </p>

        <div className="mt-8 space-y-10">
          <figure>
            <img
              src={scubaPhoto}
              alt="Scuba diving above a reef, sunlight filtering through the water"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-sm border border-border object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-serif text-lg font-medium text-foreground">Scuba Diving</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Open Water diver, working my way toward Advanced and Rescue. I
                love scuba because it&rsquo;s one of the few places you can see
                wildlife truly in the wild — even if that means being two
                metres from a sea snake. Only complaint: the water&rsquo;s
                salty.
              </p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={squashPhoto}
              alt="Playing a forehand shot on a squash court"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-sm border border-border object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-serif text-lg font-medium text-foreground">Squash</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not the vegetable. The actual sport. There isn&rsquo;t a game I
                enjoy more — or another I can play for three hours straight.
                Fast, intense, and constantly making you think on the spot.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="mt-20 border-t border-border pt-6">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Aditya Goyal · Madison, WI
        </p>
      </footer>
    </main>
  );
}
