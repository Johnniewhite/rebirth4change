import { ContentPage } from "@/components/ContentPage";
export const metadata = { title: "Economic opportunities | Project Rebirth" };
export default function Page() {
  return (
    <ContentPage
      {...{
        eyebrow: "Economic opportunities",
        title: "The opportunity to earn. The freedom to rebuild.",
        description:
          "Skills, enterprise support and access to small loans help people build livelihoods and strengthen their communities.",
        image: "/work2.jpg",
        sections: [
          {
            id: "microcredit",
            title: "Microcredit for women-led ventures",
            text: "We provide small loans to women-led businesses, including climate-focused ventures, so participants can start or grow income-generating activities.",
            bullets: [
              "Contact our team to ask about current application opportunities.",
              "The team will explain eligibility, repayment terms and available support before you apply.",
            ],
            link: {
              href: "/contact?interest=Microcredit",
              label: "Enquire about microcredit",
            },
          },
          {
            id: "enterprise",
            title: "Women-led enterprise support",
            text: "Project Rebirth has served 500+ women-led businesses and engaged 7,000+ internally displaced persons in Nigeria. Our enterprise work brings together training, mentoring, access to markets and microcredit.",
            image: "/work4.jpg",
            link: {
              href: "/contact?interest=Enterprise%20support",
              label: "Talk to us about your enterprise",
            },
          },
          {
            id: "skills",
            title: "Skills and livelihoods",
            text: "Practical learning creates routes into income-generating work. Activities reflect local needs and the opportunities available within each community.",
            bullets: [
              "Sewing training",
              "Community town halls",
              "Climate-resilient farming",
            ],
            link: {
              href: "/contact?interest=Skills%20and%20livelihoods",
              label: "Ask about current programmes",
            },
          },
        ],
      }}
    />
  );
}
