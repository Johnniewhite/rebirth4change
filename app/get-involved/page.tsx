import { ContentPage } from "@/components/ContentPage";
export const metadata = { title: "Get involved | Project Rebirth" };
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "Get involved",
        title: "Your contribution can open a new beginning.",
        description:
          "Bring your time, expertise, connections or financial support to the work of rebuilding lives and livelihoods.",
        image: "/second.jpeg",
        sections: [
          {
            id: "volunteer",
            title: "Volunteer",
            text: "Help with community activities, mentoring and outreach. Tell us about your skills, location and availability so we can discuss where you might contribute.",
            link: {
              href: "/contact?interest=Volunteering",
              label: "Express interest in volunteering",
            },
          },
          {
            id: "partner",
            title: "Partner",
            text: "Organisations and funders can work with us on programmes, enterprise support and services for displaced communities.",
            link: {
              href: "/contact?interest=Partnership",
              label: "Partner with us",
            },
          },
          {
            id: "donate",
            title: "Donate",
            text: "Support our work with displaced people and host communities. Contact the team to discuss current funding needs and confirm donation arrangements.",
            link: {
              href: "/contact?interest=Donation",
              label: "Discuss a donation",
            },
          },
          {
            id: "refer",
            title: "Refer someone",
            text: "Community organisations can refer displaced individuals or women-led businesses for microcredit and support. Begin with a general enquiry; our team will explain the next steps and how to share information safely.",
            link: {
              href: "/contact?interest=Referral",
              label: "Start a referral enquiry",
            },
          },
        ],
      }}
    />
  );
}
