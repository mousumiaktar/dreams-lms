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
          <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>
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
      </div>
    </div>
  );
};

export default LatesBlogs;
