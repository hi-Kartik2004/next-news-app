"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      router.replace(`/news/${inputValue}`);
    }
  };

  return (
    <nav className="px-9 py-4 justify-center items-center flex fixed top-0 w-full">
      <div className="container rounded-full px-9 py-3 bg-nav border-full-color backdrop-blur-sm flex justify-between items-center ">
        <Link href="/">
          <div className="logo">
            <img
              src="https://learn-stock-trading.000webhostapp.com/pages/img/logo5.png"
              alt="logo"
              className="w-[250px]"
            />
          </div>
        </Link>

        <div className="flex gap-4 justify-center items-center">
          <div className="rounded-full  border-full-color px-4 py-1">
            <input
              type="text"
              placeholder=" Search topics..."
              className="bg-black focus:outline-none"
              onChange={handleInputChange}
              onKeyDown={handleEnter}
            />
            <Link href={`http://localhost:3000/news/${inputValue}`}>🔎</Link>
          </div>
          <Link href="https://github.com/hi-kartik2004">Github</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
