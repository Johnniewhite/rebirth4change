import { ContentPage } from "@/components/ContentPage";
export const metadata = { title: "Impact and learning | Project Rebirth" };
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "Impact and learning",
        title: "Learn from the work. Make the next step stronger.",
        description:
          "We keep records, evaluate programmes and use what we learn to improve support for communities.",
        image: "/home2.jpg",
        sections: [
          {
            id: "measurement",
            title: "How we measure impact",
            text: "We track participation, enterprise growth and community outcomes, and use the results to improve programmes.",
            bullets: [
              "500+ women-led businesses supported",
              "8 communities reached",
              "Five states and the FCT",
              "7,000+ internally displaced persons engaged",
            ],
          },
          {
            id: "stories",
            title: "Stories from the work",
            text: "Watch the existing Project Rebirth documentary and awards film for a closer look at the organisation and its work.",
            link: {
              href: "/impact-and-learning/films",
              label: "Watch the films",
            },
          },
          {
            id: "reports",
            title: "Reports and learning",
            text: "For available programme information and reports, please contact our team.",
            link: {
              href: "/contact?interest=Reports%20and%20learning",
              label: "Request information",
            },
          },
          {
            id: "safeguarding",
            title: "Safeguarding and privacy",
            text: "We protect the privacy and safety of the people we serve and keep confidential records. Please use the initial enquiry form only to request a conversation; do not include sensitive personal details about yourself or someone you are referring.",
            link: {
              href: "/contact?interest=Safeguarding",
              label: "Contact the team",
            },
          },
        ],
      }}
    />
  );
}
