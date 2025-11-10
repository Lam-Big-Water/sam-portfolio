import React from "react";
import Link from "next/link";

const Header = ({
  children,
  comStyle,
}: {
  children: React.ReactNode;
  comStyle?: string;
}) => {
  return (
    <header className={`w-full h-full text-black font-medium ${comStyle}`}>
      {children}
    </header>
  );
};

export default Header;
