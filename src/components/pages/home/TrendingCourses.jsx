import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStopwatchFill, BsStarFill } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const TrendingCourses = () => {
  return (
    <div className="bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-accent lg:to-secondary pt-4">
      <div className="max-w-[1440px] mx-auto md:p-3">
        {/* first part  */}
        <div className="flex justify-between items-center">
          {/* left  */}
          <div className="px-2 md:px-0">
            <h3 className="mt-10 mb-2 text-md text-primary md:text-xl font-bold">
              What’s New
            </h3>
            <h1 className="mb-2 text-4xl font-bold text-black">TRENDING COURSES</h1>
            <button className="md:hidden whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-3 py-1 rounded-full m-2">
              All Categories
            </button>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum
            </p>
            <p className="text-xl">
              gravida maecenas augue elementum et neque. Suspendisse imperdiet.
            </p>
          </div>
          {/* right */}
          <div className="hidden md:block">
            <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
              All Categories
            </button>
          </div>
        </div>
        {/* second part */}
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="place-items-center"
          >
            <SwiperSlide className="mb-12">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-07.jpg"
                    alt="cursor"
                    className="overflow-auto cursor-pointer rounded-xl "
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-primary font-bold">
                        $ 200
                      </span>
                      <sub>
                        <del
                          className="mx-4 font-bold text-sm"
                          style={{ color: "#8B8B8B" }}
                        >
                          $99.00
                        </del>
                      </sub>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">John Michael</h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    Learn JavaScript and Express to become a professional
                    JavaScript
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>13+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>10hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2" style={{ color: "#FFB800" }}>
                      4.0{" "}
                    </span>
                    &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-08.jpg"
                    alt="course"
                    className="rounded-xl"
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-primary font-bold">
                        $ 300
                      </span>
                      <sub>
                        <del
                          className="mx-4 font-bold text-sm"
                          style={{ color: "#8B8B8B" }}
                        >
                          $99.00
                        </del>
                      </sub>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user2.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">John Smith</h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    Responsive Web Design Essential HTML5 CSS3 and Bootstrap{" "}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>10+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>11hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2" style={{ color: "#FFB800" }}>
                      4.0
                    </span>
                    &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-05.jpg"
                    alt="courses"
                    className="rounded-xl"
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-primary font-bold">
                        $ 300
                      </span>
                      <sub>
                        <del
                          className="mx-4 font-bold text-sm"
                          style={{ color: "#8B8B8B" }}
                        >
                          $99.00
                        </del>
                      </sub>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user3.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">John Smith</h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    Build Responsive Real World Websites with HTML5 and CSS3{" "}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>13+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>10hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2">4.0 </span> &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-03.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-green-500 font-bold">
                        FREE
                      </span>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user5.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">Jesse Stevens</h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    Sketch from A to Z (2022): Become an app designer
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>13+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>10hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2">4.5 </span> &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-09.jpg"
                    alt="courses"
                    className="rounded-xl"
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-primary font-bold">
                        $ 100
                      </span>
                      <sub>
                        <del
                          className="mx-4 font-bold text-sm"
                          style={{ color: "#8B8B8B" }}
                        >
                          $99.00
                        </del>
                      </sub>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user4.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">Nicole Brown</h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    The Complete App Design Course -UX, UI and Design Thinking
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>8+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>8hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2">4.2 </span> &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="h-[570px] max-w-md md:max-w-xs lg:max-w-md hover:bg-accent-focus hover:text-white hover:transition-all hover:duration-700 mt-14 rounded-xl w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4 relative">
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/course/course-06.jpg"
                    alt="courses"
                    className="rounded-xl"
                  />
                  <span className="flex">
                    <h2 className="bottom-8 right-8 absolute bg-neutral-focus p-2  rounded-xl">
                      <span className="text-2xl text-green-500 font-bold">
                        FREE
                      </span>
                    </h2>
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="border rounded-full w-12">
                          <span>
                            <img
                              src="https://dreamslms.dreamguystech.com/html/assets/img/user/user6.jpg"
                              alt="instructor"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">
                          Stella Johnson
                        </h2>
                        <p className="text-sm font-medium">Instructor</p>
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="text-2xl text-primary" />
                    </div>
                  </div>
                  <p className="py-3 text-[16px] font-semibold">
                    .Net Developers Double Your Coding Speed with Visual Studio{" "}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-01.svg"
                          alt="book"
                        />
                      </span>
                      <span>7+ Lesson</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        <BsFillStopwatchFill className="me-2 text-primary" />
                      </span>
                      <span>7hr 30min</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill style={{ color: "#FFB800" }} />
                    <BsStarFill className="text-gray-500" />
                    <span className="mx-2">4.6 </span> &nbsp;(15)
                  </div>
                  <div className="">
                    <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
