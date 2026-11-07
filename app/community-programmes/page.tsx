import { ContentPage } from "@/components/ContentPage";
export const metadata = { title: "Our community programmes | Project Rebirth" };
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "Our community programmes",
        title: "Support shaped around people’s lives.",
        description:
          "We work alongside displaced individuals, families and host communities to understand needs, strengthen local connections and build resilience.",
        image: "/work1.jpg",
        sections: [
          {
            id: "displaced-persons",
            title: "Displaced persons support",
            text: "Our programme team meets displaced individuals and families to understand their circumstances, including housing, income, safety and skills. Together we agree on a support plan and connect people to the services they need, through our own programmes or trusted partners.",
            bullets: [
              "Needs assessment conversations with individuals, households and groups",
              "Individual support plans and follow-up",
              "Referral to health, legal, education, loan, psychosocial and shelter services",
              "Information sessions on rights and available services",
            ],
            link: {
              href: "/contact?interest=Referral",
              label: "Discuss a referral",
            },
          },
          {
            id: "engagement",
            title: "Community engagement",
            text: "We work with community leaders, women’s groups and youth networks to plan activities that strengthen local resilience.",
            bullets: [
              "Community consultations and dialogue sessions",
              "Volunteer recruitment, orientation and coordination",
              "Youth and women’s participation in programme design",
              "Awareness and advocacy campaigns",
            ],
            image: "/work3.jpg",
          },
          {
            id: "climate",
            title: "Climate resilience",
            text: "People affected by conflict are often also affected by extreme weather. Our climate work includes advocacy, community education and support for women-led climate ventures.",
            bullets: [
              "Climate advocacy and awareness activities",
              "Community sessions on displacement linked to extreme weather",
              "Financing through microcredit and support for climate-focused women-led businesses",
            ],
            link: {
              href: "/economic-opportunities",
              label: "Explore economic opportunities",
            },
          },
        ],
      }}
    />
  );
}
