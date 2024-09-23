import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Clothings from "../Clothings/Clothings";
import CurrentTopSells from "../CurrentTopSells/CurrentTopSells";
import Electronics from "../Electronics/Electronics";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Furnitures from "../Furnitures/Furnitures";
import HomeDescText from "../HomeDescText/HomeDescText";
import Kids from "../Kids/Kids";
import NewProducts from "../NewProducts/NewProducts";
import Recommended from "../Recommended/Recommended";
import ShopbyCategories from "../ShopbyCategories/ShopbyCategories";
import WhyShop from "../WhyShop/WhyShop";

const Home = () => {
    return (
        <section className="pt-40 bg-stone-50">
            <Banner />
            <ShopbyCategories />
            <div className="flex container mx-auto justify-between my-12">
                <NewProducts />
                <FeaturedProducts />
            </div>
            <Brands />
            <CurrentTopSells />

            <Clothings />
            <Furnitures />
            <Electronics />
            <Kids />
            <Recommended />
            <HomeDescText />
            <WhyShop />


        </section>
    );
};

export default Home;