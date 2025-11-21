import Header from "@/app/_components/header";
import Introduce from "@/app/_components/introduce";
import Post from "@/app/_components/post";
import SideBar from "@/app/_components/sideBar";

const Home = () => {
  return (
    <div className="overflow-hidden relative px-8 py-10 grid grid-cols-[15%_20%_35%_30%] grid-rows-[160px_1fr] w-7xl h-full max-h-[640px] text-black dark:text-amber-50 bg-amber-50 dark:bg-black max-md:grid-cols-[25%_40%_35%] max-md:px-4 max-sm:grid-cols-[55%_45%] max-[33.75rem]:grid-cols-[100%]">
      <SideBar />

      <Header />

      <Introduce />

      <Post />
    </div>
  );
};

export default Home;
