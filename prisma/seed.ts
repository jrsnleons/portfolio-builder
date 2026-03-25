import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { Pool } from "pg";
import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    email: "jerson@example.com",
    name: "Jerson Leones",
    password: "securepassword123",
    bio: {
      create: {
        pdf: "/resumes/jerson-leones-cv.pdf",
        img: "/profiles/jerson.jpg",
      },
    },
    category: {
      create: [
        {
          categoryName: "Web Development",
          skills: {
            create: [
              { skillName: "Next.js", score: 95 },
              { skillName: "TypeScript", score: 90 },
              { skillName: "Prisma", score: 85 },
            ],
          },
          // Adding Multiple Projects
          projects: {
            create: [
              {
                projectName: "Portfolio Builder",
                description: "A specialized CMS for developers.",
                learnings: ["Prisma Adapters", "PostgreSQL Arrays"],
                dateFinished: new Date("2026-03-24"),
                img: "/projects/pb.png",
                links: {
                  create: [{ label: "GitHub", url: "https://github.com/jerson/pb" }],
                },
              },
              {
                projectName: "E-Commerce API",
                description: "High-performance backend for a retail store.",
                learnings: ["Caching", "Payment Gateway Integration"],
                dateFinished: new Date("2025-11-10"),
                img: "/projects/ecommerce.png",
                links: {
                  create: [{ label: "Live Demo", url: "https://shop.example.com" }],
                },
              },
            ],
          },
          // Adding Multiple Experiences
          experience: {
            create: [
              {
                company: "Tech Giant Inc.",
                role: "Senior Developer",
                dateStart: new Date("2025-01-01"),
                companyLink: "https://techgiant.com",
                img: "/company/tg.png",
                learnings: ["Scale", "Team Leadership"],
              },
              {
                company: "StartUp Hub",
                role: "Junior Developer",
                dateStart: new Date("2023-06-01"),
                dateEnd: new Date("2024-12-31"),
                companyLink: "https://startuphub.io",
                img: "/company/sh.png",
                learnings: ["Rapid Prototyping", "UI/UX Basics"],
              },
            ],
          },
        },
      ],
    },
  },
{
    email: "sarah.dev@example.com",
    name: "Sarah Chen",
    password: "hashed_mobile_789",
    category: {
      create: [
        {
          categoryName: "Mobile Development",
          skills: {
            create: [
              { skillName: "Flutter", score: 95 },
              { skillName: "Swift", score: 88 },
              { skillName: "Firebase", score: 92 },
            ],
          },
          projects: {
            create: [
              {
                projectName: "FitTrack Pro",
                description: "Cross-platform health tracking app with real-time syncing.",
                learnings: ["Bluetooth Low Energy", "State Management (Riverpod)"],
                dateFinished: new Date("2025-08-12"),
                img: "/projects/fittrack.png",
                links: { create: [{ label: "App Store", url: "https://apple.com" }] },
              },
              {
                projectName: "EcoMap",
                description: "Community-driven recycling location finder.",
                learnings: ["Google Maps API", "Geocoding"],
                dateFinished: new Date("2024-02-20"),
                img: "/projects/ecomap.png",
              },
            ],
          },
          experience: {
            create: [
              {
                company: "Appflow Studio",
                role: "Senior Mobile Lead",
                dateStart: new Date("2024-03-01"),
                companyLink: "https://appflow.io",
                img: "/company/appflow.png",
                learnings: ["Team Mentoring", "Architecture Design"],
              },
              {
                company: "GreenTech",
                role: "Junior Flutter Dev",
                dateStart: new Date("2022-01-15"),
                dateEnd: new Date("2024-02-15"),
                companyLink: "https://greentech.org",
                img: "/company/gt.png",
                learnings: ["UI Animation", "API Integration"],
              },
            ],
          },
        },
      ],
    },
  },
  {
    email: "alex.data@example.com",
    name: "Alex Rivera",
    password: "ai_password_101",
    category: {
      create: [
        {
          categoryName: "Data Science & AI",
          skills: {
            create: [
              { skillName: "Python", score: 98 },
              { skillName: "PyTorch", score: 90 },
              { skillName: "Pandas", score: 95 },
            ],
          },
          projects: {
            create: [
              {
                projectName: "Sentiment Analyzer",
                description: "NLP tool to analyze social media trends in real-time.",
                learnings: ["Transformer Models", "Data Scraping"],
                dateFinished: new Date("2026-01-05"),
                img: "/projects/sentiment.png",
              },
              {
                projectName: "Price Predictor",
                description: "Real-estate valuation model using XGBoost.",
                learnings: ["Feature Engineering", "Regression Analysis"],
                dateFinished: new Date("2025-06-30"),
                img: "/projects/prices.png",
              },
            ],
          },
          experience: {
            create: [
              {
                company: "DataVizion",
                role: "ML Engineer",
                dateStart: new Date("2024-06-01"),
                companyLink: "https://datavizion.ai",
                img: "/company/dv.png",
                learnings: ["Model Deployment", "CI/CD for ML"],
              },
            ],
          },
        },
      ],
    },
  },
];


export async function main() {
  console.log("Seeding started...");

  // Optional: Clear existing data to avoid unique constraint errors on email
  // await prisma.user.deleteMany();

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
