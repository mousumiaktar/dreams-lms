import { BsCheckCircleFill } from "react-icons/bs";
const ShareYourKnowledge = () => {
    return (
        <div className="bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-secondary lg:to-accent">
            <div className="max-w-[1440px] mx-auto p-3">
                {/* container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center pt-12">
                    {/* left  */}
                    <div className="">
                        <img
                            src="https://dreamslms.dreamguystech.com/html/assets/img/share.png"
                            alt="banner"
                            className=""
                        />
                    </div>
                    {/* right */}
                    <div className="">
                        <h1 className="text-2xl lg:text-4xl font-bold">
                            Want to share your knowledge?
                        </h1>
                        <h1 className="text-2xl lg:text-4xl font-bold">Join us a Mentor</h1>
                        <p className="mt-5">
                            High-definition video is video of higher resolution and quality
                            than standard-definition. While there is no standardized meaning
                            for high-definition, generally any video.
                        </p>
                        <div className="mt-5 space-y-5">
                            {/* item 1 */}
                            <div className="flex items-center">
                                <span>
                                    <BsCheckCircleFill className="text-xl text-primary" />
                                </span>
                                <span className="text-lg mx-5">Best Courses</span>
                            </div>
                            {/* item 2 */}
                            <div className="flex items-center">
                                <span>
                                    <BsCheckCircleFill className="text-xl text-primary" />
                                </span>
                                <span className="text-lg mx-5">Top rated Instructors</span>
                            </div>
                            <button className="mt-3 whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareYourKnowledge;