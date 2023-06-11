import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import Features from "./Features";
import HeroArea from "./HeroArea";
import Instructor from "./Instructors";
import ShareYourKnowledge from "./ShareKnowledge";
import TrendingCourses from "./TrendingCourses";
import Trusted from "./TrustedCompanies";

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
            <Trusted />
            <ShareYourKnowledge />
        </div>
    );
};

export default Home;