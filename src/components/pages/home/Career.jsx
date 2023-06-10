const Career = () => {
    return (
      <div className="max-w-[1440px] mx-auto p-3 m-16">
        <div className="grid lg:grid-cols-2 gap-5 ">
          {/* left  */}
          <div className="">
            {/* first content  */}
            <div className="">
              <h3 className="mt-10 mb-2 text-md text-primary md:text-xl font-bold">
                What’s New
              </h3>
              <h1 className="my-5 text-4xl font-bold">
                Master the skills to drive your career
              </h1>
              <p className="text-lg">
                Get certified, master modern tech skills, and level up your career
                — whether you’re starting
              </p>
              <p className="text-lg">
                out or a seasoned pro. 95% of eLearning learners report our
                hands-on content directly
              </p>
              <p className="text-lg">helped their careers.</p>
            </div>
            {/* second content */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-5">
              {/* item 1 */}
              <div className="max-w-md border py-4 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-75">
                <div className="flex justify-center items-center">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-1.svg"
                    alt="motivated"
                    className="mx-5"
                  />
                  <p className="font-medium">
                    Stay motivated with engaging instructors
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="max-w-md border py-4 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-75">
                <div className="flex justify-center items-center">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-2.svg"
                    alt="latest-cloud"
                    className="mx-5"
                  />
                  <p className="font-medium">
                    Keep up with in the latest in cloud
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="max-w-md border py-4 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-75">
                <div className="flex justify-center items-center">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-2.svg"
                    alt="certification"
                    className="mx-5"
                  />
                  <p className="font-medium">
                    Get certified with 100+ certification courses
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="max-w-md border py-4 rounded-xl hover:-translate-y-2 transition-all duration-300 delay-75">
                <div className="flex justify-center items-center">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-4.svg"
                    alt="skills"
                    className="mx-5"
                  />
                  <p className="font-medium">
                    Build skills your way, from labs to courses{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden lg:block relative">
            <img
              src="https://dreamslms.dreamguystech.com/html/assets/img/join.png"
              alt="banner"
              className="absolute top-[87px] left-[70px]  w-[80%]"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Career;