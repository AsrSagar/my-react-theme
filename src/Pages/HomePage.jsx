import react from "react";
import HeroSection from "../components/heroSection/heroSection";
import PormoSection from "../components/pormoSection/pormoSection";
import PopularCategory from "../components/PopularCategory/PopularCategory";
import FeaturedProducts from "../components/FeaturedProduct/FeaturedProduct";
import CallToAction from "../components/CallToAction/CallToAction";
import NewProducts from "../components/NewProducts/NewProducts";
import AdsBanner from "../components/AdsBanner/AdsBanner";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import AssociateLogos from "../components/AssociateLogos/AssociateLogos";
import ProductSidebar from "../components/ProductSidebar/ProductSidebar";
import RecentNews from "../components/RecentNews/RecentNews";
import Newsletter from "../components/Newsletter/Newsletter";
import InstagramSection from "../components/InstagramSection/InstagramSection";

const HomePage = () => {
  return (
    <div id="content" class="site-content global-layout-no-sidebar">
        <div class="container">
            <div class="inner-wrapper">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" >
                        <HeroSection />
                        <PormoSection />
                        <PopularCategory />
                        <FeaturedProducts />
                        <CallToAction />
                        <NewProducts />
                        <AdsBanner />
                        <PopularProducts />
                        <AssociateLogos />
                        <ProductSidebar />
                        <RecentNews />
                        <Newsletter />
                        <InstagramSection />
                    </main>
                </div>
            </div>
        </div>
    </div>
  );
}
export default HomePage;