import {
    Github,
    Linkedin,
    Mail,
    Code,
    Terminal,
    Database,
    Globe,
    Server,
    Brain,
    Trophy,
    Award,
    Briefcase,
    Code2,
    ShieldCheck,
} from "lucide-react";

export const resume = {
    personalInfo: {
        name: "Vansh Kardam",
        displayName: "Vansh",
        email: "vanshkardam123@gmail.com",
        phone: "(+91) 8587885685",
        subtitle: "Full-Stack & Generative AI Developer | B.Tech CSE @ IIITM Gwalior",
        summary: "Computer Science undergraduate at IIITM Gwalior with hands-on experience in full-stack engineering, Agentic AI, and Retrieval-Augmented Generation (RAG). Passionate about architecting scalable systems and competitive problem-solving (1832 LeetCode, Pupil on Codeforces, 700+ DSA problems solved).",
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/vansh-kardam", icon: Linkedin },
            { name: "GitHub", url: "https://github.com/VanshKardam", icon: Github },
            { name: "LeetCode", url: "https://leetcode.com/u/Vansh_Kardam/", icon: Code },
            { name: "Codeforces", url: "https://codeforces.com/profile/vansh_kardam", icon: Terminal },
            { name: "Codolio", url: "https://codolio.com/profile/vansh_kardam", icon: Code2 },
            { name: "Email", url: "mailto:vanshkardam123@gmail.com", icon: Mail },
        ],
    },
    education: [
        {
            institute: "Indian Institute of Information Technology and Management, Gwalior",
            degree: "B.Tech in Computer Science and Engineering (CSE)",
            year: "Expected July 2027",
            score: "Cumulative GPA: 7.18",
            current: true,
        },
    ],
    experience: [
        {
            company: "Morgan Soft Innovation Pvt. Ltd.",
            role: "Software Developer Intern",
            workType: "Hybrid",
            period: "May 2026 – July 2026",
            certificateUrl: "#",
            description: "Engineered scalable full-stack web solutions, AI-driven candidate filtering tools, and high-reliability RESTful microservices.",
            points: [
                "Engineered a comprehensive full-stack job portal utilizing React, Node.js, and Express, architecting robust RESTful APIs and managing a PostgreSQL database for automated schema version control.",
                "Built responsive frontend interfaces using Tailwind CSS and Framer Motion, implementing advanced functionalities including AI-driven resume parsing, intelligent role-matching algorithms, and Boolean search (Resdex) for candidate sourcing.",
                "Integrated secure JWT and Google OAuth authentication flows, and developed dynamic dashboards for applicant tracking and recruiter subscription quota management.",
            ],
            techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Framer Motion", "JWT", "Google OAuth", "Resdex", "AI Parsing"],
        },
    ],
    skills: [
        {
            category: "Languages",
            items: ["C++", "Python", "JavaScript", "SQL"],
            icon: Code,
        },
        {
            category: "Frontend",
            items: ["React.js", "Tailwind CSS", "SCSS", "Framer Motion", "Streamlit"],
            icon: Globe,
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "RESTful APIs"],
            icon: Server,
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "ChromaDB"],
            icon: Database,
        },
        {
            category: "AI & Libraries",
            items: ["LangChain (LCEL & Agents)", "Mistral AI", "Gemini API", "OpenAI Whisper", "Sarvam AI", "Tavily API", "BeautifulSoup4"],
            icon: Brain,
        },
        {
            category: "Tools & Auth",
            items: ["GitHub", "Puppeteer", "JWT", "Google OAuth", "Render", "Vercel"],
            icon: ShieldCheck,
        },
    ],
    projects: [
        {
            title: "MeetMind: Local RAG Pipeline",
            badge: "GenAI & RAG",
            techStack: ["Python", "LangChain (LCEL)", "Whisper", "Sarvam AI", "Mistral AI", "ChromaDB", "Streamlit"],
            description: "A privacy-focused, multi-modal AI productivity tool featuring a 6-tab Streamlit dashboard for YouTube and local media ingestion, transcription, and meeting Q&A.",
            points: [
                "Architected a privacy-focused, multi-modal AI productivity tool featuring a 6-tab Streamlit dashboard, utilizing yt-dlp, ffmpeg, and pydub for seamless YouTube and local media ingestion.",
                "Engineered a dual-engine transcription system, deploying local OpenAI Whisper for secure English processing alongside Sarvam AI with automated audio chunking for precise Hinglish transcription.",
                "Orchestrated a Retrieval-Augmented Generation (RAG) workflow via LangChain (LCEL), leveraging Mistral AI and ChromaDB to automatically generate smart summaries, extract action items, and enable semantic meeting Q&A.",
            ],
            links: {
                github: "https://github.com/VanshKardam/MeetMind",
                demo: "https://github.com/VanshKardam/MeetMind",
            },
        },
        {
            title: "Agentic-Scholar",
            badge: "Multi-Agent System",
            techStack: ["Python", "LangChain (LCEL & Agents)", "Mistral AI", "Streamlit", "Tavily API", "BeautifulSoup4"],
            description: "An autonomous multi-agent AI research system leveraging collaborative agents to research, synthesize, draft, and peer-review academic reports.",
            points: [
                "Engineered an autonomous multi-agent AI research system leveraging Mistral AI to collaboratively research, draft, and peer-review comprehensive academic reports.",
                "Developed specialized Search and Reader agents utilizing the Tavily API for relevant internet sourcing and BeautifulSoup4 for scraping noise-filtered, full-text content.",
                "Orchestrated the agentic architecture using LangChain (Agents & LCEL), incorporating Writer and Critic agents to synthesize findings and iteratively score generated reports.",
            ],
            links: {
                github: "https://github.com/VanshKardam/Agentic-Scholar",
                demo: "https://github.com/VanshKardam/Agentic-Scholar",
            },
        },
        {
            title: "SkillBridge AI",
            badge: "Full-Stack & Vector Search",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "Puppeteer", "SCSS", "JWT", "Render", "Vercel"],
            description: "Full-stack AI career coaching platform featuring RAG-driven mock interviews, real-time skill gap analysis, and automated PDF resume generation.",
            points: [
                "Engineered a full-stack platform leveraging the Google Gemini API and MongoDB Atlas Vector Search to power RAG-driven interactive mock interviews and context-aware AI career coaching.",
                "Architected an automated backend service utilizing Puppeteer to dynamically generate production-ready PDF resumes based on targeted job descriptions and real-time skill gap analysis.",
                "Built a responsive UI using vanilla SCSS and implemented secure JWT/bcrypt authentication flows, deploying the application architecture seamlessly across Vercel and Render.",
            ],
            links: {
                github: "https://github.com/VanshKardam/SkillBridge-AI",
                demo: "https://github.com/VanshKardam/SkillBridge-AI",
            },
        },
    ],
    achievements: [
        {
            title: "Competitive Programming",
            badge: "Codeforces & LeetCode",
            icon: Trophy,
            description: "Demonstrated strong algorithmic reasoning and problem-solving skills across global competitive programming platforms.",
            stats: [
                { label: "LeetCode Max", value: "1832" },
                { label: "Codeforces", value: "1382" },
                { label: "DSA Solved", value: "700+" },
            ],
            highlights: [
                "Achieved max rating of 1832 on LeetCode",
                "Earned Pupil ranking (max 1382) on Codeforces",
                "Solved 700+ problems on LeetCode, GfG, and InterviewBit"
            ],
            tags: ["LeetCode", "Codeforces", "Pupil", "700+ Solved"],
        },
        {
            title: "Dynamic Programming (DP) Camp",
            badge: "AlgoUniversity",
            icon: Award,
            description: "Selected for and participated in the intensive Dynamic Programming (DP) Camp by AlgoUniversity, mastering advanced algorithmic problem-solving paradigms.",
            highlights: [
                "Selected among competitive applicants for specialized training",
                "Mastered advanced DP state formulation, transitions, and optimizations",
                "Extensive practice on contest problem patterns and bitmask DP"
            ],
            tags: ["AlgoUniversity", "DP Camp", "Algorithms"],
        },
        {
            title: "Data Structures & Algorithms in C++",
            badge: "Coursework & Mastery",
            icon: Code,
            description: "Completed comprehensive coursework and rigorous problem-solving in C++, covering foundational and advanced DSA topics.",
            highlights: [
                "Comprehensive coursework covering trees, graphs, heaps, and DP",
                "High-efficiency implementation and complexity optimization in C++",
                "Deep grounding in abstract data types and amortized analysis"
            ],
            tags: ["C++", "DSA", "Graph Theory", "Algorithms"],
        },
    ],
    coursework: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "Computer Networks (CN)",
    ],
};
