export type Department = {
  id: string
  name: string
  shortName: string
  description: string
  fests: string[]
}

export type Fest = {
  id: string
  name: string
  departmentId: string
  festType: string
  description: string
  status: "Completed" | "Details Awaited"
  accent: string
  startDate?: string
  endDate?: string
}

export type CampusEvent = {
  id: string
  name: string
  festId?: string
  departmentId: string
  organizingDepartment: string
  organizingClub?: string
  category: string
  description: string
  eventDate?: string
  registrationDeadline?: string
  eligibility?: string
  venue?: string
  registrationUrl?: string
  status: "Completed" | "Upcoming" | "Ongoing" | "Details Awaited"
  format?: string
  note?: string
  time?: string
  teamSize?: string
  prizePool?: string
  tracks?: string[]
  registrationPlatform?: "Unstop"
  theme?: string
  targetParticipants?: string
  poster?: string
  posterAlt?: string
  trackDetails?: { name: string; title: string; description: string }[]
  prizes?: { place: string; amount: string }[]
  rounds?: { name: string; detail: string }[]
  contacts?: { name: string; phone: string }[]
}

export const departments: Department[] = [
  {
    id: "computer-engineering",
    name: "Computer Engineering",
    shortName: "CE",
    description:
      "Computing, software, design, and technology-led student events.",
    fests: ["anantya-26", "anvesham"],
  },
  {
    id: "aiml",
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI",
    description:
      "Exploring intelligent systems, data, and emerging technology.",
    fests: ["artimas"],
  },
  {
    id: "civil-engineering",
    name: "Civil Engineering",
    shortName: "CV",
    description:
      "Built-environment challenges, technical workshops, and design.",
    fests: ["sthapatia"],
  },
  {
    id: "mechanical-engineering",
    name: "Mechanical Engineering",
    shortName: "ME",
    description:
      "Engineering competitions, workshops, and departmental activities.",
    fests: ["galaxia"],
  },
  {
    id: "information-technology",
    name: "Information Technology",
    shortName: "IT",
    description:
      "Technology, innovation, and student-led technical opportunities.",
    fests: ["praxis"],
  },
]

export const fests: Fest[] = [
  {
    id: "anantya-26",
    name: "ANANTYA ’26",
    departmentId: "computer-engineering",
    festType: "Department fest",
    description:
      "A Computer Engineering fest featuring programming, design, cybersecurity, and hackathon events.",
    status: "Completed",
    accent: "blue",
    startDate: "2026-10-09",
    endDate: "2026-10-10",
  },
  {
    id: "artimas",
    name: "ARTIMAS",
    departmentId: "aiml",
    festType: "Department fest",
    description:
      "The fest identity of Artificial Intelligence & Machine Learning. Event details will be added when verified.",
    status: "Details Awaited",
    accent: "violet",
  },
  {
    id: "sthapatia",
    name: "STHAPATIA",
    departmentId: "civil-engineering",
    festType: "Department fest",
    description:
      "A Civil Engineering platform for technical competitions, workshops, and design activities.",
    status: "Details Awaited",
    accent: "amber",
  },
  {
    id: "anvesham",
    name: "ANVESHAM",
    departmentId: "computer-engineering",
    festType: "Regional fest",
    description:
      "A distinct regional Computer Engineering fest with an independent event catalogue.",
    status: "Details Awaited",
    accent: "teal",
  },
  {
    id: "galaxia",
    name: "GALAXIA",
    departmentId: "mechanical-engineering",
    festType: "Department fest",
    description:
      "Mechanical Engineering competitions, workshops, activities, and student opportunities.",
    status: "Details Awaited",
    accent: "orange",
  },
  {
    id: "praxis",
    name: "PRAXIS",
    departmentId: "information-technology",
    festType: "Department fest",
    description:
      "Information Technology events with categories, details, and registration information as it becomes available.",
    status: "Details Awaited",
    accent: "indigo",
  },
]

