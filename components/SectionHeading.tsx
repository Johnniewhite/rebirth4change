type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center" }

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="body-large mt-6">{description}</p>}
    </div>
  )
}
