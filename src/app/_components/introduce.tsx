import { Codesandbox, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  codeLink: string;
  demoLink: string;
}

const itemsData = [
  {
    title: "Admin Dashboard",
    date: "12.21.2025",
    description:
      "An Admin Dashboard inspired by ShadcnUI design philosophy, featuring over 90% of components and interactions built from the ground up.",
    imageUrl: "/keyboard.png",
    codeLink: "https://github.com/satnaing/shadcn-admin",
    demoLink: "https://github.com/satnaing/shadcn-admin",
  },
  {
    title: "UI Component Lab",
    date: "11.15.2025",
    description:
      "A personal collection of custom-built UI components, design patterns, and animations.",
    imageUrl: "/keyboard.png",
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Sam's Dev Blog",
    date: "10.05.2025",
    description:
      "A personal technical blog documenting challenges, solutions, and learnings from my development journey.",
    imageUrl: "/keyboard.png",
    codeLink: "#",
    demoLink: "#",
  },
];

const Introduce = () => {
  return (
    <main className="scrollbar-thin overflow-y-auto overflow-x-hidden snap-y snap-mandatory row-span-2 text-black dark:text-amber-50 bg-amber-50 dark:bg-black font-medium">
      {itemsData.map((item, index) => (
        <Items key={index} item={item} />
      ))}
    </main>
  );
};

const Items = ({ item }: { item: Item }) => {
  return (
    <div className="grid grid-rows-[160px_1fr] snap-center">
      <div className="p-4 w-full h-full flex flex-col justify-between">
        <h1 className="text-6xl font-black pb-4">Project</h1>
        <p className="text-right border-b border-black dark:border-amber-50">
          {item.date}
        </p>
      </div>

      <div>
        <div className="min-h-100 flex flex-col border-r border-black dark:border-amber-50 p-4">
          <div>
            <Image
              src={item.imageUrl}
              alt="post photo"
              width={200}
              height={100}
              className="w-full"
              unoptimized
            />

            <h2 className="text-2xl font-bold py-2">{item.title}</h2>

            <p>{item.description}</p>

            <div className="w-full flex gap-6 justify-end items-center mt-4">
              <Link
                href={item.codeLink}
                className="flex items-center gap-2 hover:underline"
              >
                <span className="text-lg">Code</span>
                <span>
                  <Github />
                </span>
              </Link>

              <Link
                href={item.demoLink}
                className="flex items-center gap-2 hover:underline"
              >
                <span className="text-lg">Live demo</span>
                <span>
                  <Codesandbox />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
