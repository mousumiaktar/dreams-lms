import { HiUsers } from "react-icons/hi";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Instructor = () => {
  return (
    <div className="bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-accent lg:to-secondary pt-4 pb-24">
      <div className=" max-w-[1440px] mx-auto p-3 mt-8">
        {/* first part */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-8 text-black">Featured Instructor</h2>
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
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="place-items-center"
          >
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user7.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">David Lee</h2>
                  <h4 className="text-warning-content font-medium">
                    Web Developer
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">David Lee</h2>
                  <h4 className="text-warning-content font-medium">
                    PHP Expert
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-info-content me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user9.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Patricia Mendoza</h2>
                  <h4 className="text-warning-content font-medium">
                    Web Developer
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-primary-focus me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user10.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Skyler Whites</h2>
                  <h4 className="text-warning-content font-medium">
                    UI Designer
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-success-content  me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">David Lee</h2>
                  <h4 className="text-warning-content font-medium">
                    PHP Expert
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-info-content me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-12">
              <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/user/user9.jpg"
                    alt="instructor"
                    className="rounded-t w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Patricia Mendoza</h2>
                  <h4 className="text-warning-content font-medium">
                    Web Developer
                  </h4>
                  <span className="flex items-center">
                    <HiUsers className="text-lg text-primary me-3" />
                    <p className="text-sm font-medium ">50 Students</p>
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

export default Instructor;
