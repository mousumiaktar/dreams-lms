import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import Features from "./Features";
import HeroArea from "./HeroArea";
import Instructor from "./Instructors";
import TrendingCourses from "./TrendingCourses";

const Home = () => {
    return (
        <div>
            <HeroArea />
            <Features />
            <FavoriteCourse />
            <FeaturedCourse />
            <Career />
            <TrendingCourses />
            <Instructor />
        </div>
    );
};

export default Home;