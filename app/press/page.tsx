import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Mail, Play } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

const coverage = [
  {
    name: "Women of the Future UK",
    image: "/womenofthefuture.webp",
    type: "Feature",
    date: "March 2023",
    href: "",
  },
  {
    name: "Global Solutions Initiative",
    image: "/globalsolutions.webp",
    type: "Alumni profile",
    date: "January 2023",
    href: "https://www.global-solutions-initiative.org/young-global-changers/alumni/class-of-2023/",
  },
  {
    name: "Maputo Protocol Solidarity Awards",
    image: "/maputo.png",
    type: "Award recognition",
    date: "August 2023",
    href: "https://equalitynow.org/news_and_insights/20-for-20-solidarity-awards-advancing-the-maputo-protocol/",
  },
];

const videos = [
  {
    title: "YGC Recoupling Awards 2023 — Project Rebirth",
    image: "/youtube1.png",
    href: "https://www.youtube.com/watch?v=iRh9FdOCPQU",
    date: "July 2023",
  },
  {
    title: "Project Rebirth documentary",
    image: "/work1.jpg",
    href: "https://www.youtube.com/watch?v=bQC6whYlSbY",
    date: "June 2023",
  },
];

const releases = [
  {
    title: "Project Rebirth launches sustainable farming initiative",
    date: "April 10, 2023",
    text: "The HerFarm initiative expands sustainable agriculture support for women in rural communities.",
  },
  {
    title: "More than 200 women complete skills training",
    date: "February 2, 2023",
    text: "A new cohort graduates from Project Rebirth’s vocational skills and entrepreneurship programme.",
  },
  {
    title: "Project Rebirth recognized at global forum",
    date: "October 18, 2022",
    text: "The initiative is highlighted as an innovative approach to women’s economic empowerment.",
  },
];

export default function PressPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Press & media"
        title="Stories of women creating change."
        description="Explore selected coverage, recognition, and films documenting Project Rebirth’s work and the people moving it forward."
        image="/IMG_3938-scaled.jpg"
        imageAlt="Project Rebirth community programme"
      />

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Selected coverage"
            title="Recognition that amplifies the mission."
            description="Independent platforms have featured Project Rebirth’s leadership and its approach to women’s empowerment."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {coverage.map((item) => {
              const card = (
                <article className="surface-card flex h-full flex-col p-7 transition hover:-translate-y-1">
                  <div className="flex min-h-28 items-center justify-center rounded-2xl bg-[#f6f2e9] p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={260}
                      height={100}
                      className="max-h-20 w-full object-contain"
                    />
                  </div>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                    {item.type} · {item.date}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
                    {item.name}
                  </h2>
                  {item.href && (
                    <span className="link-arrow mt-6">
                      Read coverage <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </article>
              );
              return item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card}
                </Link>
              ) : (
                <div key={item.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#082f27] text-white">
        <div className="site-container">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow !text-amber-300">Watch</p>
              <h2 className="section-title">See the work in motion.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/60">
              Short films and event features from Project Rebirth’s journey.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videos.map((video) => (
              <Link
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <article>
                  <div className="relative aspect-video overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={video.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />
                    <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-950 shadow-xl">
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                    {video.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
                    {video.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f0eadf]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading
            eyebrow="From our desk"
            title="Updates and milestones."
          />
          <div className="divide-y divide-emerald-950/10 border-y border-emerald-950/10">
            {releases.map((release) => (
              <article key={release.title} className="py-8 md:py-10">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                  <Calendar className="h-4 w-4" /> {release.date}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  {release.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {release.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ef6f4f] text-white">
        <div className="site-container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Media enquiries
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Need an interview, image, or fact check?
            </h2>
          </div>
          <Link
            href="mailto:team@rebirthforchange.org?subject=Media%20Inquiry"
            className="button-light"
          >
            Contact the team <Mail className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
