const Features = () => {
    return (
      <div className="p-4">
        <div className="-mt-12 md:-mt-0 p-6 bg-white max-w-[1440px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* item 1 */}
          <div className="bg-white lg:-mt-24 mt-8 flex items-center border max-w-sm p-6 rounded-3xl hover:-translate-y-4 transition-all duration-300 delay-100">
            <div>
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/pencil-icon.svg"
                alt="online-courses"
              />
            </div>
            <div className="mx-5">
              <h2 className="text-3xl font-bold">10K</h2>
              <p className="font-medium"> Online Courses</p>
            </div>
          </div>
          {/* item 2 */}
          <div>
            <div className="bg-white lg:-mt-24 mt-8 flex items-center border max-w-sm p-6  rounded-3xl hover:-translate-y-4 transition-all duration-300 delay-100">
              <div>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/cources-icon.svg"
                  alt="expert-tutors"
                />
              </div>
              <div className="mx-5">
                <h2 className="text-3xl font-bold">10K</h2>
                <p className="font-medium">Expert Tutors</p>
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div>
            <div className="bg-white lg:-mt-24 mt-8 flex items-center border max-w-sm p-6  rounded-3xl hover:-translate-y-4 transition-all duration-300 delay-100">
              <div>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/certificate-icon.svg"
                  alt="ceritified-courses"
                />
              </div>
              <div className="mx-5">
                <h2 className="text-3xl font-bold">10K</h2>
                <p className="font-medium">Ceritified Courses</p>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div>
            <div className="bg-white lg:-mt-24 mt-8 flex items-center border max-w-sm p-6  rounded-3xl hover:-translate-y-4 transition-all duration-300 delay-100">
              <div>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/gratuate-icon.svg"
                  alt="online-students"
                />
              </div>
              <div className="mx-5">
                <h2 className="text-3xl font-bold">10K</h2>
                <p className="font-medium">Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;