"use client";

import { useState } from "react";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Download,
    ChevronLeft,
    ChevronRight,
    ImageOff,
    PlayCircle,
} from "lucide-react";

/**
 * DATA
 * -----
 * Fill in real content here. Two things you asked for live in this shape:
 *
 * 1. Download CV — set `cvHref` to the path of your CV. Drop the PDF in
 *    `/public/cv/` in your Next.js project (e.g. `/public/cv/abraham-jonathan-cv.pdf`)
 *    and the button below will serve it directly.
 *
 * 2. Screenshots + video demo per project — each project has a
 *    `screenshots: string[]` array (image URLs — local `/projects/...` paths
 *    or hosted links both work) and an optional `video` object:
 *      { type: "youtube", src: "https://www.youtube.com/embed/VIDEO_ID" }
 *      { type: "file", src: "/projects/adashe-demo.mp4" }
 *    Leave `screenshots` empty or `video` unset and the layout shows a
 *    clean placeholder instead of breaking.
 */

const cvHref = "/cv/jonathan-abraham-resume.pdf";

type Video = { type: "youtube" | "file"; src: string };

type Project = {
    title: string;
    tag: string;
    description: string;
    stack: string[];
    screenshots: string[];
    video?: Video;
    link?: string;
};

const projects: Project[] = [
    {
        title: "Adashe",
        tag: "Fintech mobile app",
        description:
            "A cooperative savings platform — members contribute to shared plans, take loans, and repay them, while agents handle transactions on their behalf. I built the transaction and receipt system, contribution plans, and dashboard.",
        stack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
        screenshots: [
            "/screenshot/adashe.png",
            // "/projects/adashe-2.png",
        ],
        // video: { type: "youtube", src: "https://www.youtube.com/embed/VIDEO_ID" },
        link: "https://play.google.com/store/search?q=adashe+app&c=apps",
    },
    {
        title: "Football News & Prediction",
        tag: "Android app",
        description:
            "An early native Android project — match predictions, news feeds and football information, with Firebase handling authentication and data.",
        stack: ["Kotlin", "Android", "Firebase", "OAuth"],
        screenshots: [
            // "/projects/football-1.png",
        ],
        link: undefined,
    },
    {
        title: "E-Commerce Platform",
        tag: "Full-stack web app",
        description:
            "A full-stack online store with authentication and payment functionality, built end to end.",
        stack: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
        screenshots: [
            // "/projects/ecommerce-1.png",
        ],
        link: "https://github.com/LegendAb/E-commerce-store",
    },
    {
        title: "Asra Music Platform",
        tag: "Frontend",
        description:
            "Frontend components and user interfaces for a music streaming platform.",
        stack: ["React.js"],
        screenshots: [
            // "/projects/asra-1.png",
        ],
        link: undefined,
    },
    {
        title: "TechXplora Quiz Platform",
        tag: "WordPress site",
        description: "An online quiz platform I built and maintained on WordPress.",
        stack: ["WordPress"],
        screenshots: [
            // "/projects/techxplora-1.png",
        ],
        link: undefined,
    },
];

const skills = [
    { group: "Mobile", items: ["React Native", "Expo", "Flutter", "Android Native (Kotlin)"] },
    { group: "Web", items: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "WordPress"] },
    { group: "Backend and data", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Firebase"] },
    { group: "Practice", items: ["Git", "GitHub", "Postman", "Figma"] },
];

// A stylised ledger snippet for the hero — grounded in the transaction-type
// colour coding built for Adashe, not a generic gradient block.
const heroLedger = [
    { label: "Contribution", type: "in", amount: "+ ₦15,000" },
    { label: "Loan repayment", type: "out", amount: "- ₦8,200" },
    { label: "Savings payout", type: "in", amount: "+ ₦42,000" },
];

