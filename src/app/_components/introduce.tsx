import React from "react";

import Image from "next/image";
import Link from "next/link";

const Introduce = () => {
  return (
    <main className="overflow-auto h-full flex flex-col justify-between text-black font-medium">
      <div>
        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <Image
              width={200}
              height={100}
              className="w-full"
              src="/post.avif"
              alt="post photo"
            />

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4">
          <h1 className="text-6xl font-black pb-4">Tech</h1>
          <p className="text-right border-b border-black">12.21.2025</p>
        </div>

        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <Image
              width={200}
              height={100}
              className="w-full"
              src="/post.avif"
              alt="post photo"
            />

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4">
          <h1 className="text-6xl font-black pb-4">Tech</h1>
          <p className="text-right border-b border-black">12.21.2025</p>
        </div>

        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <Image
              width={200}
              height={100}
              className="w-full"
              src="/post.avif"
              alt="post photo"
            />

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Introduce;
