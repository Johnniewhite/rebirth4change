import Image from "next/image";
import Link from "next/link";
import { PageHero } from "./PageHero";
import { ContactCTA } from "./ContactCTA";
export type Section = {
  id: string;
  title: string;
  text: string;
  bullets?: string[];
  image?: string;
  link?: { href: string; label: string };
};
export function ContentPage({
  eyebrow,
  title,
  description,
  image,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  sections: Section[];
}) {
  return (
    <main id="main">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        imageAlt="Project Rebirth community activities"
      />
      <div className="section-index site-container" aria-label="On this page">
        {sections.map((s) => (
          <a href={"#" + s.id} key={s.id}>
            {s.title} ↘
          </a>
        ))}
      </div>
      {sections.map((s, i) => (
        <section
          id={s.id}
          className={"content-section " + (i % 2 ? "tinted" : "")}
          key={s.id}
        >
          <div className="site-container content-grid">
            <div className="section-number">
              {String(i + 1).padStart(2, "0")} /<h2>{s.title}</h2>
            </div>
            <div>
              <p className="body-large">{s.text}</p>
              {s.bullets && (
                <ul className="detail-list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {s.image && (
                <div className="content-photo">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:760px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
              )}
              {s.link && (
                <Link className="button-primary mt-7" href={s.link.href}>
                  {s.link.label} ↗
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}
      <ContactCTA />
    </main>
  );
}
