import React from "react";

import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <article className="overflow-auto h-full flex flex-col justify-between text-black font-medium max-[33.75rem]:hidden">
      <div className="overflow-auto">
        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-black text-7xl">1</h1>
              <span>12.21.2025</span>
            </div>

            <h2 className="text-2xl font-bold py-2">
              Blonde - Widespread Acclaim
            </h2>

            <div className="flex justify-between font-bold py-2">
              <p>By Richard Carnation</p>
              <span>5 Min Read</span>
            </div>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>

            <Link className="block w-full text-right" href="/see-more">
              ↠ See More
            </Link>
          </div>
        </div>

        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-black text-7xl">1</h1>
              <span>12.21.2025</span>
            </div>

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <div className="flex justify-between font-bold py-2">
              <p>By Richard Carnation</p>
              <span>5 Min Read</span>
            </div>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>

            <Link className="block w-full text-right" href="/see-more">
              ↠ See More
            </Link>
          </div>
        </div>

        <div className="h-full flex flex-col border-r border-black p-4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-black text-7xl">1</h1>
              <span>12.21.2025</span>
            </div>

            <h2 className="text-2xl font-bold py-2">
              Sharing The Widespread Acclaim About Motivation
            </h2>

            <div className="flex justify-between font-bold py-2">
              <p>By Richard Carnation</p>
              <span>5 Min Read</span>
            </div>

            <p>
              Blonde received widespread acclaim, with critics praising Oceans
              introspective lyrics and the albums unconventional
            </p>

            <Link className="block w-full text-right" href="/see-more">
              ↠ See More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
