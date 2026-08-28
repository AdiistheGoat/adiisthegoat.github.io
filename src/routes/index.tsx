import { createFileRoute } from "@tanstack/react-router";

import portraitPhoto from "@/assets/portrait.jpg";
import scubaTurtle from "@/assets/scuba-7059.jpg";
import scubaSnake from "@/assets/scuba-7060.jpg";
import scubaDiver from "@/assets/scuba-7061.jpg";
import squashPhoto from "@/assets/squash.jpg";
import paperThumb from "@/assets/paper-thumb.jpg";
import logoCs from "@/assets/logo-cs.png";
import logoSprocket from "@/assets/logo-sprocket.png";
import logoFrizzle from "@/assets/logo-frizzle.png";
import logoFreecharge from "@/assets/logo-freecharge.png";
import logoUwPhysics from "@/assets/logo-uw-physics.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Goyal" },
      {
        name: "description",
        content:
          "Aditya Goyal — undergraduate at UW–Madison working on Health AI and data-centric AI. Advised by Prof. Yin Li and Prof. Fred Sala.",
      },
      { property: "og:title", content: "Aditya Goyal" },
      {
        property: "og:description",
        content:
          "Health AI and data-centric AI at UW–Madison. Advised by Prof. Yin Li and Prof. Fred Sala.",
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
  email: "mailto:agoyal33@wisc.edu",
  cv: "/Resume.pdf",
  scholar: "https://scholar.google.com/citations?user=OcCyDyEAAAAJ&hl=en",
  github: "https://github.com/AdiistheGoat",
  linkedin: "https://www.linkedin.com/in/aditya-goyal-aa0288213/",
  X: "https://x.com/adigoyal0807"
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Research", href: "#research" },
  { label: "SWE", href: "#swe" },
  { label: "Writing", href: "#writing" },
  { label: "Teaching", href: "#teaching" },
  { label: "Outside", href: "#outside" },
];

// Newest first. Every row is a dated resume fact (roles, paper, projects).
const news = [
  { date: "May 2026", text: "Joined Frizzle (YC S25) as a Software Engineering Intern." },
  { date: "May 2026", text: "WARP accepted to the ICML 2026 Weight Symmetries Workshop." },
  { date: "Nov 2025", text: "Joined Yin Li's lab to work on NICU mortality forecasting." },
  { date: "Jul 2025", text: "Joined Sprocket Lab as an ML Research Engineering Intern." },
  { date: "May 2025", text: "Joined Freecharge as a Machine Learning Intern." },
  { date: "Nov 2024", text: "Joined UW–Madison Physics as a Software Engineering Intern." },
  { date: "Sep 2024", text: "Started as a UG Teaching Assistant for CS 540 and CS 300." },
  { date: "Sep 2023", text: "Started undergrad at UW–Madison in Computer Science and Data Science." },
];

const projects = [
  {
    n: "01",
    title: "ShortNExact",
    desc: "Rewrites text to an exact word count without losing meaning.",
    href: "https://github.com/AdiistheGoat/ShortNExact",
  },
  {
    n: "02",
    title: "LLM finetuning using LoRA",
    desc: "LoRA fine-tune of FLAN-T5 for sentiment classification.",
    href: "https://github.com/AdiistheGoat/fine_tuning_using_LORA",
  },
];

const publications = [
  {
    title: "WARP: Weight-Space Analysis for Recovering Training Data Portfolios",
    authors: "Tzu-Heng Huang, Aditya Goyal, John Cooper, Frederic Sala",
    venue: "ICML 2026 · Weight Symmetries Workshop",
    thumb: paperThumb,
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2607.01686" },
      { label: "Code", href: "https://github.com/SprocketLab/WARP" },
      { label: "Poster", href: "#" },
      { label: "Media", href: "https://x.com/zihengh1/status/2073061184991842327" },
    ],
  },
];

// `logo` is optional — omit it and the square shows org initials until you drop in a file.
type Experience = {
  org: string;
  year: string;
  role: string;
  desc: string;
  reflection: string;
  logo?: string;
};

