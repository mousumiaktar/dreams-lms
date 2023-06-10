import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import Features from "./Features";
import HeroArea from "./HeroArea";

const Home = () => {
    return (
        <div>
            <HeroArea />
            <Features />
            <FavoriteCourse />
            <FeaturedCourse />
            <Career />
        </div>
    );
};

export default Home;