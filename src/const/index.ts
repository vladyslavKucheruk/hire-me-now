export const EMPLOYEE_CATEGORIES = [
  {
    label: "Developers",
    value: "developer" as const,
    featured: [
      {
        name: "Frontend Developer",
        href: "/employees?category=developer&role=frontend",
        imageSrc: "/images/frontend.png",
      },
      {
        name: "Backend Developer",
        href: "/employees?category=developer&role=backend",
        imageSrc: "/images/backend.png",
      },
      {
        name: "DevOps",
        href: "/employees?category=developer&role=devops",
        imageSrc: "/images/devops.png",
      },
    ],
  },
  {
    label: "Designers",
    value: "designer" as const,
    featured: [
      {
        name: "UI/UX Designer",
        href: "/employees?category=designer&role=ui-ux",
        imageSrc: "/images/ui-designer.png",
      },
      {
        name: "Graphic Designer",
        href: "/employees?category=designer&role=graphic",
        imageSrc: "/images/graphic-designer.png",
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
        imageSrc: "/images/project-manager.png",
      },
      {
        name: "Product Manager",
        href: "/employees?category=manager&role=product",
        imageSrc: "/images/product-manager.png",
      },
    ],
  },
  {
    label: "Testers",
    value: "tester" as const,
    featured: [
      {
        name: "QA Tester",
        href: "/employees?category=tester&role=manual",
        imageSrc: "/images/testers.png",
      },
    ],
  },
];
