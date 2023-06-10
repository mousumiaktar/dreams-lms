import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <nav className="z-[11] sticky top-0 p-2 bg-gradient-to-r from-secondary to-accent md:bg-gradient-to-l md:from-secondary md:to-accent ">
      <div className="max-w-[1440px] mx-auto p-1 relative mt-5">
        <div className="md:flex md:justify-between md:items-center ">
          {/* first part */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
            />
            <div className="mx-auto">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                alt="logo"
                className="h-8"
              />
            </div>
          </div>
          {/* second part */}
          <ul className="hidden lg:flex font-semibold space-x-6">
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span className="flex justify-center items-center text-primary">
                Home <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span className="flex justify-center items-center">
                Instructor <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span className="flex justify-center items-center">
                Student <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span className="flex justify-center items-center">
                Page <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span className="flex justify-center items-center">
                Blog <BiChevronDown className="text-xl" />
              </span>
            </li>
          </ul>
          {/* third part */}
          <div className="space-x-4 hidden md:block">
            <button className="transition-all delay-100 duration-300 font-semibold hover:bg-primary hover:text-white   px-11 py-1.5 rounded-full">
              Signin
            </button>
            <button className="transition-all delay-100 duration-300 font-semibold border-2  border-primary-focus hover:text-white hover:bg-primary hover:border-primary px-8 py-1.5 rounded-full">
              Signup
            </button>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={`lg:hidden bg-primary w-[280px] md:w-[260px] h-screen absolute ${
            open
              ? "-top-2 -left-2 transition-all duration-700 "
              : "top-0 -left-full transition-all duration-1000 delay-300"
          }`}
        >
          <div className="bg-white p-[17px] flex justify-between items-center">
            <span className="cursor-pointer">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                alt="logo"
                className="h-7"
              />
            </span>
            <IoIosClose
              className="hover:text-primary text-3xl font-bold cursor-pointer transition-all duration-200"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li
              className=""
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
            >
              <div
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex justify-between items-center p-3"
              >
                Home
                <span>
                  <BiChevronDown className="text-2xl" />
                </span>
              </div>
              {/* submenu */}
              <div
                className={` ${
                  submenuOpen
                    ? "max-h-auto transition-all "
                    : "max-h-0 overflow-hidden"
                } `}
                style={{ background: "#F38681" }}
              >
                <ul className="space-y-5 p-6">
                  <li>Home</li>
                  <li>Home Two</li>
                  <li>Home Three</li>
                  <li>Home Four</li>
                </ul>
              </div>
            </li>
            <li
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              Instructor
              <span>
                <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              Student
              <span>
                <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              Pages
              <span>
                <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              Blog
              <span>
                <BiChevronDown className="text-xl" />
              </span>
            </li>
            <li
              style={{ color: "#FEE9E8", borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              Signin / Signup
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;