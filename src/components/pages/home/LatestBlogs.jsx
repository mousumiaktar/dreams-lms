import { BiCalendar } from "react-icons/bi";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const LatesBlogs = () => {
  return (
    <div className="bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-accent lg:to-secondary pt-4 pb-24">
      <div className=" max-w-[1440px] mx-auto p-3 ">
        {/* first part */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8 text-black">Latest Blogs</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum
          </p>
          <p className="text-xl">
            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
        {/* second part */}
        <div className="cursor-pointer">
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
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="place-items-center"
          >
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-01.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">
                    Attract Attention Sales And Profits
                  </h2>
                  <h4 className="text-warning-content font-medium">Marking</h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">Jun 15, 2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-02.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">
                    11 Tips to Help You Get New Clients
                  </h2>
                  <h4 className="text-warning-content font-medium">
                    Sales Order
                  </h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary  me-3" />
                    <p className="text-sm font-medium ">May 20,2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-03.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">An Overworked Newspaper Editor</h2>
                  <h4 className="text-warning-content font-medium">Design</h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">May 25, 2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-04.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">
                    A Solution Buit for &nbsp; &nbsp; &nbsp; Teacher
                  </h2>
                  <h4 className="text-warning-content font-medium">Seo</h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">Jul 15, 2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-01.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">
                    Attract Attention Sales And Profits
                  </h2>
                  <h4 className="text-warning-content font-medium">Marking</h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">Jun 15, 2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-02.jpg"
                    alt="blog"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl">
                    11 Tips to Help You Get New Clients
                  </h2>
                  <h4 className="text-warning-content font-medium">
                    Sales Order
                  </h4>
                  <span className="flex items-center">
                    <BiCalendar className="text-lg text-primary  me-3" />
                    <p className="text-sm font-medium ">May 20,2022</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* third part */}
        <div className="mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3  space-y-5 bg-gradient-to-r from-success to-info p-10 shadow-xl mt-8 rounded-3xl">
            {/* item 1 */}
            <div className="flex items-center">
              <div className="bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-07.svg"
                  alt="students-enrolled"
                />
              </div>
              <div>
                <div className="text-xl lg:text-4xl  font-bold">253,085</div>
                <div className="text-sm lg:text-lg mt-3">STUDENTS ENROLLED</div>
              </div>
            </div>
            {/* item 2 */}
            <div className="flex items-center">
              <div className="bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-08.svg"
                  alt="total-courses"
                />
              </div>
              <div>
                <div className="text-xl lg:text-4xl font-bold">1,205</div>
                <div className="text-sm lg:text-lg mt-3">TOTAL COURSES</div>
              </div>
            </div>
            {/* item 3 */}
            <div className="flex items-center">
              <div className="bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-09.svg"
                  alt="countries"
                />
              </div>
              <div>
                <div className="text-xl lg:text-4xl font-bold">127</div>
                <div className="text-sm lg:text-lg mt-3">COUNTRIES</div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth part */}
        <div className="">
          {/* first content */}
          <div className="text-center mt-24 text-black">
            <h1 className="text-4xl font-bold">
              Unlimited access to 360+ courses
            </h1>
            <h1 className="text-4xl font-bold"> and 1,600+ hands-on labs</h1>
          </div>
          {/* second content */}
          <div className="cursor-pointer  place-items-center grid grid-cols-4 gap-5 lg:flex lg:justify-center lg:items-center lg:space-x-8 mt-20">
            {/* item 1 */}
            <div className="flex">
              <div className="hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-09.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 2 */}
            <div className="flex">
              <div className="hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-10.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 3 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-16.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 4 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-12.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 5 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-13.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 6 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-14.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 7 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-15.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 8 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-16.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 9 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-17.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
            {/* item 10 */}
            <div className="flex">
              <div className=" hover:-translate-y-3 transition-all duration-700 bg-white me-3 rounded-xl p-2">
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-18.svg"
                  alt="countries"
                  className="w-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatesBlogs;
