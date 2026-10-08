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
        description: `- Architected and delivered end-to-end frontend features using React.js and JavaScript.
- Built a scalable, reusable React.js component library enforcing design system consistency across 10+ pages.`,
        skills: [
          "JavaScript",
          "React.js",
          "Tailwind CSS",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
]