const researchExperience: Experience[] = [
  {
    org: "Yin Li Lab",
    year: "2025–present",
    role: "ML Research Engineering Intern",
    desc: "Mortality forecasting on sparse, irregular NICU recordings.",
    reflection: "Sparse clinical data taught me that the missingness is part of the signal.",
    logo: logoCs, // Downloads: "uw madison comptuer sciens.png" — CS dept mark, no lab-specific file
  },
  {
    org: "Sprocket Lab",
    year: "2025–26",
    role: "ML Research Engineering Intern",
    desc: "Recovering fine-tuning data distributions from model weights.",
    reflection: "The interesting question was usually one level below the one we started with.",
    logo: logoSprocket,
  },
];

const sweExperience: Experience[] = [
  {
    org: "Frizzle",
    year: "2026",
    role: "Software Engineering Intern",
    desc: "Shipped AI rubric generation and eval pipelines for education.",
    reflection: "A model is only as good as the eval that grades it.",
    logo: logoFrizzle,
  },
  {
    org: "Freecharge",
    year: "2025",
    role: "Machine Learning Intern",
    desc: "Bedrock agents for spend analysis and document search.",
    reflection: "Tool-using agents fail at the retrieval step before they fail at the model.",
    logo: logoFreecharge,
  },
  {
    org: "UW–Madison Physics",
    year: "2024–25",
    role: "Software Engineering Intern",
    desc: "Trained and visualized MLPs on mathematical functions.",
    reflection: "Vectorizing the experiment loop taught me more than the network did.",
    logo: logoUwPhysics,
  },
];

const writing = [
  {
    title: "The magic of 1.58 bit LLMs",
    desc: "Ternary-weight Transformers: adds instead of matmuls.",
    meta: "Jan 2026 · LinkedIn",
    href: "https://www.linkedin.com/pulse/magic-158-bit-llms-aditya-goyal--ihpkc/",
  },
  {
    title: "Transformers from Scratch: the math, the shapes, and the intuition that finally clicked",
    desc: "Shapes, masking, and why the last row matters.",
    meta: "Dec 2025 · LinkedIn",
    href: "https://www.linkedin.com/pulse/transformers-from-scratch-math-shapes-intuition-finally-goyal--8ydec/",
  },
  {
    title: "Humans choose which pieces to put in the puzzle. AI places the pieces.",
    desc: "Judgment picks the problem; the model places the pieces.",
    meta: "Sep 2025 · LinkedIn",
    href: "https://www.linkedin.com/pulse/humans-choose-which-pieces-put-puzzle-ai-places-aditya-goyal--h05wf/",
  },
];

const teaching = [
  { course: "CS 300 — Programming II", role: "UG Teaching Assistant", years: "2024–present" },
  { course: "CS 540 — Introduction to Artificial Intelligence", role: "UG Teaching Assistant", years: "2024–25" },
];

/* ------------------------------------------------------------------ */

/** Same-page jumps and mailto stay here. Everything else (PDF, http) opens a tab. */
function newTabProps(href: string) {
  if (href.startsWith("#") || href.startsWith("mailto:")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  );
}

/** Two- or three-letter mark from the org name, used until a real `logo` file is set. */
function orgInitials(org: string) {
  const words = org.split(/\s+/).filter(Boolean);
  const head = words[0];
  // "UW–Madison Physics" → UW, not UM (don't treat the dash as a word break).
  if (/[–—-]/.test(head)) {
    return head.split(/[–—-]/)[0].slice(0, 3).toUpperCase();
  }
  if (words.length === 1) return head.slice(0, 3).toUpperCase();
  return (head[0] + words[1][0]).toUpperCase();
}

