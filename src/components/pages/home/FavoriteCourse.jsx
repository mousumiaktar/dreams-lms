import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const FavoriteCourse = () => {
    return (
        <>
            <div className="max-w-[1440px] mx-auto p-3">
                <div className="md:flex items-center justify-between mb-20">
                    <div>
                        <h5 className="text-primary font-bold text-xl mt-8">Favourite Course</h5>
                        <h1 className="text-4xl font-bold mt-5">Top Category</h1>
                        <p className="text-secondary-focus font-medium mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                    <div>
                        <button className="mt-3 whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                           All Categories
                        </button>
                    </div>
                </div>
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
                            slidesPerView: 3,
                            spaceBetween: 20,
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
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon.png"
                                    alt="courses"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">Angular</h2>
                                <h2 className="text-xl font-bold">Development</h2>
                                <p>40 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-01.png"
                                    alt="courses"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">Docker</h2>
                                <h2 className="text-xl font-bold">Development</h2>
                                <p>45 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-02.png"
                                    alt="courses"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">Node JS</h2>
                                <h2 className="text-xl font-bold">Frontend</h2>
                                <p>40 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-03.png"
                                    alt="course"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">Swift</h2>
                                <h2 className="text-xl font-bold">Development</h2>
                                <p>23 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-04.png"
                                    alt="course"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">Python</h2>
                                <h2 className="text-xl font-bold">Development</h2>
                                <p>30 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-05.png"
                                    alt="course"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center hover:text-white">
                                <h2 className="text-xl font-bold">React </h2>
                                <h2 className="text-xl font-bold">Native</h2>
                                <p>80 Instructors</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default FavoriteCourse;
