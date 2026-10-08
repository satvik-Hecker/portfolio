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
      website: "https://www.bennett.edu.in",
    }
  ],
  about: `Hi! I'm a software engineer passionate about building scalable, user-centric applications with clean and efficient code. \n
  I enjoy exploring new technologies, tackling complex problems, and transforming ideas into meaningful, impactful projects. \n
  Off the keyboard, you'll find me singing, playing instruments, gaming, or watching movies/shows on repeat - turns out creativity from all that sneaks into my engineering too.

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
