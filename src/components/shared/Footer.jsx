const Footer = () => {
    return (
      <footer className="p-3 mt-9">
        <div className="max-w-[1440px] mx-auto p-2">
          {/* first part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-36 gap-y-10">
            {/* first column  */}
            <div>
              {/* logo  */}
              <img
                className="h-10"
                src={
                  "https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                }
                alt="logo"
              />
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consequat mauris Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut consequat mauris
              </p>
            </div>
            {/* second column  */}
            <div>
              <h2 className="text-lg font-bold">For Instructor</h2>
              <ul className="space-y-6 mt-4">
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Profile
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Login
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Register
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Instructor
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Dashboard
                </li>
              </ul>
            </div>
            {/* third column  */}
            <div>
              <h2 className="text-lg font-bold">For Student</h2>
              <ul className="space-y-6  mt-4">
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Profile
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Login
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Register
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Instructor
                </li>
                <li className="hover:text-primary cursor-pointer font-medium transition-all delay-100 duration-300">
                  Dashboard
                </li>
              </ul>
            </div>
            {/* forth column  */}
            <div>
              <h2 className="text-lg font-bold">News Letter</h2>
              {/*subscription email  */}
              <input
                type="text"
                placeholder="Enter your email address"
                className="border-b w-full outline-none mt-4 pb-3"
              />
              {/* location */}
              <ul className="space-y-6 mt-4">
                <li className="flex items-center">
                  <span>
                    {/* location  */}
                    <img
                      src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-20.svg"
                      alt="location"
                    />
                  </span>
                  <span className="mx-4">
                    3556 Beech Street, San Francisco,
                    <p> California, CA 94108</p>
                  </span>
                </li>
                {/* email */}
                <li className="flex">
                  <span>
                    {/* email */}
                    <img
                      src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-19.svg"
                      alt=""
                      className=""
                    />
                  </span>
                  <span className="mx-4">dreamslms@example.com</span>
                </li>
                {/* phone */}
                <li className="flex">
                  <span>
                    {/* phone */}
                    <img
                      src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-21.svg"
                      alt=""
                    />
                  </span>
                  <span className="mx-4">+19 123-456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          {/* seconde part desktop and laptop */}
          <div className="hidden md:flex md:justify-between md:items-center m-12 space-y-5">
            <span className="mx-32">
              Terms
              <span className="select-none mx-2 text-2xl font-thin ">&#124;</span>
              Privacy
            </span>
            <p className="whitespace-nowrap">
              © 2023 DreamsLMS. All rights reserved.
            </p>
          </div>
          {/* seconde part mobile */}
          <div className="md:hidden flex flex-col items-center m-12 space-y-5">
            <span className="text-sm">Terms</span>
            <span className="text-sm">Privacy</span>
            <p className="text-sm">© 2023 DreamsLMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;