import { Leaf, Building2, Target,Globe, Car, Calendar, Lightbulb, Users, Cpu, FlaskConical, ShieldCheck, Server, Database, Zap,Briefcase } from "lucide-react";
import conferenceLogo from '@/assets/images/m-logo3.jpg';
import logo1 from '@/assets/images/logo1.2.png';
import logo from '@/assets/images/logo.png';
import logo2 from '@/assets/images/logo-2.2.png';
import logo_3 from '@/assets/images/logo_3.png';
import logo_4 from '@/assets/images/logo_4.png';
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";
import collegeNameImage from '@/assets/images/logom.2.png';
import rightLogo from '@/assets/images/r-logo.png';
import rightLogo2 from '@/assets/images/logo4.png';
import rightLogo3 from '@/assets/images/rightlogo3.png';
import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';
import image4 from '@/assets/images/image4.jpg';
import image5 from '@/assets/images/image5.jpg';
import image6 from '@/assets/images/image6.jpg';
import image7 from '@/assets/images/image7.jpg';
import image8 from '@/assets/images/image8.jpg';
import chairman from "@/assets/images/chairman.jpg";
import secretary from "@/assets/images/secretary.jpg";
import principal from "@/assets/images/principal.jpg";

// #################################################################################################################################################################################################################

export const general = {
  conferenceName : "ICTMT 2025"
}

 // #################################################################################################################################################################################################################

export const appData = {
  supportingLogos: {
    left: [logo1, rightLogo],
    right: [ logo_3, logo_4],
  },
  collegeLogo: collegeNameImage,
  menu: {
    title: "Menu",
    quickLinks: {
      title: "Quick Links",
      links: [
        { id: "home", label: "HOME" },
        { id: "scoe", label: "SCOE" },
        { id: "conference", label: "CONFERENCE" },
        { id: "patrons-chairs", label: "PATRONS CHAIRS" },
        { id: "committee", label: "COMMITTEE" },
        { id: "footer", label: "FOOTER" },
      ],
    },
    conferenceDetails: {
      title: "Conference Details",
      links: [
        { id: "timeline", label: "TIMELINE" },
        { id: "tracks", label: "TRACKS" },
        { id: "speaker", label: "SPEAKER" },
        { id: "call-for-papers", label: "CALL FOR PAPERS" },
        { id: "registration", label: "REGISTRATION" },
      ],
    },
  },
};

// #################################################################################################################################################################################################################


export const menuItems = [
  { label: "Home", link: "home" },
  {
    label: "About",
    dropdown: [
      { title: "SCOE", description: "School of Computer Engineering details and mission.", link: "scoe" },
      { title: "Conference", description: "Annual academic gathering with keynote sessions.", link: "conference" },
      { title: "Patrons & Chairs", description: "Meet the leadership behind the conference.", link: "patrons-chairs" },
      { title: "Committee", description: "Organizers and core members driving the event.", link: "committee" },
    ],
  },
  {
    label: "Conference",
    dropdown: [
      { title: "Timeline", description: "Key dates and schedules for the event.", link: "timeline" },
      { title: "Tracks", description: "Various subjects covered in different sessions.", link: "conference-tracks" },
      { title: "Speaker", description: "Eminent speakers sharing insights on diverse topics.", link: "speaker" }
    ],
  },
  { label: "Call for Papers", link: "call-for-paper" },
  { label: "Registration", link: "registration" },
  { label: "Contact", link: "footer" },
];


// #########11111111111111111111111111111111########################################################################################################################################################################################################


