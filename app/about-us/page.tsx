import { ContentPage } from "@/components/ContentPage";
export const metadata = { title: "About us | Project Rebirth" };
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "About us",
        title: "Rebuilding with dignity. Growing through community.",
        description:
          "Project Rebirth develops communities and supports internally displaced persons affected by insurgency and violence, creating economic opportunities that help them rebuild with dignity.",
        image: "/story-1.jpg",
        sections: [
          {
            id: "mission",
            title: "Our mission",
            text: "We develop communities and support internally displaced persons affected by insurgency and violence, creating economic opportunities that help them rebuild with dignity.",
          },
          {
            id: "story",
            title: "Our story",
            text: "Project Rebirth began in 2018 in response to displacement caused by insurgency and violence in Northern Nigeria. What started as skills training across rural communities in Ondo, where women and young people gained economic skills to generate an income, has grown into a community development organisation working with displaced people, women-led businesses and partners across five Nigerian states and the FCT.",
            bullets: [
              "Our work has expanded into gender equality, peacebuilding and mediation.",
              "We support youth leadership and development, climate advocacy, and women-led climate ventures through microcredit.",
            ],
            image: "/story-2.jpg",
          },
          {
            id: "approach",
            title: "Our approach",
            text: "Community members help shape the support they receive, from the first conversation to follow-up.",
            bullets: [
              "Listen to communities and assess needs.",
              "Design programmes with community members.",
              "Deliver support directly and through referral to partner services.",
              "Measure results and report openly.",
            ],
          },
          {
            id: "locations",
            title: "Where we work",
            text: "Our work spans five states and the Federal Capital Territory in Nigeria.",
            bullets: [
              "Federal Capital Territory (FCT)",
              "Nasarawa",
              "Ondo",
              "Borno",
              "Benue",
              "Plateau",
            ],
          },
        ],
      }}
    />
  );
}
