import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
const team = [
  ["Oluwadamilola Akintewe", "Community Development Officer", "/dami2.jpg"],
  ["Ahmodu Blessing", "Programs Officer", "/blessing.jpg"],
  ["Priscilla Bilkisu", "Local Translator", null],
  ["Luka", "Local Liaison Officer", null],
  ["Doris Asuquo", "Communications Officer", null],
];
export const metadata = { title: "Our Team | Project Rebirth" };
export default function Page() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our team"
        title="The people behind the work."
        description="Programme leadership, community relationships and communication come together to support people rebuilding their lives."
        image="/home1.jpg"
        imageAlt="Project Rebirth team"
      />
      <section className="section-space">
        <div className="site-container">
          <p className="eyebrow">Programme leadership & community support</p>
          <div className="team-grid">
            {team.map(([name, role, img]) => (
              <article key={name}>
                <div className="team-image">
                  {img ? (
                    <Image
                      src={img}
                      alt={name!}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width:760px) 100vw, 33vw"
                    />
                  ) : (
                    <span aria-hidden="true">
                      {name!
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h2>{name}</h2>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA
        title="Join our volunteer community."
        description="Contribute to community activities, mentoring and outreach alongside our programme team."
      />
    </main>
  );
}
