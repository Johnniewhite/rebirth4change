import { ContentPage } from "@/components/ContentPage";
export const metadata = {
  title: "Partners and stakeholders | Project Rebirth",
};
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "Partners and stakeholders",
        title: "Different strengths. Shared responsibility.",
        description:
          "Project Rebirth works with donors, corporate partners, government bodies, multilateral organisations and community-based groups.",
        image: "/third.jpeg",
        sections: [
          {
            id: "partners",
            title: "Working together",
            text: "Our partners include Z Zurich Foundation, AFS, Enactus AAUA and Waidi-Ben Hirki Foundation.",
            bullets: [
              "Funding and programme partners",
              "Referral and service partners",
              "Community and youth networks",
            ],
          },
          {
            id: "collaborate",
            title: "Build a partnership",
            text: "Organisations and funders can work with us on community programmes, economic opportunities and referral pathways. Tell us about your organisation and where you see an opportunity to collaborate.",
            link: {
              href: "/contact?interest=Partnership",
              label: "Start a partnership conversation",
            },
          },
        ],
      }}
    />
  );
}