export const conferenceData = {
  title: "International Conference on Technology and Management for Transformation",
  shortForm: "ICTMT 2025",
  conferenceLogo:[logo],
  sliderImages: [banner1, banner2, banner3],
  description:
    "A  platform to explore how technology and management work together to drive change.",
  details: [
    {
      icon: <Calendar className="size-6 text-[#14248a]" />,
      label: "Date",
      value: "8th April 2025 (Online)",
    },
    {
      icon: <Lightbulb className="size-6 text-[#14248a]" />,
      label: "Topics",
      value: "IT Trends, Smart System, Applied Computing",
    },
  ],
  about: [
    "The International Conference on Technology and Management for Transformation – ICTMT 2025 is a platform to explore how technology and management work together to drive change.      As industries evolve with advancements in digitalization, automation, and sustainability, this conference brings together researchers, industry experts, and policymakers to share ideas, innovations, and strategies.",
     "ICTMT 2025 aims to bridge the gap between technology and management, encouraging collaboration and practical solutions for a rapidly changing world.",
     " Join us to discover new trends, gain valuable insights, and be part of the transformation shaping our future"
  ],
  ctaText: "Register Now",
  organizedBy: {
    label: "Organized by",
    name: "SΛRΛSWΛTI COLLEGE OF ENGINEERING",
    address: "Sector-05, Kharghar, Navi Mumbai- 410210",
    website: "https://www.sce.edu.in",
  },
};


// ###############2222222222222222##################################################################################################################################################################################################


export const scoeContent = {
  title: "Saraswati College of Engineering (SCOE)",
  shortForm : "SCOE",
  logoAlt: "SCOE Logo",
  accreditation: {
    text1: "🎓 NAAC A+ Accredited",
    text2: "🏛️ Recognized by Govt. of Maharashtra",
    text3: "✅ AICTE Approved",
    text4: "📜 Affiliated to University of Mumbai",
  },

  foundingHistory: {
    established: "2004",
    founders: {
      foudner1: "Hon. Prithviraj Deshmukh",
      founder2: "Mrs. Vrushali Deshmukh"
    },
    description: "SCOE is one of Navi Mumbai’s premier engineering institutions. With a focus on innovation and industry-driven education, we strive for excellence in engineering, research, and sustainability.",
    highlight1: "innovation",
    highlight2: "industry-driven education", 
  },
  vision: {
    title: "🌍 Vision",
    text: "To be globally recognized as an autonomous Institute in engineering education with an emphasis on academics, research and skills enhancement to create innovators and future leaders for Industry and societal needs.",
  },
  mission: {
    title: "🎯 Mission",
    points: [
      "M1: To provide theoretical and practical knowledge through quality teaching learning to develop competent engineers.",
      "M2: To create an ambience that facilitates research, entrepreneurship and collaborations leading to emergence of innovators and future leaders.",
      "M3: To develop a student-centric approach that inculcates moral, ethical values and leadership skills for holistic development.",
    ],
  },
  callToActions: [
    { text: "Learn More 🔍", link: "conference" },
    { text: "Apply Now ✍️", link: "call-for-paper" },
  ],

  collegeImagesCard: {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  },

};

// ############# conferenceTracks 3333333333333333333333####################################################################################################################################################################################################



export const conferenceTracks = {
  section: {
    id: "conference-tracks",
    name: "conference-tracks",
    title: "🎯 Explore Our Conference Tracks",
    description:
      "We invite researchers, scholars, and professionals to contribute to our diverse conference tracks. Click on a track to explore the exciting themes and cutting-edge topics covered this year.",
  },

  tracks: [
    {
      id: "track1",
      title: "Emerging IT Trends and Innovations",
      icon: <Server size={24} />,
      topics: [
        "Cloud Computing and Virtualization",
        "Artificial Intelligence and Machine Learning",
        "Blockchain Technology",
        "Cybersecurity and Privacy",
      ],
    },
    {
      id: "track2",
      title: "Applied Computing, Data Sciences and Analytics",
      icon: <Database size={24} />,
      topics: [
        "Big Data Analysis and Visualization",
        "Predictive Analytics and Data Mining",
        "Machine Learning Applications",
        "Natural Language Processing",
        "E-Learning",
      ],
    },
    {
      id: "track3",
      title: "Advancements in Electronics and Electrical Engineering Technologies",
      icon: <Zap size={24} />,
      topics: [
        "Power Systems and Renewable Energy",
        "Control Systems and Automation",
        "Electronics and VLSI Design",
        "Robotics and Automation Technologies",
        "Antennas",
      ],
    },
    {
      id: "track4",
      title: "Smart Systems: Embedded, IoT, and Cyber-Physical Integration",
      icon: <Cpu size={24} />,
      topics: [
        "Embedded Systems Design and Applications",
        "Internet of Things (IoT) Solutions",
        "Cyber-Physical Systems and Integration",
        "Wireless Sensor Networks",
      ],
    },
    {
      id: "track5",
      title: "Humanities & Management",
      icon: <Briefcase size={24} />,
      topics: [
        "Strategic Management and Decision Making",
        "Business Ethics and Corporate Social Responsibility",
        "Human Resource Management",
        "Innovation in Management Practices",
      ],
    },
  ],

  importantNote: {
    icon: "📌",
    title: "Important Note:",
    text: "The topics are not limited to the listed ones and can be extended under each track.",
    format: "All papers must adhere to IEEE double-column format.",
  },
};


