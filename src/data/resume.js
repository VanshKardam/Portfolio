import { Github, Linkedin, Mail, Code, Terminal, Database, Globe, Server, Cpu, Layers } from "lucide-react";

export const resume = {
    personalInfo: {
        name: "Vansh Kardam",
        email: "vanshkardam123@gmail.com",
        phone: "(+91) 8587885685",
        subtitle: "B.Tech CSE Student | Full Stack Developer | DSA",
        summary: "Aspiring Software Engineer with a strong foundation in Data Structures & Algorithms and Full Stack Development. Passionate about building scalable web applications and solving complex problems.",
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/vansh-kardam", icon: Linkedin }, // Placeholder as per resume text "LinkedIn"
            { name: "GitHub", url: "https://github.com/VanshKardam", icon: Github },     // Placeholder
            { name: "LeetCode", url: "https://leetcode.com/u/Vansh_Kardam/", icon: Code },     // Placeholder
            { name: "Codeforces", url: "https://codeforces.com/profile/vansh_kardam", icon: Terminal }, // Placeholder
            { name: "Email", url: "mailto:vanshkardam123@gmail.com", icon: Mail },
        ],
    },
    education: [
        {
            institute: "Indian Institute of Information Technology and Management, Gwalior",
            degree: "B.Tech in Computer Science and Engineering (CSE)",
            year: "Expected July 2027",
            score: "Cumulative GPA: 7.10",
            current: true, // Derived from "3rd Year" context
        },
        {
            institute: "DAV Sr. Sec. School Chitra Gupta Road New Delhi",
            degree: "Senior School Certificate Examination",
            year: "July 2022",
            score: "Percentage: 89.17%",
            current: false,
        },
    ],
    skills: [
        {
            category: "Languages",
            items: ["C", "C++", "JavaScript(ES6+)", "SQL"],
            icon: Code,
        },
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "React.js", "React", "Tailwind CSS", "Responsive Design"],
            icon: Globe,
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "RESTful APIs", "WebSockets (Socket.io)", "JWT", "Bcrypt"],
            icon: Server,
        },
        {
            category: "Database",
            items: ["MongoDB", "PostgreSQL", "mongoose", "MySQL"],
            icon: Database,
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "Github", "VS Code"],
            icon: Layers,
        },
        {
            category: "Deployment",
            items: ["Render", "Vercel"],
            icon: Cpu,
        },
    ],
    projects: [
        {
            title: "Recruitment Management System",
            techStack: ["React 19", "Node.js", "Express 5", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
            description: "A full-stack MERN recruitment platform with secure authentication and cloud-based document handling.",
            points: [
                "Developed a full-stack MERN recruitment platform with React 19 frontend and Express 5 REST API backend",
                "Implemented secure user authentication using JWT tokens and Bcrypt password hashing",
                "Integrated Cloudinary for cloud-based resume/document uploads with Multer middleware",
                "Built responsive UI using Tailwind CSS 4 with Framer Motion animations for enhanced UX",
                "Designed MongoDB schemas with Mongoose for managing jobs, candidates, and applications",
                "Created rich text job posting editor using Quill for formatted job descriptions",
            ],
            links: {
                github: "https://github.com/VanshKardam/Recruitment-Management-System", // Placeholder
                demo: "https://github.com/VanshKardam/Recruitment-Management-System",   // Placeholder/Optional
            },
        },
        {
            title: "Graph Theory Pathfinding Visualizer",
            techStack: ["JavaScript (ES6)", "HTML5", "CSS3", "Node.js"],
            description: "Interactive visualization tool for pathfinding algorithms with maze generation.",
            points: [
                "Implemented 5 pathfinding algorithms (A*, Dijkstra's, Greedy, BFS, Bidirectional) with real-time visualization",
                "Developed recursive maze generation algorithms and multiple heuristic functions",
                "Built interactive grid UI with draggable nodes, wall drawing, and animation speed controls",
                "Designed custom CSS animations for visualizing algorithm execution step-by-step",
            ],
            links: {
                github: "https://github.com/VanshKardam/Graph-Theory-Tool", // Placeholder
                demo: "https://graph-theory-tool.vercel.app/",   // Placeholder
            },
        },
    ],
    coursework: [
        "Data Structures & Algorithms (DSA)",
        "Object Oriented Programming (OOP)",
        "Database Management System (DBMS)",
        "Operating Systems (OS)",
    ],
};
