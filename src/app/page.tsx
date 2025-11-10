import Header from "./_components/header";
import Introduce from "./_components/introduce";
import Post from "./_components/post";
import SideBar from "./_components/sideBar";
import Link from "next/link";
import TittleNum from "./_components/tittleNum";

const Home = () => {
  return (
    <div className="p-4 grid grid-cols-[15%_20%_35%_30%] grid-rows-[160px_1fr] w-5xl h-full max-h-[580px] bg-amber-50 dark:bg-black max-md:grid-cols-[25%_40%_35%] max-sm:grid-cols-[55%_45%] max-[33.75rem]:grid-cols-[100%]">
      <SideBar />

      <Header comStyle={"max-sm:hidden"}>
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <h1 className="text-6xl font-black pb-4">My</h1>
          <p className="border-b border-black">● Pinned Issue</p>
        </div>
      </Header>

      <Header>
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <h1 className="text-6xl font-black pb-4">Tech</h1>
          <p className="text-right border-b border-black">12.21.2025</p>
        </div>
      </Header>

      <Header comStyle={"max-[33.75rem]:hidden"}>
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <h1 className="bg-black h-16"></h1>
          <div className="flex justify-between border-b pt-2 border-black">
            <p className="">Featured Articles</p>
            <Link href="seeAll">❖ See All</Link>
          </div>
        </div>
      </Header>

      <TittleNum />

      <Introduce />

      <Post />
    </div>
  );
};

export default Home;