export const events: CampusEvent[] = [
  {
    id: "codigo",
    name: "CODIGO",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    category: "Competitive Programming",
    description: "An ICPC simulation event conducted under ANANTYA ’26.",
    eventDate: "2026-10-09",
    venue: "PCCOE",
    status: "Completed",
    note: "Detailed schedule, venue, eligibility, and registration information are awaiting verified records.",
  },
  {
    id: "masterchef-ui",
    name: "MasterChef UI",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    category: "UI/UX Design",
    description: "A UI/UX design event conducted under ANANTYA ’26.",
    eventDate: "2026-10-09",
    venue: "PCCOE",
    status: "Completed",
    note: "Detailed schedule, venue, eligibility, and registration information are awaiting verified records.",
  },
  {
    id: "she-solves-3",
    name: "SHE SOLVES 3.0",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    organizingClub: "PCCOE ACM-W",
    category: "Hackathon",
    description: "A 12-hour hackathon associated with ANANTYA ’26.",
    eventDate: "2026-10-09",
    venue: "PCCOE",
    status: "Completed",
    note: "Supplied information lists rounds on 3, 5, and 9 October 2026. Detailed round descriptions are awaiting verification.",
  },
  {
    id: "make-a-doodle",
    name: "Make a Doodle",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    category: "Creative Design",
    description:
      "A creative event listed under the Computer Engineering department at ANANTYA ’26.",
    eventDate: "2026-10-09",
    venue: "PCCOE",
    status: "Completed",
    note: "Artwork, the individual event date, rules, eligibility, and registration details are awaiting verified records.",
  },
  {
    id: "decentrahack",
    name: "DecentraHACK",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    category: "Hackathon",
    description:
      "A full-day hackathon with Agentic AI and Blockchain/Web3 tracks.",
    eventDate: "2026-10-09",
    time: "9:00 AM–6:00 PM",
    venue: "PCCOE",
    teamSize: "2–4 participants",
    prizePool: "₹15,000+ in prizes, goodies, and membership benefits",
    tracks: ["Agentic AI", "Blockchain/Web3"],
    status: "Completed",
    note: "Sponsor, judge, partner, winner, and registration details have not been supplied.",
  },
  {
    id: "byteme-ctf",
    name: "ByteMe CTF",
    festId: "anantya-26",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    category: "Cybersecurity",
    description:
      "A capture-the-flag event listed with the supplied ANANTYA 2026 information.",
    eventDate: "2026-10-09",
    venue: "PCCOE",
    status: "Completed",
    note: "Fest association is subject to verification. Schedule, venue, eligibility, and organizer details are awaiting confirmation.",
  },
  {
    id: "tech4food",
    name: "Tech4Food",
    departmentId: "computer-engineering",
    organizingDepartment: "Computer Engineering",
    organizingClub: "PCCOE ACM Student Chapter",
    category: "Hackathon",
    description:
      "An innovation challenge by the PCCOE ACM Student Chapter inviting students to build technology-driven solutions for food safety, quality monitoring, traceability, and consumer protection.",
    eventDate: "2026-10-23",
    registrationDeadline: "2026-10-20",
    venue: "PCCOE",
    status: "Upcoming",
    format: "Technical Hackathon / Innovation Challenge",
    theme: "Innovate for food safety | Cook tastier, serve healthier",
    targetParticipants:
      "Students interested in AI, machine learning, IoT, computer vision, food technology, software development, and innovation.",
    prizePool: "₹18,000",
    prizes: [
      { place: "First prize", amount: "₹8,000" },
      { place: "Second prize", amount: "₹6,000" },
      { place: "Third prize", amount: "₹4,000" },
    ],
    rounds: [
      { name: "Round 1", detail: "Online idea submission" },
      { name: "Final round", detail: "23 October 2026 at PCCOE" },
    ],
    tracks: ["MONITOR", "DETECT", "TRACE", "PROTECT"],
    trackDetails: [
      {
        name: "MONITOR",
        title: "Smart Food Quality & Safety Monitoring",
        description:
          "Develop solutions using smart sensors and IoT to monitor food quality, storage conditions, freshness, and environmental factors.",
      },
      {
        name: "DETECT",
        title: "Food Safety Intelligence & Adulteration Screening",
        description:
          "Build AI, computer vision, or data-driven solutions to identify food adulteration, contamination, and quality issues.",
      },
      {
        name: "TRACE",
        title: "Smart Food Traceability & Recall",
        description:
          "Create transparent food traceability solutions using QR codes, batch tracking, digital records, and recall systems.",
      },
      {
        name: "PROTECT",
        title: "Smart Food Safety for Canteens, Restaurants & Consumers",
        description:
          "Develop solutions for hygiene monitoring, expiry tracking, allergen information, and food safety complaint monitoring.",
      },
    ],
    contacts: [
      { name: "Jayvardhan Gaikwad", phone: "9702141071" },
      { name: "Danish Sayyad", phone: "7058645563" },
      { name: "Khushie Mohod", phone: "9561976724" },
    ],
    note: "Round 1 is an online idea submission. The registration deadline is 20 October 2026. A registration link, eligibility rules, and event timings have not been supplied yet.",
  },
]

export const getDepartment = (id: string) =>
  departments.find((department) => department.id === id)
export const getFest = (id?: string) =>
  id ? fests.find((fest) => fest.id === id) : undefined
export const getUpcomingEvents = (departmentId: string) =>
  events.filter(
    (event) =>
      event.departmentId === departmentId &&
      (event.status === "Upcoming" || event.status === "Ongoing"),
  )
export const getEvent = (id: string) => events.find((event) => event.id === id)
export const getFestEvents = (festId: string) =>
  events.filter((event) => event.festId === festId)
