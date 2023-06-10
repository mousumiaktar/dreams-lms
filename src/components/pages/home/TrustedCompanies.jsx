import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Trusted = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-20">
      <div className="">
        {/* first part */}
        <div className="text-center space-y-4 m-9">
          <h3 className="text-xl text-primary font-bold">Trusted By </h3>
          <h1 className="text-4xl font-bold text-black pb-12">500+ Leading Universities And Companies</h1>
        </div>
        {/* second part */}
        <div className="cursor-pointer">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide className="mb-12 w-9">
              {/* item 1 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-02.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 2 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-03.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 3 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-04.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 4 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-05.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 5 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-06.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 6 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-03.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* item 7 */}
              <div className="">
                <figure>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/lead-04.png"
                    alt="logos"
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trusted;