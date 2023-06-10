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
                        <button className="transition-all delay-100 duration-300 font-semibold border-2  border-primary-focus hover:text-white hover:bg-primary hover:border-primary px-8 py-1.5 rounded-full mt-4 md:mt-0">
                           Categories
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default FavoriteCourse;
