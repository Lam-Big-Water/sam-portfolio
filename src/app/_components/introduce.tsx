import { Codesandbox, Github } from "lucide-react";
import Image from "next/image";

const Introduce = () => {
  return (
    <main className="scrollbar-thin overflow-y-auto overflow-x-hidden snap-y snap-mandatory row-span-2 text-black dark:text-amber-50 bg-amber-50 dark:bg-black font-medium">
      <Items />
      <Items />
      <Items />
    </main>
  );
};

const Items = () => {
  return (
    <div className="grid grid-rows-[160px_1fr] snap-center">
      <div className="p-4 w-full h-full flex flex-col justify-between">
        <h1 className="text-6xl font-black pb-4">Tech</h1>
        <p className="text-right border-b border-black dark:border-amber-50">
          12.21.2025
        </p>
      </div>

      <div>
        <div className="min-h-100 flex flex-col border-r border-black dark:border-amber-50 p-4">
          <div>
            <Image
              src="/keyboard.png"
              alt="post photo"
              width={200}
              height={100}
              className="w-full"
              unoptimized // 禁用 Next.js 图片优化
            />

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>

            <div className="w-full flex justify-end items-center" >
              <a href="#" className="inline-flex py-4">
              <span className="text-lg font-bold">visit ⇢</span>
              <span><Codesandbox /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
