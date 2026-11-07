import Link from "next/link";
import { navigation, email, whatsapp } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">A future built together</p>
            <h2>
              Everyone deserves
              <br />
              <em>a place to begin again.</em>
            </h2>
            <Link href="/get-involved" className="button-light mt-8">
              Be part of the work ↗
            </Link>
          </div>
          <div>
            <p className="footer-label">Start a conversation</p>
            <a href={"mailto:" + email}>{email}</a>
            <a href={whatsapp}>WhatsApp: +234 806 366 5808</a>
            <a href="https://www.instagram.com/projectrebirthng/">
              Instagram ↗
            </a>
            <a href="https://www.linkedin.com/company/project-rebirth/">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <Link href="/press">Press & films</Link>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Project Rebirth</span>
          <span>Working with communities across Nigeria since 2018.</span>
        </div>
      </div>
    </footer>
  );
}
