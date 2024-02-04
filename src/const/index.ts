export const EMPLOYEE_CATEGORIES = [
  {
    label: "Developers",
    value: "developer" as const,
    featured: [
      {
        name: "Frontend Developer",
        href: "/employees?category=developer&role=frontend",
        imageSrc: "#",
      },
      {
        name: "Backend Developer",
        href: "/employees?category=developer&role=backend",
        imageSrc: "#",
      },
      {
        name: "Full Stack Developer",
        href: "/employees?category=developer&role=fullstack",
        imageSrc: "#",
      },
      {
        name: "DevOps",
        href: "/employees?category=developer&role=devops",
        imageSrc: "#",
      },
    ],
  },
  {
    label: "Designers",
    value: "designer" as const,
    featured: [
      {
        name: "UI Designer",
        href: "/employees?category=designer&role=ui",
        imageSrc: "#",
      },
      {
        name: "UX Designer",
        href: "/employees?category=designer&role=ux",
        imageSrc: "#",
      },
      {
        name: "Graphic Designer",
        href: "/employees?category=designer&role=graphic",
        imageSrc: "#",
      },
    ],
  },
  {
    label: "Managers",
    value: "manager" as const,
    featured: [
      {
        name: "Project Manager",
        href: "/employees?category=manager&role=project",
        imageSrc: "#",
      },
      {
        name: "Product Manager",
        href: "/employees?category=manager&role=product",
        imageSrc: "#",
      },
      {
        name: "Engineering Manager",
        href: "/employees?category=manager&role=engineering",
        imageSrc: "#",
      },
    ],
  },
  {
    label: "Analysts",
    value: "analyst" as const,
    featured: [
      {
        name: "Business Analyst",
        href: "/employees?category=analyst&role=business",
        imageSrc: "#",
      },
      {
        name: "Data Analyst",
        href: "/employees?category=analyst&role=data",
        imageSrc: "#",
      },
      {
        name: "Financial Analyst",
        href: "/employees?category=analyst&role=financial",
        imageSrc: "#",
      },
    ],
  },
  {
    label: "Testers",
    value: "tester" as const,
    featured: [
      {
        name: "Manual Tester",
        href: "/employees?category=tester&role=manual",
        imageSrc: "#",
      },
      {
        name: "Automation Tester",
        href: "/employees?category=tester&role=automation",
        imageSrc: "#",
      },
    ],
  },
];
