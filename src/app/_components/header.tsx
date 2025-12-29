import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <header className="row-span-2 grid grid-rows-[160px_1fr] text-black dark:text-amber-50 bg-amber-50 dark:bg-black font-medium max-sm:hidden">
      <div className="row-[1/2] p-4 w-full h-full flex flex-col justify-between">
        <h1 className="text-6xl font-black pb-4">{t("title")}</h1>
        <p className="border-b border-black">● Skills</p>
      </div>
      <div className="row-[2/3] h-full border-r border-black dark:border-amber-50 p-4 max-md:col-[1/2] max-sm:hidden">
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>HTML / CSS</li>
          <li>JS / TS</li>
          <li>React</li>
          <li>Next</li>
          <li>Tailwind</li>
          <li>ReactMotion</li>
          <li>Git / GitHub</li>
          <li>Figma</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
