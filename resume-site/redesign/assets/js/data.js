// Content data for Marcus Henry's personal site.
window.SITE_DATA = {
  name: "Marcus Henry",
  firstName: "Marcus",
  role: "Cloud Engineer",
  location: "Calgary, Alberta",

  hermesIntro: {
    chapter: "§ I",
    tagline: "On building reliable infrastructure, and the quiet pleasure of automation.",
    body: [
      "I am a systems administrator and aspiring cloud engineer working in Calgary, Alberta. By day I keep the lights on for a hundred-odd colleagues — accounts, devices, identity, mail; by night I build small cloud projects to teach myself the trade I want next.",
      "What follows is a working ledger: where I am, what I am building, where I am going. Updated as the year unfolds.",
    ],
  },

  callumIntro: {
    greeting: "Hi, I'm Marcus 👋",
    line1: "I'm a cloud engineer based in Calgary,",
    line2: "currently building toward DevOps.",
    sub: "I keep the cloud running by day and ship small AWS projects by night — usually with too much coffee and a football match on in the background.",
  },

  status: {
    label: "Open to roles",
    where: "Cloud / DevOps",
  },

  tools: [
    { name: "AWS",            icon: "aws" },
    { name: "Terraform",      icon: "terraform" },
    { name: "Docker",         icon: "docker" },
    { name: "GitHub Actions", icon: "github" },
    { name: "Python",         icon: "python" },
    { name: "Next.js",        icon: "nextjs" },
    { name: "Microsoft 365",  icon: "microsoft" },
    { name: "PowerShell",     icon: "powershell" },
  ],

  about: [
    "I've spent six years in IT operations — most of it as the sole technologist for the Canadian arm of a global firm. The job has taught me to design for the moment things break, to write things down, and to automate anything I'd hate to do twice.",
    "Lately I've been moving deliberately toward cloud and DevOps work: AWS certifications, two production-style projects in the last year, and a habit of treating my own side projects like real environments — IaC, CI/CD, separate dev and prod.",
    "Outside of work I follow Canadian soccer obsessively, which is partly why one of my portfolio projects is a daily-updating tracker for the men's national team.",
  ],

  projects: [
    {
      id: "cmnt",
      number: "01",
      year: "2026",
      tag: "Next.js · ECS Fargate · Terraform",
      title: "CMNT Squad Tracker",
      sub: "A daily-updating data site for Canada's men's national team.",
      blurb: "Next.js + TypeScript on the front; a containerised data pipeline on the back. EventBridge fires nightly, an ECS Fargate task pulls live match data, writes JSON to S3, and CloudFront serves it. Built like a real production environment — Terraform-managed, dev and prod split, OIDC for CI auth.",
      stack: ["Next.js", "TypeScript", "AWS ECS Fargate", "EventBridge", "S3", "CloudFront", "Terraform", "GitHub Actions"],
      bullets: [
        "Containerised nightly job pulls fresh match data from a live football API.",
        "Site and data live in the same S3 bucket — but deploys never overwrite the data path.",
        "Two environments, fully managed in Terraform; OIDC handles auth.",
      ],
      live: "https://cmnt.marcushenry.ca",
      repo: "https://github.com/marcushenry/cmnt-squad-tracker",
      // Browser-window preview content
      preview: {
        url: "cmnt.marcushenry.ca",
        kind: "tracker",
      },
    },
    {
      id: "cloud-resume",
      number: "02",
      year: "2025",
      tag: "AWS Lambda · DynamoDB · SAM",
      title: "Cloud Resume Challenge",
      sub: "A serverless resume site with a Lambda-powered visitor counter.",
      blurb: "Static site on S3 + CloudFront. A Python Lambda behind API Gateway increments a DynamoDB counter on each visit. Whole stack is defined in AWS SAM and deployed by a GitHub Actions pipeline that uses OIDC instead of long-lived keys.",
      stack: ["S3", "CloudFront", "Route 53", "API Gateway", "Lambda (Python)", "DynamoDB", "AWS SAM", "GitHub Actions"],
      bullets: [
        "Visitor count fully serverless — no servers, no scheduled jobs.",
        "Every push to main runs the test suite, then deploys via SAM.",
        "OIDC means zero AWS keys live in GitHub.",
      ],
      live: "https://marcushenry.ca",
      repo: "https://github.com/marcushenry/cloud-resume-challenge-2025",
      preview: {
        url: "marcushenry.ca",
        kind: "resume",
      },
    },
  ],

  skills: {
    "Cloud & IaC": ["AWS", "Terraform", "AWS SAM", "CloudFront", "Lambda", "ECS Fargate"],
    "Identity & Endpoint": ["Microsoft 365", "Entra ID", "Intune", "Exchange Online"],
    "Automation & Dev": ["PowerShell", "Python", "Next.js / TypeScript", "Docker"],
    "Pipelines": ["GitHub Actions", "OIDC", "EventBridge", "CloudWatch"],
  },

  certifications: [
    { name: "AWS Certified Cloud Practitioner", year: "2024", status: "earned" },
    { name: "AWS Solutions Architect — Associate", year: "Q2 2026", status: "progress" },
  ],

  socials: [
    { label: "GitHub",   handle: "marcushenry",       url: "https://github.com/marcushenry" },
    { label: "LinkedIn", handle: "in/marcushenry",    url: "https://linkedin.com/in/marcushenry" },
    { label: "Email",    handle: "hello@marcushenry.ca", url: "mailto:hello@marcushenry.ca" },
    { label: "Resume",   handle: "PDF, 2026",         url: "assets/Marcus-Henry-2026.pdf" },
  ],
};
