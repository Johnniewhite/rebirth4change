import Image from "next/image";
import { PageHero } from "@/components/PageHero";
export const metadata = { title: "Films | Project Rebirth" };
export default function Page() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Stories from the work"
        title="See the work. Hear the story."
        description="Two films from Project Rebirth’s existing collection."
        image="/work1.jpg"
        imageAlt="Project Rebirth community programme"
      />
      <section className="section-space">
        <div className="site-container pathway-grid">
          {[
            [
              "Project Rebirth documentary",
              "https://www.youtube.com/watch?v=bQC6whYlSbY",
              "/work1.jpg",
            ],
            [
              "YGC Recoupling Awards 2023 — Project Rebirth",
              "https://www.youtube.com/watch?v=iRh9FdOCPQU",
              "/youtube1.png",
            ],
          ].map(([title, url, img]) => (
            <a
              className="pathway"
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="pathway-image">
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="pathway-copy">
                <h2>{title}</h2>
                <span>Watch on YouTube ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
