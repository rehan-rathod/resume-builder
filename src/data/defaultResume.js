export const defaultResume = {
  personal: {
    fullName: 'Alex Johnson',
    jobTitle: 'Full-Stack Software Engineer',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'alex-johnson',
    github: 'alexjohnson',
    website: 'alexjohnson.dev',
  },
  summary:
    'Passionate Full-Stack Software Engineer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture (AWS). I thrive in collaborative environments, love mentoring junior developers, and am obsessed with writing clean, maintainable code.',
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Python'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
  ],
  experience: [
    {
      id: 1,
      company: 'TechCorp Inc.',
      role: 'Senior Full-Stack Engineer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led a team of 5 engineers building a B2B SaaS platform serving 10,000+ customers',
        'Reduced API response time by 60% through caching strategies and query optimization',
        'Designed and implemented microservices architecture using Docker & Kubernetes',
        'Mentored 3 junior developers, conducting weekly 1:1s and code reviews',
      ],
    },
    {
      id: 2,
      company: 'StartupXYZ',
      role: 'Full-Stack Developer',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      location: 'Remote',
      responsibilities: [
        'Built the core product from scratch using React, Node.js and PostgreSQL',
        'Integrated Stripe payments and third-party APIs (Twilio, SendGrid)',
        'Implemented real-time features using WebSockets (Socket.io)',
        'Deployed and maintained infrastructure on AWS (EC2, RDS, S3, CloudFront)',
      ],
    },
    {
      id: 3,
      company: 'WebAgency Co.',
      role: 'Junior Frontend Developer',
      startDate: 'Jul 2019',
      endDate: 'May 2020',
      location: 'New York, NY',
      responsibilities: [
        'Developed responsive UI components for 15+ client projects',
        'Collaborated closely with designers to implement pixel-perfect layouts',
        'Improved site performance scores by 40% using lazy-loading and code splitting',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: 'DevFlow — Developer Productivity Suite',
      description:
        'A full-stack project management tool tailored for engineering teams, with sprint planning, GitHub integration, and AI-powered task suggestions.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'AWS'],
      link: 'github.com/alexjohnson/devflow',
    },
    {
      id: 2,
      name: 'PriceTrackr',
      description:
        'A price-tracking web scraper and alerting system for e-commerce products. Sends email/SMS alerts when prices drop below a threshold.',
      tags: ['Python', 'Puppeteer', 'Redis', 'Docker', 'Twilio'],
      link: 'github.com/alexjohnson/pricetrackr',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'University of California, Berkeley',
      degree: 'B.Sc. Computer Science',
      year: '2015 – 2019',
      grade: 'GPA: 3.8 / 4.0',
    },
  ],
};
