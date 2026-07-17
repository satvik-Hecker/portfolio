import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "bu",
    school: "Bennett University",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2023",
      end: "2027",
    },
    skills: [
      "C++",
      "Java",
      "Python",
      "Web Development",
      "DSA",
      "Advanced Databases",
      "Systems Design",
      "Distributed Systems",
      "Software Engineering",
    ],
  },
  {
    id: "bvm",
    school: "Bhai Parmanand Vidya Mandir",
    degree: "Senior Secondary School",
    fieldOfStudy: "Science",
    period: {
      start: "2020",
      end: "2022",
    },
    skills: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "Music",
    ],
  }
]