function OrgLogo({ org, src }: { org: string; src?: string }) {
  return (
    <div
      className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-md border bg-card ${
        src ? "border-border" : "border-dashed border-border"
      }`}
      aria-hidden
    >
      {src ? (
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="font-mono text-xs font-medium text-muted-foreground">
          {orgInitials(org)}
        </span>
      )}
    </div>
  );
}

function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <div className="mt-7 space-y-10">
      {items.map((e) => (
        <div key={e.org} className="flex gap-4">
          <OrgLogo org={e.org} src={e.logo} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="font-mono text-sm font-medium uppercase tracking-wide text-foreground">
                {e.org}
              </p>
              <span className="font-mono text-sm text-muted-foreground">{e.year}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{e.desc}</p>
            <p className="mt-3 border-l-2 border-primary/30 pl-4 font-serif text-sm italic leading-relaxed text-muted-foreground">
              {e.reflection}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-10 sm:pt-14">
      {/* ---------- Mobile top bar ---------- */}
      <nav className="sticky top-0 z-10 -mx-6 mb-10 border-b border-border bg-background/95 px-6 py-3 backdrop-blur-sm lg:hidden sm:-mx-10 sm:px-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="u-link" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

        <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
        {/* ---------- Sticky left rail ---------- */}
        <aside className="mb-14 lg:mb-0">
          <div className="lg:sticky lg:top-14">
            <img
              src={portraitPhoto}
              alt="Aditya Goyal"
              width={1600}
              height={1200}
              className="h-48 w-48 rounded-full border border-border object-cover object-[65%_28%] lg:h-64 lg:w-64"
            />

            <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
              Aditya Goyal
            </h1>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
              Computer Science · Data Science
            </p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              University of Wisconsin–Madison
            </p>

            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
              <a className="u-link" href={links.email}>Email</a>
              <a className="u-link" href={links.cv} {...newTabProps(links.cv)}>CV</a>
              <a className="u-link" href={links.scholar} {...newTabProps(links.scholar)}>Scholar</a>
              <a className="u-link" href={links.github} {...newTabProps(links.github)}>GitHub</a>
              <a className="u-link" href={links.linkedin} {...newTabProps(links.linkedin)}>LinkedIn</a>
              <a className="u-link" href={links.X} {...newTabProps(links.X)}>X</a>
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
          {/* ---------- About ---------- */}
          <section id="about" className="scroll-mt-20 pb-14">
            <SectionHeading>About Me</SectionHeading>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Greetings! I am an undergraduate at UW–Madison working on Health AI and
              data-centric AI. I am fortunate to be advised by Prof. Yin Li and
              Prof. Fred Sala. I have also gained valuable AI and ML engineering
              experience through internships at Freecharge, Frizzle, and UW–Madison
              Department of Physics.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              My research focus is on deep learning with applications in HealthCare and building effective data curation pipelines. My past work was on weight-space analysis to recover the training data distribution. 
              Currently, I am working on NICU mortality forecasting using Chronos, video understanding for neonatal laryngoscopy, and effective context compaction policies.
              I am also broadly interested in efficient AI, particularly edge AI and PEFT methods.
            </p>
          </section>

          {/* ---------- News ---------- */}
          <section id="news" className="scroll-mt-20 border-t border-border bg-muted/20 py-14">
            <SectionHeading>News</SectionHeading>
            <ul className="mt-7 max-h-60 space-y-3.5 overflow-y-auto pr-3">
              {news.map((item) => (
                <li key={item.date + item.text} className="flex gap-5 text-sm leading-relaxed">
                  <span className="w-20 shrink-0 font-mono text-primary/80">{item.date}</span>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Projects ---------- */}
          <section id="projects" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading>Projects</SectionHeading>
            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <li key={p.n}>
                  <a
                    href={p.href}
                    className="group block rounded-md border border-border bg-card p-5 shadow-sm no-underline hover:no-underline hover:border-primary hover:shadow"
                    {...newTabProps(p.href)}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-sm text-primary/80">{p.n}</span>
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-primary">
                        ↗
                      </span>
                    </div>
                    <p className="mt-3 text-base font-medium text-foreground">{p.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Publications ---------- */}
          <section id="publications" className="scroll-mt-20 border-t border-border bg-muted/20 py-14">
            <SectionHeading>Publications</SectionHeading>
            <ul className="mt-7 space-y-6">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="flex gap-5 rounded-md border border-border bg-card p-5 shadow-sm"
                >
                  <img
                    src={pub.thumb}
                    alt={`Figure from ${pub.title}`}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-28 w-28 shrink-0 rounded-md border border-border object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-medium leading-snug text-foreground">
                      {pub.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                    <p className="mt-1 font-mono text-xs text-primary/80">{pub.venue}</p>
                    <p className="mt-3 flex flex-wrap gap-2">
                      {pub.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          className="rounded-full border border-border px-3 py-1 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
                          {...newTabProps(l.href)}
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Research Experience ---------- */}
          <section id="research" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading>Research Experience</SectionHeading>
            <ExperienceList items={researchExperience} />
          </section>

          {/* ---------- SWE Experience ---------- */}
          <section id="swe" className="scroll-mt-20 border-t border-border bg-muted/20 py-14">
            <SectionHeading>SWE Experience</SectionHeading>
            <ExperienceList items={sweExperience} />
          </section>

          {/* ---------- Writing ---------- */}
          <section id="writing" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading>Writing</SectionHeading>
            <ul className="mt-7 space-y-2">
              {writing.map((w) => (
                <li key={w.title}>
                  <a
                    href={w.href}
                    className="group block rounded-md p-3 no-underline hover:no-underline hover:bg-muted"
                    {...newTabProps(w.href)}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-serif text-lg font-medium text-foreground">
                        {w.title}
                      </span>
                      <span className="shrink-0 font-mono text-sm text-muted-foreground group-hover:text-primary">
                        ↗
                      </span>
                    </div>
                    {w.desc && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                    )}
                    {w.meta && (
                      <p className="mt-1.5 font-mono text-xs text-primary/80">{w.meta}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Teaching ---------- */}
          <section id="teaching" className="scroll-mt-20 border-t border-border bg-muted/20 py-14">
            <SectionHeading>Teaching</SectionHeading>
            <ul className="mt-7 space-y-2">
              {teaching.map((t) => (
                <li key={t.course} className="flex flex-col justify-between gap-1 rounded-md p-3 transition-colors hover:bg-muted/30 sm:flex-row sm:items-center">
                  <p className="text-sm font-medium text-foreground">{t.course}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role} · {t.years}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Outside ---------- */}
          <section id="outside" className="scroll-mt-20 border-t border-border py-14">
            <SectionHeading>Outside Research</SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              When I&rsquo;m away from a computer, you&rsquo;ll usually find me
              playing squash or underwater.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <figure className="rounded-md border border-border bg-card p-4 shadow-sm">
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <img
                      src={scubaTurtle}
                      alt="Green sea turtle on a sandy reef"
                      width={1284}
                      height={1650}
                      loading="lazy"
                      className="aspect-[3/4] w-full rounded-sm border border-border object-cover"
                    />
                    <img
                      src={scubaDiver}
                      alt="Scuba diving, seated mid-water"
                      width={1284}
                      height={2224}
                      loading="lazy"
                      className="aspect-[3/4] w-full rounded-sm border border-border object-cover"
                    />
                  </div>
                  <img
                    src={scubaSnake}
                    alt="Banded sea krait above the sand"
                    width={1283}
                    height={705}
                    loading="lazy"
                    className="aspect-video w-full rounded-sm border border-border object-cover"
                  />
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <p className="font-serif text-lg font-medium text-foreground">Scuba Diving</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    PADI Open Water diver, working my way toward Advanced and Rescue.
                    I love scuba because it&rsquo;s one of the few places you can
                    see wildlife truly in the wild — even if that means being two
                    metres from a sea snake. Only complaint: the water&rsquo;s
                    salty.
                  </p>
                </figcaption>
              </figure>

              <figure className="rounded-md border border-border bg-card p-4 shadow-sm">
                <img
                  src={squashPhoto}
                  alt="Playing squash"
                  width={1284}
                  height={1664}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-sm border border-border object-cover"
                />
                <figcaption className="mt-4 border-t border-border pt-4">
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
