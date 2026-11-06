import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "innobyte",
    companyName: "Innobyte Services",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern (Frontend)",
        employmentPeriod: {
          start: "Oct 2025",
          end: "Nov 2025"
        },
        employmentType: "Intern",
        icon: <CodeXmlIcon />,
        description: `- Architected and delivered end-to-end frontend features using Next.js and TypeScript, collaborating with CMS and SEO teams on Strapi integration, search visibility improvements, and content workflow efficiency.
- Built a scalable, reusable React.js component library enforcing design system consistency across 10+ pages, reducing feature development time by 25% and improving cross-team maintainability.
- Shipped production-ready frontend features within an Agile 3-member team, maintaining code quality through structured code review workflows.`,
        skills: [
          "Next.js",
          "TypeScript",
          "React.js",
          "Strapi",
          "Tailwind CSS",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "smokestack",
    companyName: "SmokeStack",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern (FullStack)",
        employmentPeriod: {
          start: "Apr 2024",
          end: "Jun 2024",
        },
        employmentType: "Intern",
        icon: <CodeXmlIcon />,
        description: `- Contributed to full-stack development and 100% on-time delivery of 7+ client projects within a 5-member team, maintaining consistent project completion across multiple concurrent client deliverables.
- Implemented responsive, cross-browser compatible UI layouts while coordinating with designers and project managers in structured sprint workflows to streamline handoffs and maintain design-to-development consistency across all projects.`,
        skills: [
          "React.js",
          "Express.js",
          "Node.js",
          "Tailwind CSS",
          "Python",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
]
