const Header = () => {
  return (
    <header className="row-span-2 grid grid-rows-[160px_1fr] text-black font-medium max-sm:hidden">
      <div className="row-[1/2] p-4 w-full h-full flex flex-col justify-between">
        <h1 className="text-6xl font-black pb-4">My</h1>
        <p className="border-b border-black">● Pinned Issue</p>
      </div>
      <div className="row-[2/3] h-full border-r border-black p-4 max-md:col-[1/2] max-sm:hidden">
        <h2 className="mt-auto text-5xl font-black">NO.2</h2>
      </div>
    </header>
  );
};

export default Header;
