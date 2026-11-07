import { ContactForm } from "@/components/ContactForm";
import { email, whatsapp } from "@/lib/site";
export const metadata = { title: "Contact | Project Rebirth" };
export default function Page() {
  return (
    <main id="main">
      <section className="section-space">
        <div className="site-container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-title mt-6">
              Every connection
              <br />
              <em>can be a beginning.</em>
            </h1>
            <p className="body-large mt-6">
              Ask about a programme, discuss a partnership or find out how to
              get involved.
            </p>
            <div className="contact-details">
              <span>Email</span>
              <a href={"mailto:" + email}>{email}</a>
              <span>Phone / WhatsApp</span>
              <a href="tel:+2348063665808">+234 806 366 5808</a>
              <a className="text-link" href={whatsapp}>
                Start a WhatsApp conversation ↗
              </a>
              <span>Follow our work</span>
              <a href="https://www.instagram.com/projectrebirthng/">
                Instagram ↗
              </a>
              <a href="https://www.linkedin.com/company/project-rebirth/">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