// ###############timelineData#########44444444444444444444444#########################################################################################################################################################################################


export const timelineData = {
  section: {
    id: "timeline",
    name: "timeline",
    title: "📅 Important Conference Dates",
    description:
      "Stay informed about key milestones! Follow the timeline below to track important deadlines.",
  },

  events: [
    {
      id: "1️",
      title: "Submission of Full Paper",
      desc: "Submit your research and shape the future! 📜",
      date: "📆 March 22, 2025",
      color: "#28262c",
    },
    {
      id: "2️",
      title: "Notification of Acceptance",
      desc: "Get confirmation & start preparing! ✉️",
      date: "📆 March 24, 2025",
      color: "#28262c",
    },
    {
      id: "3️",
      title: "Last Date of Registration",
      desc: "Secure your spot & join us! 🏆",
      date: "📆 March 28, 2025",
      color: "#28262c",
    },
  ],
};
// ##############################55555555555555555###################################################################################################################################################################################


export const callForPapersData = {
  section: {
    id: "call-for-paper",
    name: "call-for-paper",
    title: "📜 Call for Papers - ICTMT 2025",
    description:
      "We invite researchers, scholars, and professionals to submit their papers for ICTMT 2025. Selected quality papers will be published in SCOPUS Indexed Journals, Web of Science Journals, and Peer reviewed journals (subject to acceptance & applicable fees).",
  },

  bestPaperAward: {
    sponsorText: "Best paper award is sponsored by",
    sponsorName: "The Institution of Engineers (India)",
    sponsorLocation: "Navi Mumbai Local Centre",
  },

  submission: {
    title: "📌 Submission Details",
    details: [
      {
        icon: "🖊️",
        label: "Submission Link:",
        value: "Submit via Microsoft CMT",
        url: "https://cmt3.research.microsoft.com/ICTMT2025",
      },
      {
        icon: "📧",
        label: "Email Inquiries:",
        value: "intconf-ictmt2025@sce.edu.in",
        url: "mailto:intconf-ictmt2025@sce.edu.in",
      },
      {
        icon: "🎯",
        label: "Important:",
        value: "Ensure the track name is mentioned in the header of your paper before submission.",
        url: null, // No link needed
      },
    ],
  },

  publication: {
    icon: "📚",
    title: "Publication Opportunities",
    description:
      "Selected quality papers will be published in a reputed journal, subject to acceptance (with applicable fees).",
  },

  acknowledgement: {
    title: "Acknowledgement for Microsoft CMT",
    description:
      "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft, and they bore all expenses, including costs for Azure cloud services, software development, and support.",
  },
};




// ########666666666666666666#########################################################################################################################################################################################################


export const registrationData = {
  section: {
    id: "registration",
    name: "registration",
    title: "💳 Registration Details",
    description:
      "Secure your spot at ICTMT 2025 by completing your registration. Below are the applicable fees and payment details.",
  },

  fees: {
    title: "📌 Registration Fees",
    columns: ["Category", "Indian Delegates", "Foreign Delegates"],
    rows: [
      {
        category: "🎓 Students/Research Scholars",
        indian: "₹ 1500/-",
        foreign: "$ 17.27",
      },
      {
        category: "📚 Academicians",
        indian: "₹ 2000/-",
        foreign: "$ 23.08",
      },
      {
        category: "🏢 Delegates from Industry",
        indian: "₹ 3000/-",
        foreign: "$ 34.62",
      },
    ],
  },

  payment: {
    title: "🏦 Payment Information",
    description: "Make your payment via electronic transfer to the details below:",
    details: [
      {
        label: "🏛 Bank Name:",
        value: "AXIS BANK LTD, Kharghar, Navi Mumbai-410210",
      },
      {
        label: "👤 A/C Holder Name:",
        value: "SARASWATI COLLEGE OF ENGINEERING",
      },
      {
        label: "🏦 A/C No:",
        value: "921010013658855",
      },
      {
        label: "🔗 IFSC Code:",
        value: "UTIB0002925",
      },
    ],
  },
};

