// Centralized content for the portfolio — edit this file to update the site.

export const personalInfo = {
  name: 'Thanusha Thota',
  roles: ['Web Developer', 'Frontend Developer', 'React Developer', 'Java Full Stack Developer'],
  intro:
    "I build fast, accessible web applications end-to-end — from React interfaces to Java Spring Boot services. I care about clean architecture, thoughtful UX, and shipping things that hold up in production.",
  email: 'Thanushanaidu27@gmail.com',
  phone: '+91 98765 43210',
  location: 'Bengaluru, India',
  github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  linkedin: 'www.linkedin.com/in/thanushanaidu-undefined-723561432',
  resumeUrl: '/resume.pdf',
};

export const aboutInfo = {
  points: [
    'Passionate about crafting interfaces that feel effortless to use.',
    'Focused on building applications real people rely on daily.',
    'Energized by hard problems — debugging, system design, performance.',
    'Always learning: new frameworks, patterns, and better ways to ship.',
  ],
  stats: [
    { label: 'Projects Completed', value: 32, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Technologies', value: 18, suffix: '+' },
    { label: 'Happy Clients', value: 14, suffix: '+' },
  ],
};

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 92 },
      { name: 'Redux', level: 82 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 87 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 75 },
    ],
  },
];

export const experiences = [
  {
    company: 'Nimbus Technologies',
    role: 'Software Engineer',
    duration: 'Jul 2023 — Present',
    points: [
      'Built and maintained customer-facing React dashboards used by 40k+ monthly users.',
      'Designed REST APIs in Spring Boot, cutting average response times by 35%.',
      'Led migration from class components to hooks, reducing bundle size by 18%.',
    ],
  },
  {
    company: 'Cobalt Softworks',
    role: 'Full Stack Developer Intern',
    duration: 'Jan 2023 — Jun 2023',
    points: [
      'Shipped a booking module end-to-end using React, Node.js and MongoDB.',
      'Wrote integration tests that raised backend coverage from 40% to 78%.',
      'Collaborated directly with design to implement a component library.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    duration: '2021 — 2022',
    points: [
      'Delivered 10+ responsive websites for small businesses and startups.',
      'Handled everything from client discovery to deployment and handoff.',
    ],
  },
];

export const projects = [
  {
    title: 'ShopSphere',
    category: 'React',
    description:
      'A full-featured e-commerce platform with cart, checkout, and an admin dashboard for inventory management.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
  {
    title: 'TaskForge',
    category: 'Java',
    description:
      'A team task-tracking tool built on Spring Boot with role-based access and real-time status updates.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
  {
    title: 'WeatherPulse',
    category: 'JavaScript',
    description:
      'A minimal weather dashboard with animated forecasts, geolocation, and a 7-day outlook view.',
    tech: ['JavaScript', 'Chart.js', 'REST API'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
  {
    title: 'DevNotes',
    category: 'React',
    description:
      'A Markdown-based note-taking app for developers with syntax-highlighted code blocks and tagging.',
    tech: ['React', 'Firebase', 'Framer Motion'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
  {
    title: 'PayTrack API',
    category: 'Java',
    description:
      'A secure expense-tracking backend with JWT auth, budget alerts, and monthly analytics endpoints.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
  {
    title: 'PixelBoard',
    category: 'JavaScript',
    description:
      'A collaborative sticky-note board with drag-and-drop, live cursors, and shareable board links.',
    tech: ['JavaScript', 'WebSockets', 'Express'],
    live: 'https://example.com',
    github: 'https://github.com/thanushanaidu27-collab/SW_CSE_B2.2_Internship.git',
  },
];

export const services = [
  {
    title: 'Web Development',
    description:
      'End-to-end web application builds — from database schema to a polished, production-ready frontend.',
    icon: 'code',
  },
  {
    title: 'Responsive Design',
    description:
      'Interfaces engineered to look and perform flawlessly across desktop, tablet, and mobile devices.',
    icon: 'responsive',
  },
  {
    title: 'UI Development',
    description:
      'Pixel-precise, accessible component libraries and design systems built for real teams to reuse.',
    icon: 'ui',
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    college: 'Ramaiah university of applied sciences, Bengaluru',
    year: '2025 — 2029',
    achievement: 'Persuing Computer science with CGPA 8.02/10.',
  },
  {
    degree: 'Higher Secondary (PCM)',
    college: ' SVJC, chittoor',
    year: '2017 — 2019',
    achievement: 'Scored in the 95th percentile; school topper in maths.',
  },
];

export const certifications = [
  {
    name: 'AWS Certified Developer — Associate',
    org: 'Amazon Web Services',
    year: '2024',
    url: 'https://example.com/cert1',
  },
  {
    name: 'Java Programming Masterclass',
    org: 'Udemy',
    year: '2023',
    url: 'https://example.com/cert2',
  },
  {
    name: 'Meta Front-End Developer',
    org: 'Coursera / Meta',
    year: '2023',
    url: 'https://example.com/cert3',
  },
  {
    name: 'MongoDB Certified Developer',
    org: 'MongoDB University',
    year: '2022',
    url: 'https://example.com/cert4',
  },
];
