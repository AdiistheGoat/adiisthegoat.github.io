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

const navItems = [
  { label: "News", href: "#news" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Teaching", href: "#teaching" },
  { label: "Outside", href: "#outside" },
];

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

function SectionHeading({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-muted-foreground">{index}</span>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-10 sm:pt-14">
      {/* ---------- Mobile top bar ---------- */}
      <nav className="sticky top-0 z-10 -mx-6 mb-10 border-b border-border bg-background px-6 py-3 lg:hidden sm:-mx-10 sm:px-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="u-link" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        {/* ---------- Sticky left rail ---------- */}
        <aside className="mb-14 lg:mb-0">
          <div className="lg:sticky lg:top-14">
            <div
              className="flex h-36 w-36 items-center justify-center rounded-full border border-border bg-muted font-serif text-4xl text-muted-foreground lg:h-44 lg:w-44 lg:text-5xl"
              aria-label="Profile photo placeholder"
            >
              AG
            </div>

            <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
              Aditya Goyal
            </h1>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
              Computer Science · Data Science · Mathematics
            </p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              University of Wisconsin–Madison
            </p>

            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
              <a className="u-link" href={links.email}>Email</a>
              <a className="u-link" href={links.cv}>CV</a>
              <a className="u-link" href={links.scholar}>Scholar</a>
              <a className="u-link" href={links.github}>GitHub</a>
              <a className="u-link" href={links.linkedin}>LinkedIn</a>
            </nav>

            {/* Section navigation — desktop rail only */}
            <nav className="mt-10 hidden border-t border-border pt-6 lg:block">
              <ul className="space-y-2.5 font-mono text-sm text-muted-foreground">
                {navItems.map((item, i) => (
                  <li key={item.href}>
                    <a
                      className="u-link inline-flex items-baseline gap-3"
                      href={item.href}
                    >
                      <span className="text-xs">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ---------- Content column ---------- */}
        <div className="min-w-0">
          {/* ---------- Intro ---------- */}
          <header className="pb-14">
            <p className="font-serif text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-[1.75rem]">
              I&rsquo;m interested in understanding and improving how machine
              learning systems learn, reason, and operate efficiently.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground">
              More broadly, my work spans representation learning, optimization,
              and evaluation, with applications including healthcare.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Currently, I&rsquo;m a senior at UW–Madison researching weight
              symmetries in neural networks, and spending the summer building
              agentic evaluation systems at Frizzle.
            </p>
          </header>

          {/* ---------- News ---------- */}
          <section id="news" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="01">News</SectionHeading>
            <ul className="mt-7 space-y-3.5">
              {news.map((item) => (
                <li key={item.date + item.text} className="flex gap-5 text-sm leading-relaxed">
                  <span className="w-20 shrink-0 font-mono text-muted-foreground">{item.date}</span>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <a href="#news" className="u-link mt-6 inline-block font-mono text-sm text-muted-foreground">
              All news →
            </a>
          </section>

          {/* ---------- Projects ---------- */}
          <section id="projects" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="02">Projects</SectionHeading>
            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <li
                  key={p.n}
                  className="group rounded-sm border border-border p-5 transition-colors hover:border-primary"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                    <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <a href={p.href} className="u-link mt-3 inline-block font-mono text-sm">
                    Code ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Publications ---------- */}
          <section id="publications" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="03">Publications</SectionHeading>
            <ul className="mt-7 space-y-6">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="flex gap-5 rounded-sm border border-border p-5"
                >
                  <img
                    src={pub.thumb}
                    alt={`Figure from ${pub.title}`}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-24 w-24 shrink-0 rounded-sm border border-border object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-medium leading-snug text-foreground">
                      {pub.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{pub.venue}</p>
                    <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-sm">
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
          <section id="experience" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="04">Experience</SectionHeading>
            <ul className="mt-7 space-y-10">
              {experience.map((e) => (
                <li key={e.org} className="flex gap-6">
                  <span className="w-16 shrink-0 pt-0.5 font-mono text-sm text-muted-foreground">
                    {e.year}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-sm font-medium uppercase tracking-wide text-foreground">
                      {e.org}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{e.desc}</p>
                    <p className="mt-2 border-l-2 border-border pl-4 font-serif text-sm italic leading-relaxed text-muted-foreground">
                      {e.reflection}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Writing ---------- */}
          <section id="writing" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="05">Writing</SectionHeading>
            <ul className="mt-7 space-y-7">
              {writing.map((w) => (
                <li key={w.title}>
                  <div className="flex items-baseline justify-between gap-4">
                    <a href={w.href} className="u-link font-serif text-lg font-medium text-foreground">
                      {w.title}
                    </a>
                    <span className="shrink-0 font-mono text-sm text-muted-foreground">↗</span>
                  </div>
                  {w.desc && (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  )}
                  {w.meta && (
                    <p className="mt-1.5 font-mono text-xs text-muted-foreground">{w.meta}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Teaching ---------- */}
          <section id="teaching" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="06">Teaching</SectionHeading>
            <ul className="mt-7 space-y-6">
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
          <section id="outside" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading index="07">Outside Research</SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              When I&rsquo;m away from a computer, you&rsquo;ll usually find me
              playing squash or underwater.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <figure>
                <img
                  src={scubaPhoto}
                  alt="Scuba photo placeholder"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full rounded-sm border border-border object-cover"
                />
                <figcaption className="mt-4">
                  <p className="font-serif text-lg font-medium text-foreground">Scuba Diving</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Open Water diver, working my way toward Advanced and Rescue.
                    I love scuba because it&rsquo;s one of the few places you can
                    see wildlife truly in the wild — even if that means being two
                    metres from a sea snake. Only complaint: the water&rsquo;s
                    salty.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <img
                  src={squashPhoto}
                  alt="Squash photo placeholder"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full rounded-sm border border-border object-cover"
                />
                <figcaption className="mt-4">
                  <p className="font-serif text-lg font-medium text-foreground">Squash</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Not the vegetable. The actual sport. There isn&rsquo;t a game
                    I enjoy more — or another I can play for three hours
                    straight. Fast, intense, and constantly making you think on
                    the spot.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* ---------- Footer ---------- */}
          <footer className="mt-8 border-t border-border pt-6">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Aditya Goyal · Madison, WI
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
