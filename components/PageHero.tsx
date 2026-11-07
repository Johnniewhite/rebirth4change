import Image from "next/image";
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="page-hero">
      <div className="site-container page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="body-large">{description}</p>
        </div>
        <div className="page-hero-photo">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
