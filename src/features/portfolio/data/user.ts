import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Satvik",
  lastName: "Tiwari",
  displayName: "Satvik Tiwari",
  username: "satvik",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer.",
    "Open source contributor.",
    "I own a vintage iPhone.",
  ],
  address: "Noida, India",
  phoneNumberB64: "KzkxIDk4NjgzMTA5ODU=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "c2F0dmlray50aXdhcmlpaUBnbWFpbC5jb20=", // base64 encoded
  website: "https://sxtvik.site",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "CSE Undergrad",
      company: "Bennett University",
      website: "https://shadcncraft.com?atp=ncdai",
      experienceId: "shadcncraft",
    }
  ],
  about: `I’m Chánh Đại (call me Dai) — a Design Engineer with 5+ years of experience, known for pixel-perfect execution and an obsessive attention to detail.

Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.

Creator of [chanhdai.com](https://github.com/ncdai/chanhdai.com) (2k stars), [React Wheel Picker](https://react-wheel-picker.chanhdai.com) (30k+ weekly downloads, ▲Vercel OSS Program), and [ZaDark](https://zadark.com) (80k+ downloads, 30k+ users) — peak metrics.
`,
  avatar: "./satvik1.jpeg",
  avatarVariants: {
    lightOff: "./satvik1.jpeg",
    lightOn: "./satvik1.jpeg",
    darkOff: "./satvik1.jpeg",
    darkOn: "./satvik1.jpeg",
  },
  ogImage:
    "./satvik1.jpeg",

  timeZone: "Asia/Kolkata",
  keywords: [

  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