export default function Home() {
    return (
        <main className="bg-stone-950 text-stone-50">
            <Nav />
            <Hero />
            <Work />
            <Experience />
            <About />
            <Contact />
            <footer className="border-t border-stone-800">
                <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-stone-500 sm:flex-row sm:justify-between">
                    <span>© 2026 Abraham Jonathan</span>
                    <span>Mobile engineer, based in Abuja</span>
                </div>
            </footer>
        </main>
    );
}

function Nav() {
    return (
        <nav className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <a href="#" className="font-serif text-lg font-medium text-stone-50">
                    Abraham Jonathan
                </a>
                <div className="hidden gap-8 text-sm text-stone-300 sm:flex">
                    <a href="#work" className="hover:text-stone-50">Work</a>
                    <a href="#experience" className="hover:text-stone-50">Experience</a>
                    <a href="#about" className="hover:text-stone-50">About</a>
                    <a href="#contact" className="hover:text-stone-50">Contact</a>
                </div>
                <a
                    href={cvHref}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 text-sm font-medium text-stone-100 hover:border-stone-400"
                >
                    <Download size={15} />
                    Download CV
                </a>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
                <p className="text-sm font-medium text-emerald-400">Mobile engineer</p>
                <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
                    I build mobile products people trust with their money.
                </h1>
                <p className="mt-6 max-w-md text-lg leading-7 text-stone-300">
                    I&apos;m Abraham — a React Native and Kotlin developer in Abuja. Most of
                    my recent work has gone into Adashe, a fintech app where cooperative
                    groups save, borrow and repay together.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-medium text-stone-950 hover:bg-emerald-300"
                    >
                        See my work
                    </a>
                    <a
                        href={cvHref}
                        download
                        className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-medium text-stone-100 hover:border-stone-400"
                    >
                        <Download size={16} />
                        View my CV
                    </a>
                </div>
            </div>

            {/* Phone frame with a small ledger, standing in for a screenshot until real ones are added */}
            <div className="mx-auto w-full max-w-[280px]">
                <div className="rounded-[2rem] border border-stone-700 bg-stone-900 p-2 shadow-2xl shadow-black/40">
                    <div className="rounded-[1.6rem] bg-stone-50 p-4">
                        <div className="flex items-center justify-between text-xs text-stone-400">
                            <span>9:41</span>
                            <span>Adashe</span>
                        </div>
                        <p className="mt-4 text-xs font-medium text-stone-500">Recent activity</p>
                        <div className="mt-3 space-y-2">
                            {heroLedger.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex items-center justify-between rounded-xl bg-white px-3 py-3 shadow-sm"
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`h-2 w-2 rounded-full ${row.type === "in" ? "bg-emerald-500" : "bg-amber-500"
                                                }`}
                                        />
                                        <span className="text-sm text-stone-700">{row.label}</span>
                                    </div>
                                    <span
                                        className={`text-sm font-medium ${row.type === "in" ? "text-emerald-700" : "text-amber-700"
                                            }`}
                                    >
                                        {row.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Work() {
    return (
        <section id="work" className="border-t border-stone-800 bg-stone-900">
            <div className="mx-auto max-w-5xl px-6 py-20">
                <p className="text-sm font-medium text-emerald-400">Selected work</p>
                <h2 className="mt-3 font-serif text-3xl text-stone-50">
                    A few of the products I&apos;ve shipped
                </h2>
                <div className="mt-14 space-y-20">
                    {projects.map((project) => (
                        <ProjectRow key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project }: { project: Project }) {
    const [index, setIndex] = useState(0);
    const hasShots = project.screenshots.length > 0;

    return (
        <article className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
                <p className="text-sm text-stone-400">{project.tag}</p>
                <h3 className="mt-1 font-serif text-2xl text-stone-50">{project.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                        <span
                            key={t}
                            className="rounded-full bg-stone-800 px-3 py-1 font-mono text-xs text-stone-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300"
                    >
                        View project <ArrowUpRight size={14} />
                    </a>
                )}
            </div>

            <div className="space-y-4">
                {/* Screenshot slot */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-stone-800 bg-stone-950">
                    {hasShots ? (
                        <>
                            <img
                                src={project.screenshots[index]}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={() =>
                                            setIndex((i) => (i - 1 + project.screenshots.length) % project.screenshots.length)
                                        }
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/90 p-1.5 text-stone-100 shadow"
                                        aria-label="Previous screenshot"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button
                                        onClick={() => setIndex((i) => (i + 1) % project.screenshots.length)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/90 p-1.5 text-stone-100 shadow"
                                        aria-label="Next screenshot"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-stone-500">
                            <ImageOff size={22} />
                            <span className="text-sm">Screenshots coming soon</span>
                        </div>
                    )}
                </div>

                {/* Video demo slot */}
                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-stone-800 bg-stone-950">
                    {project.video ? (
                        project.video.type === "youtube" ? (
                            <iframe
                                src={project.video.src}
                                title={`${project.title} demo`}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <video controls className="h-full w-full">
                                <source src={project.video.src} />
                            </video>
                        )
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-stone-500">
                            <PlayCircle size={22} />
                            <span className="text-sm">Demo video coming soon</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-sm font-medium text-emerald-400">Experience</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-50">Building for real users</h2>
            <div className="mt-8 border-l-2 border-emerald-400/40 pl-6">
                <p className="text-sm text-stone-400">I-Tech Platform Limited</p>
                <h3 className="mt-1 text-xl font-medium text-stone-50">React Native developer</h3>
                <ul className="mt-3 max-w-2xl space-y-2.5 leading-7 text-stone-300">
                    {[
                        "Built and maintained mobile workflows for savings, loans, contributions and repayments.",
                        "Developed agent transaction flows and member-facing financial workflows.",
                        "Implemented transaction receipts and status handling for completed and pending transactions.",
                        "Integrated REST APIs and managed application state with Redux Toolkit.",
                        "Worked across member and agent experiences within the fintech platform.",
                    ].map((point) => (
                        <li key={point} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="border-t border-stone-800 bg-stone-900">
            <div className="mx-auto grid max-w-5xl gap-14 px-6 py-20 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-medium text-emerald-400">About</p>
                    <h2 className="mt-3 font-serif text-3xl text-stone-50">
                        Engineer first, product minded
                    </h2>
                    <div className="mt-6 space-y-4 leading-7 text-stone-300">
                        <p>
                            I focus on React Native, TypeScript and Kotlin, mostly in
                            fintech contexts where getting the details right actually
                            matters — a wrong balance or a missing receipt field isn&apos;t a
                            cosmetic bug.
                        </p>
                        <p>
                            Before this, I spent time in technical training and
                            facilitation, including work with NITDA and ADOF. That shows up
                            now in how I explain trade-offs and write things other people
                            can pick up.
                        </p>
                    </div>
                </div>
                <div className="space-y-6">
                    {skills.map((s) => (
                        <div key={s.group}>
                            <p className="text-sm font-medium text-stone-400">{s.group}</p>
                            <p className="mt-1 text-lg text-stone-100">{s.items.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8 sm:p-12">
                <p className="text-sm font-medium text-emerald-400">Contact</p>
                <h2 className="mt-3 max-w-xl font-serif text-3xl text-stone-50 sm:text-4xl">
                    Have a product that needs building?
                </h2>
                <p className="mt-4 max-w-lg leading-7 text-stone-300">
                    I&apos;m open to conversations about mobile engineering, fintech
                    products and interesting software work.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="mailto:abraham.jonathan2015@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-medium text-stone-950 hover:bg-emerald-300"
                    >
                        <Mail size={16} /> Email me
                    </a>
                    <a
                        href="https://github.com/LegendAb"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-5 py-3 text-sm font-medium text-stone-100 hover:border-stone-300"
                    >
                        <Github size={16} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abraham-jonathan-8a1300228/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-5 py-3 text-sm font-medium text-stone-100 hover:border-stone-300"
                    >
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                        href={cvHref}
                        download
                        className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-5 py-3 text-sm font-medium text-stone-100 hover:border-stone-300"
                    >
                        <Download size={16} /> Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}