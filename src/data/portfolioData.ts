import type { Certificate, Education, Project, Skill } from "../types";


export const skills: Skill[] = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JWT Auth', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['Angular 14+', 'React.js', 'React Native', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Mobile',
    items: ['Android Studio (Java)', 'React Native CLI', 'iOS & Android'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Maven', 'IntelliJ', 'VS Code', 'Docker', 'Postman'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure DevOps Pipelines', 'AWS (EC2, S3)'],
  },
  {
    category: 'Architecture',
    items: ['REST APIs', 'MVC', 'OOP', 'Design Patterns'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Geo Pilot Assist',
    description: 'Offline GPS mobile app for pilot location tracking',
    technologies: ['Java', 'Android Studio', 'GPS', 'Text-to-Speech'],
    highlights: [
      'Offline GPS mobile app for pilot location tracking',
      'Real-time navigation alerts',
      'Battery-optimized background processing',
    ],
    category: 'Mobile',
  },
  {
    id: 2,
    title: 'Custom Google Script',
    description: 'Google Drive API Automation',
    technologies: ['Google Script', 'Google Drive API'],
    highlights: [
      'Modified file descriptions, metadata editing',
      'Automated graphic metadata extraction',
      'Delivered full workflow automation',
    ],
    category: 'Automation',
  },
  {
    id: 3,
    title: 'Xact POS System',
    description: 'Restaurant POS',
    technologies: ['React.js', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    highlights: [
      'Built modules: Menu, Table, Reservation, Order',
      'Implemented REST APIs for Customer, Order, Table, Email Notification',
      'Printer integration via LAN',
      'Part of a 9-member team, handling schema + performance tuning',
    ],
    category: 'Web',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Staff Point Mobile App',
    description: 'iOS + Android',
    technologies: ['React Native CLI', 'Java', 'MySQL', 'Spring Boot'],
    highlights: [
      'Staff attendance app with reporting',
      'Built monolithic backend',
      'Integrated secure login & reporting',
    ],
    category: 'Mobile',
    // status: 'Ongoing',
  },
  {
    id: 5,
    title: 'KEYP Healthcare Web Application',
    description: 'Healthcare app following GDPR & HIPAA compliance',
    technologies: ['React JS (TSX)', 'SCSS', 'Spring Boot 3.x', 'PostgreSQL'],
    highlights: [
      'Healthcare app following GDPR & HIPAA compliance',
      'Encrypted secure data workflows',
      'React UI with optimized performance',
    ],
    category: 'Web',
    status: 'Ongoing',
  },
];

export const education: Education[] = [
  {
    degree: 'B.Tech – ECE',
    institution: 'VITS, Karimnagar',
    duration: '2019–2022',
    location: 'Karimnagar',
  },
  {
    degree: 'Diploma – ECE',
    institution: 'Nigama Engineering College',
    duration: '2016–2019',
    location: 'Karimnagar',
  },
  {
    degree: 'SSC',
    institution: 'ZPHS, Vilasagar',
    duration: '2015–2016',
    location: 'Vilasagar',
  },
];

export const certificates: Certificate[] = [
//   {
//     title: 'Mentor – Guided interns in Java, DSA, Design Principles',
//     organization: 'Professional Development',
//   },
 {
  title: 'Full Stack Java Developer',
  organization: 'JSpiders Institute',
  description: 'Completed full stack Java development training, covering Java, Spring Boot, SQL, and front-end technologies.',
},

  {
    title: 'HackerRank Software Engineer Intern',
    organization: 'HackerRank',
    id: 'B83B42E00356',
    issued: 'Jan 2024',
    skills: ['Java', 'MySQL'],
  },
  {
    title: 'HackerRank Certified SQL',
    organization: 'HackerRank',
    id: '4E0CB02E359E',
    issued: 'Aug 2023',
    skills: ['Oracle SQL Developer', 'SQL'],
  },
  {
    title: 'HackerRank Certificate Java (Basic)',
    organization: 'HackerRank',
    id: '5DB24220832F',
    issued: 'Jul 2023',
    skills: ['Core Java'],
  },
  {
    title: '6-month Industrial Training',
    organization: 'Grepthor Software Solutions',
  },
];


export const contactInfo = {
  email: 'rohithmamidala369@gmail.com',
  phone: '+91 8501030311',
  linkedin: 'https://linkedin.com/in/rohith-mamidala-a58396176/',
  github: '#',
};

export const personalInfo = {
  name: 'Rohith Mamidala',
  role: 'Full Stack Developer',
  tagline: 'Java | Spring Boot | React | React Native | SQL | Microservices',
  about:
    'Experienced Full Stack Developer with hands-on expertise in building scalable, secure, and high-performance applications using Java, Spring Boot, Microservices, React, React Native, PostgreSQL, MySQL, MongoDB, and Android Studio. Strong background in enterprise-grade development, REST API design, and secure architectures (HIPAA, GDPR). I build applications with professional coding standards, clean architecture, and optimized performance. Available for development collaboration on high-impact projects.',
};
