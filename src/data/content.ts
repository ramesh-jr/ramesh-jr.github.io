// Site copy, written for the web. Derived from the private resume bank but
// curated by hand: no phone number, no internal metrics, no customer names.

export const strengths = [
  {
    title: 'Architecture that stays maintainable',
    body: 'Modular, config-driven React that turns a new customer onboarding into configuration instead of new code, plus large refactors that raise standards and shorten developer onboarding.',
  },
  {
    title: 'Confidence in production',
    body: 'Observability with Elastic APM and Core Web Vitals, a major Next.js upgrade that closed security gaps, and performance work driven by profiling rather than guesswork.',
  },
  {
    title: 'Range beyond the browser',
    body: 'React Native apps, NestJS microservices and AWS infrastructure on Terraform and Kubernetes, so frontend decisions account for the system underneath them.',
  },
];

export interface Project {
  name: string;
  summary: string;
  org: string;
  period: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: 'DDAI, Dynamic Demand AI',
    summary:
      'A demand forecasting platform where CPG manufacturers simulate how demand shifts across geographies, distributors and product types.',
    org: 'Asper AI',
    period: '2025 to now',
    stack: ['React', 'TypeScript', 'TanStack Query', 'GraphQL'],
  },
  {
    name: 'RGM, Revenue Growth Management',
    summary: 'A trade optimisation platform for CPG manufacturers.',
    org: 'Asper AI',
    period: '2025 to now',
    stack: ['React', 'TypeScript', 'TanStack Query'],
  },
  {
    name: 'YaraConnect',
    summary:
      'A reward-based loyalty and farming-knowledge mobile app for retailers. Users earn points by scanning QR codes on premium products and redeem them for rewards.',
    org: 'Yara International',
    period: '2020 to 2024',
    stack: ['React Native', 'Redux', 'Redux-Saga', 'i18n'],
  },
  {
    name: 'Yara-Bodega',
    summary:
      'A marketplace where farmers book Yara products with their preferred retailers, compare prices, check stock and weather, and browse product information through a WhatsApp chatbot.',
    org: 'Yara International',
    period: '2020 to 2024',
    stack: ['Next.js', 'React', 'Redux', 'SWR', 'MUI', 'i18n'],
  },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: 'Asper AI',
    title: 'Senior Frontend Developer',
    period: '2025 to now',
    highlights: [
      'Rewrote a core module for accessibility, modularity and reuse, making the whole flow config-driven and cutting time-to-feature for future customer onboardings.',
      'Drove a large refactoring initiative to enforce modularity and coding standards, significantly cutting developer onboarding time.',
      'Led a complex Next.js upgrade, resolving compatibility issues and patching key web security vulnerabilities.',
      'Integrated Elastic APM for production observability, enabling rapid issue triage and Core Web Vitals tracking.',
      'Built the team’s AI-development guardrails, so engineers and AI agents are held to the same lint, typecheck and test bar.',
    ],
  },
  {
    company: 'Yara International',
    title: 'Trainee Engineer to Software Developer',
    period: '2020 to 2024',
    highlights: [
      'Built Inventory Management, Order Management and Content Feed experiences in React and React Native, and cut screen load times 2.5x through profiling and API optimisation.',
      'Built and published internal SDKs, a React component library and structured logging, adopted across multiple teams.',
      'Put CloudFront in front of a million-user web application, cutting origin server load by 80%, and added WAF protection against common exploits.',
      'Led an AWS cost optimisation across Lambda, RDS, ElastiCache and DocumentDB, saving about 3 lakh INR a month with no loss of availability.',
      'Provisioned AWS infrastructure with Terraform and deployed containerised microservices to Kubernetes with Helm.',
    ],
  },
];

export const earlier = [
  { label: 'Intern, CAE Process Automation', where: 'General Motors, Technical Centre India', period: '2019' },
];

export const education = [
  { label: 'M.Tech, Engineering Design', where: 'Amrita University, Coimbatore', period: '2018 to 2020' },
  { label: 'B.E, Aeronautical Engineering', where: 'Park College of Engineering and Technology, Coimbatore', period: '2013 to 2017' },
];

export const certifications = [
  'AWS Certified Developer, Associate (2023)',
  'Neural Networks and Deep Learning, DeepLearning.AI',
];

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 'TanStack Query', 'GraphQL', 'Zod'],
  },
  {
    group: 'Quality and observability',
    items: ['Accessibility', 'Jest', 'Cypress', 'React Testing Library', 'Elastic APM', 'Sentry'],
  },
  {
    group: 'Backend and cloud',
    items: ['Node.js', 'NestJS', 'Kafka', 'PostgreSQL', 'AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions'],
  },
  {
    group: 'AI-assisted development',
    items: ['Claude Code', 'Cursor'],
  },
];
