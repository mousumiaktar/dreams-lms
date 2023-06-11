import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import Features from "./Features";
import HeroArea from "./HeroArea";
import Instructor from "./Instructors";
import LatesBlogs from "./LatestBlogs";
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
            <LatesBlogs />
        </div>
    );
};

export default Home;