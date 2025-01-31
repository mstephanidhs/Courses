export const organizationData = {
  headquarters: {
    finance: {
      employees: [
        { id: 1, name: "Amina Al-Farsi", position: "Accountant" },
        { id: 2, name: "Hiroshi Tanaka", position: "Financial Analyst" },
      ],
      budget: 500000
    },
    hr: {
      employees: [
        { id: 3, name: "Miguel García", position: "HR Manager" },
        { id: 4, name: "Priya Patel", position: "Recruiter" }
      ],
      policies: ["policy1", "policy2"]
    }
  },
  regional_offices: {
    office1: {
      sales: {
        employees: [
          { id: 5, name: "Kwame Mensah", position: "Sales Executive" }
        ],
        revenue: 1000000
      },
      support: {
        employees: [
          { id: 6, name: "Li Wei Chen", position: "Support Specialist" }
        ],
        tickets: 300
      }
    },
    office2: {
      development: {
        employees: [
          { id: 7, name: "Emily Smith", position: "Software Engineer" },
          { id: 8, name: "Hank Grey", position: "Product Manager" }
        ],
        projects: ["Project A", "Project B"]
      }
    }
  }
}