// ###########777777777777777######################################################################################################################################################################################################

export const patronsData = {
  section: {
    id: "patrons-chairs",
    name: "patrons-chairs",
    title: "🎖️ Patrons & Chair",
  },
  members: [
    {
      role: "Chairman",
      organization: "Saraswati Education Society",
      name: "Hon. Raviraj ji P. Deshmukh",
      image: chairman, // Update path as needed
    },
    {
      role: "Secretary",
      organization: "Saraswati Education Society",
      name: "Hon. Vrushali P. Deshmukh",
      image: secretary,
    },
    {
      role: "Principal",
      organization: "SCOE, Navi Mumbai",
      name: "Dr. Manjusha Deshmukh",
      image: principal,
    },
  ],
};
// ############888888888888888888888888#####################################################################################################################################################################################################


export const committeeData = [
  {
    title: "Program Chair",
    members: ["Dr. Sheetal Bukkawar, Dean of Administration & Study Abroad Cell, SCOE"],
  },
  {
    title: "Executive Committee",
    members: [
      "Dr. Sujata T. Bhairnallykar, Dean, IQAC & HOD, Computer Engineering",
      "Dr. Maahi Khemchandani, Dean, Student Career Development & HOD, Information Technology",
      "Prof. Anuja A. Chandane, HOD, CSE-AIML, SCOE",
      "Prof. Ragini Sharma, HOD, CSE-DS, SCOE",
    ],
  },
];

export const advisoryCommittees = [
  {
    title: "International Advisory Committee",
    members: [
      {
        name: "Dr. Vasilii I. Borisov",
        role: "Head of the Master's Program (Practical Artificial Intelligence), Ural Federal University, Russia",
      },
      {
        name: "Avinash Kumar",
        role: "Senior Lecturer | Research Scientist, Ural Federal University, Yekaterinburg, Russia",
      },
      {
        name: "Dr. Keith Mason",
        role: "Enviroweather Coordinator, Department of Geography, Environment, and Spatial Sciences, Michigan State University, USA",
      },
      {
        name: "Dr. Larry Walker",
        role: "Adjunct Professor, Michigan State University | Emirates Professor, Cornell University, USA",
      },
      {
        name: "Dr. Ankur Yadav",
        role: "Research Scientist at Meta, United States",
      },
    ],
    gridSpan: "lg:col-span-2",
  },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Dr. Ravindra Kulkarni",
        role: "Vice-Chancellor, University of Mumbai",
      },
      {
        name: "Dr. Udhav Bhosle",
        role: "Vice-Chancellor, Sanjay Ghodawat University, Kolhapur",
      },
      {
        name: "Dr. Deven Shah",
        role: "Associate Dean of FoT, University of Mumbai",
      },
      {
        name: "Dr. Suresh Ukarande",
        role: "Principal, K. J. Somaiya College of Engineering, Mumbai",
      },
      {
        name: "Dr. S. M. Khot",
        role: "Fr. C. Rodrigues Institute of Technology, Navi Mumbai",
      },
      {
        name: "Dr. Jagdish Bakal",
        role: "President, The Institution of Electronics and Telecommunication Engineers (IETE)",
      },
      {
        name: "Mr. Amit Gawade",
        role: "Data Scientist, LTIMindtree",
      },
      {
        name: "Mr. Aniket More",
        role: "Deputy Manager, Technical Lead, CCIL (The Clearing Corporation of India Limited)",
      },
    ],
    gridSpan: "lg:col-span-3",
  },
];
