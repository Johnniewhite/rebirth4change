import Image from "next/image";
import Link from "next/link";
import { stats } from "@/lib/site";
import { ContactCTA } from "@/components/ContactCTA";
export default function Home() {
  return (
    <main id="main">
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Rooted in community. Rebuilding together.</p>
            <h1>
              Rebuilding lives
              <br />
              and livelihoods.
              <br />
              <em>Restoring possibility.</em>
            </h1>
            <p>
              For communities affected by insurgency and violence. Project
              Rebirth supports internally displaced persons and host communities
              in Nigeria through community development programmes, case-based
              support and economic opportunity.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/community-programmes">
                Our programmes ↗
              </Link>
              <Link className="text-link" href="/get-involved">
                Get involved →
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/home1.jpg"
              alt="Project Rebirth members working together"
              fill
              priority
              sizes="(max-width:760px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="photo-caption">
              <span>REBUILDING, TOGETHER</span>
              <p>New beginnings take a community.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-band">
        <div className="site-container stats-grid">
          {stats.map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="section-intro">
            <p className="eyebrow">Our approach</p>
            <h2>
              Support that starts with listening.
              <br />
              <em>Opportunity that lasts.</em>
            </h2>
            <p>
              Every community has its own strengths, experiences and needs. Our
              work begins there.
            </p>
          </div>
          <div className="approach-grid">
            {[
              [
                "01",
                "Understand needs",
                "We assess the situation of displaced families and communities so that support matches real needs.",
              ],
              [
                "02",
                "Deliver programmes",
                "We plan and run community programmes, from livelihood training to climate-resilient enterprise support.",
              ],
              [
                "03",
                "Create opportunity",
                "We connect people to microcredit, business support and partner services so they can earn an income and rebuild.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="work-section">
        <div className="site-container">
          <div className="section-intro">
            <p className="eyebrow">Two pathways. One shared purpose.</p>
            <h2>
              From immediate support
              <br />
              to a stronger tomorrow.
            </h2>
          </div>
          <div className="pathway-grid">
            {[
              [
                "/community-programmes",
                "/work1.jpg",
                "01 / COMMUNITY",
                "Stronger communities, together.",
                "Displaced persons support, community engagement and climate resilience.",
              ],
              [
                "/economic-opportunities",
                "/work2.jpg",
                "02 / OPPORTUNITY",
                "The means to build a livelihood.",
                "Microcredit, women-led enterprise support, skills and livelihoods.",
              ],
            ].map(([url, img, k, t, d]) => (
              <Link href={url} className="pathway" key={url}>
                <div className="pathway-image">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width:760px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pathway-copy">
                  <small>{k}</small>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <span>Explore this work ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container story-grid">
          <div className="story-photo">
            <Image
              src="/story-1.jpg"
              alt="Women participating in a Project Rebirth gathering"
              fill
              sizes="(max-width:760px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our story · Since 2018</p>
            <h2 className="section-title">
              Dignity is the starting point.
              <br />
              <em>Community is the way forward.</em>
            </h2>
            <p className="body-large mt-6">
              What began with skills training in rural Ondo has grown into a
              community development organisation working with displaced people,
              women-led businesses and partners across Nigeria.
            </p>
            <Link href="/about-us" className="text-link mt-7">
              Meet Project Rebirth →
            </Link>
            <div className="location-note">
              <small>WHERE WE WORK</small>
              <p>FCT · Nasarawa · Ondo · Borno · Benue · Plateau</p>
            </div>
          </div>
        </div>
      </section>
      <section className="partner-strip">
        <div className="site-container">
          <p className="eyebrow">Progress through partnership</p>
          <div>
            <span>Z Zurich Foundation</span>
            <span>AFS</span>
            <span>Enactus AAUA</span>
            <span>Waidi-Ben Hirki Foundation</span>
          </div>
          <Link href="/partners" className="text-link">
            Partner with us →
          </Link>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
