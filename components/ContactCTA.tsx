import Link from "next/link";
export function ContactCTA({
  title = "Help make the next beginning possible.",
  description = "Bring your time, expertise, or support to community programmes that help people rebuild with dignity.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cta-section">
      <div className="site-container cta-inner">
        <div>
          <p className="eyebrow">Get involved</p>
          <h2 className="section-title">{title}</h2>
          <p className="body-large mt-5">{description}</p>
        </div>
        <Link href="/get-involved" className="button-primary">
          Find your way to help ↗
        </Link>
      </div>
    </section>
  );
}
