import { Category, Experience, User } from "../app/generated/prisma";
import prisma from "../lib/prisma";


export default async function Home() {

  const users: User[] = await prisma.user.findMany();
  const categories: Category[] = await prisma.category.findMany();
  const experiences: Experience[] = await prisma.experience.findMany();

  return (
     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
              <ol>
                {categories.map((category) => (
                    <li key={category.id} className="mb-2 ml-2">
                      {category.userId == user.id && category.categoryName}
                      <ol>
                        {experiences.map((experience) => (
                            <li key={experience.id} className="mb-2 ml-5">
                              {experience.categoryId == category.id && (
                                experience.company + " - " + experience.role
                              )}
                            </li>
                        ))}
                      </ol>
                    </li>
                ))}
              </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
