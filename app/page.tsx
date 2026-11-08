import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Sprout,
  Users,
  HandHeart,
} from "lucide-react";
import { stats } from "@/lib/site";
import { ContactCTA } from "@/components/ContactCTA";

const programmes = [
  {
    href: "/community-programmes#displaced-persons",
    image: "/home2.jpg",
    tag: "01 / PEOPLE & COMMUNITY",
    title: "A place to turn. A way forward.",
    text: "Individual support, community connections and trusted referrals for displaced people and host communities.",
    icon: Users,
  },
  {
    href: "/economic-opportunities",
    image: "/work4.jpg",
    tag: "02 / SKILLS & ENTERPRISE",
    title: "Small beginnings. Lasting livelihoods.",
    text: "Practical skills, mentoring and microcredit that help women-led ventures take their next step.",
    icon: HandHeart,
  },
  {
    href: "/community-programmes#climate",
    image: "/work2.jpg",
    tag: "03 / CLIMATE & RESILIENCE",
    title: "Stronger roots. More resilient futures.",
    text: "Climate education, advocacy and support for women building climate-focused businesses.",
    icon: Sprout,
  },
];
export default function Home() {
  return (
    <main id="main" className="rebirth-home">
      <section className="r-hero">
        <Image
          src="/home2.jpg"
          alt="Project Rebirth listening to women in a community gathering"
          fill
          priority
          sizes="100vw"
          className="r-hero-image"
        />
        <div className="r-hero-shade" />
        <div className="site-container r-hero-inner">
          <div className="r-hero-topline">
            <span>
              <i /> COMMUNITY IS WHERE WE BEGIN.
            </span>
            <span>NIGERIA · SINCE 2018</span>
          </div>
          <div className="r-hero-copy">
            <h1>
              Life can
              <br />
              begin <em>again.</em>
            </h1>
            <p>
              Rebuilding lives and livelihoods for communities affected by
              insurgency and violence.
            </p>
            <div className="r-hero-actions">
              <Link
                href="/community-programmes"
                className="r-button r-button-lime"
              >
                Explore our programmes <ArrowUpRight size={19} />
              </Link>
              <Link href="/get-involved" className="r-button r-button-glass">
                Get involved <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
          <div className="r-hero-bottom">
            <a href="#our-purpose" className="r-scroll">
              <ArrowDown size={20} /> A new beginning starts here
            </a>
            <a
              className="r-watch"
              href="https://www.youtube.com/watch?v=bQC6whYlSbY"
              target="_blank"
              rel="noreferrer"
            >
              <span className="r-play">
                <Play size={18} fill="currentColor" />
              </span>
              <span>
                MEET PROJECT REBIRTH<strong>Watch our story ↗</strong>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="r-impact" aria-label="Our reach">
        <div className="site-container r-impact-grid">
          {stats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="our-purpose" className="r-purpose">
        <div className="site-container">
          <div className="r-purpose-heading">
            <p className="r-kicker">01 — WHY WE EXIST</p>
            <h2>
              Displacement changes everything.
              <br />
              <span>It shouldn’t define</span>
              <br />
              <em>what comes next.</em>
            </h2>
          </div>
          <div className="r-purpose-bottom">
            <div className="r-mini-photo">
              <Image
                src="/third.jpeg"
                alt="Project Rebirth team and community members"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <p>
              Project Rebirth supports internally displaced persons and host
              communities in Nigeria through community development programmes,
              case-based support and economic opportunity.
            </p>
            <Link href="/about-us" className="r-round-link">
              <span>Get to know us</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="r-programmes">
        <div className="site-container">
          <div className="r-section-top">
            <div>
              <p className="r-kicker">02 — THE WORK, ON THE GROUND</p>
              <h2>
                People first.
                <br />
                <em>Possibility follows.</em>
              </h2>
            </div>
            <p>
              From the first conversation to a new livelihood, we work alongside
              communities at every step.
            </p>
          </div>
          <div className="r-programme-grid">
            {programmes.map(
              ({ href, image, tag, title, text, icon: Icon }, index) => (
                <Link
                  href={href}
                  className={"r-programme r-programme-" + index}
                  key={href}
                >
                  <div className="r-programme-photo">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width:760px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="r-programme-icon">
                      <Icon size={24} />
                    </span>
                  </div>
                  <div className="r-programme-copy">
                    <small>{tag}</small>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="r-programme-link">
                      Discover the programme <ArrowUpRight size={20} />
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="r-method">
        <div className="site-container r-method-grid">
          <div className="r-method-photo">
            <Image
              src="/work1.jpg"
              alt="Women learning sewing skills together"
              fill
              sizes="(max-width:760px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="r-photo-note">
              <span>
                WITH COMMUNITIES.
                <br />
                FOR COMMUNITIES.
              </span>
              <ArrowUpRight size={40} />
            </div>
          </div>
          <div className="r-method-copy">
            <p className="r-kicker">03 — HOW CHANGE TAKES SHAPE</p>
            <h2>
              Listen.
              <br />
              Build.
              <br />
              <em>Begin again.</em>
            </h2>
            <div className="r-steps">
              {[
                [
                  "01",
                  "Understand needs",
                  "We listen to displaced families and communities so support responds to real needs.",
                ],
                [
                  "02",
                  "Deliver programmes",
                  "We design and run community programmes, from livelihood training to climate-resilient enterprise support.",
                ],
                [
                  "03",
                  "Create opportunity",
                  "We connect people to microcredit, business support and partner services so they can earn an income and rebuild.",
                ],
              ].map(([n, t, d]) => (
                <div key={n}>
                  <span>{n}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="r-film">
        <Image
          src="/home1.jpg"
          alt="Project Rebirth team members in conversation"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="r-film-shade" />
        <div className="site-container r-film-content">
          <p className="r-kicker">THE PEOPLE BEHIND THE PURPOSE</p>
          <h2>
            Real people.
            <br />
            Shared strength.
            <br />
            <em>New chapters.</em>
          </h2>
          <a
            href="https://www.youtube.com/watch?v=bQC6whYlSbY"
            target="_blank"
            rel="noreferrer"
            className="r-film-link"
          >
            <span className="r-play">
              <Play size={24} fill="currentColor" />
            </span>
            Watch the Project Rebirth documentary <ArrowUpRight size={22} />
          </a>
        </div>
      </section>
      <section className="r-reach">
        <div className="site-container r-reach-grid">
          <div>
            <p className="r-kicker">ROOTED IN NIGERIA</p>
            <h2>
              Local connections.
              <br />
              <em>Collective possibility.</em>
            </h2>
            <p>
              From skills training in rural Ondo in 2018 to community programmes
              across five states and the FCT. Our work grows through
              relationships with the people who call these places home.
            </p>
            <Link href="/about-us#locations" className="text-link">
              Explore where we work <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="r-places">
            {["FCT", "Nasarawa", "Ondo", "Borno", "Benue", "Plateau"].map(
              (name, i) => (
                <span key={name}>
                  <small>0{i + 1}</small>
                  {name}
                  <span aria-hidden="true">↗</span>
                </span>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="r-partners">
        <div className="site-container">
          <div className="r-partners-title">
            <p className="r-kicker">GOOD WORK GROWS THROUGH PARTNERSHIP.</p>
            <Link href="/partners">Partner with us ↗</Link>
          </div>
          <div className="r-partner-names">
            <span>
              Z Zurich
              <br />
              <strong>Foundation</strong>
            </span>
            <span className="r-afs">AFS</span>
            <span>
              Enactus <strong>AAUA</strong>
            </span>
            <span>
              Waidi-Ben Hirki
              <br />
              <strong>Foundation</strong>
            </span>
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
