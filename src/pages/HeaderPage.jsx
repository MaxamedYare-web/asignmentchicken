import { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { IoIosMenu, IoMdCloseCircleOutline } from "react-icons/io";

export const HeaderPage = () => {
  const [showNav, setShowNav] = useState(false);

  const menuClick = (e) => {
    e.preventDefault();
    setShowNav(true);
  };

  return (
    <>
      <header className="flex fixed z-20 bg-white justify-between w-full shadow-lg px-10 py-2 items-center">
        <nav className="flex  gap-3   sm:gap-6 items-center">
          {
            !showNav ? <IoIosMenu onClick={menuClick} className="text-4xl cursor-pointer lg:hidden" /> 
            : <IoMdCloseCircleOutline onClick={()=>setShowNav(false)} className="text-4xl cursor-pointer lg:hidden"/>
          }
          
          {/* desktop nav*/}
          <ul className="gap-6 text-[24px] hidden lg:flex">
            <li className="duration-500 hover:text-[#7BC6F7]">
              <a href="#home">Home</a>{" "}
            </li>
            <li className="duration-500 hover:text-[#7BC6F7]">
              {" "}
              <a href="">About</a>
            </li>
            <li className="duration-500 hover:text-[#7BC6F7]">
              {" "}
              <a href="">Products</a>{" "}
            </li>
            <li className="duration-500 hover:text-[#7BC6F7]">
              {" "}
              <a  href="#dealership">Dealership</a>
            </li>
            <li className="duration-500 hover:text-[#7BC6F7]">
              {" "}
              <a href="">Blog</a>{" "}
            </li>
            <li className="duration-500 hover:text-[#7BC6F7]">
              {" "}
              <a href="">Contact</a>{" "}
            </li>
          </ul>
          {/* logo */}
          <div className="">
            <a href="#home" className="text-[30px] sm:text-[40px] duration-500 hover:text-[#7BC6F7]">BeMotion</a>
          </div>
          {/* social icons */}
        </nav>
        <div className="flex gap-3 text-[35px]">
          <CiTwitter className="duration-500 hover:rounded-full hover:bg-[#7BC6F7] hover:p-1 hover:text-white"/>
          <FaWhatsapp className="duration-500  hover:rounded-full hover:bg-[#7BC6F7] hover:p-1  hover:text-white"/>
          <FiFacebook className="duration-500  hover:rounded-full hover:bg-[#7BC6F7] hover:p-1  hover:text-white"/>
          <FaInstagram className="duration-500  hover:rounded-full hover:bg-[#7BC6F7] hover:p-1 hover:text-white"/>
        </div>
        <div
          className={`absolute lg:hidden  ${
            !showNav
              ? "opacity-0 flex h-0"
              : "opacity-100 h-[370px] z-10 flex bg-white shadow-lg"
          } duration-500  top-[99%]   inset-x-0 w-full`}
        >
          <ul className="flex flex-col text-[24px] gap-4 py-2 ml-5 w-full">
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
             
              <a href="#home">Home</a>
            </li>
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
             
              <a href="">About</a>
            </li>
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
             
              <a href="">Products</a>
            </li>
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
             
              <a href="#dealership">Dealership</a>
            </li>
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
             
              <a href="">Blog</a>
            </li>
            <li className="border-b-1 p-1  duration-500 hover:bg-[#7BC6F7] hover:rounded hover:text-white">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
