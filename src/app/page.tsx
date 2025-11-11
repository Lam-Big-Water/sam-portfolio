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

      <Header />

      <Introduce />

    
      <Post />
    </div>
  );
};

export default Home;
