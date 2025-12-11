import CategoriesSection from "@/Components/Footer/CategoriesSection/CategoriesSection";
import HeroSection from "@/Components/HeroSection/HeroSection";
import HomeSection from "@/Components/HomeSection/HomeSection";
import { Separator } from "../../Components/ui/separator";
import BrandsHero from './../../Components/BrandsHero/BrandsHero';
import ReviewSection from './../../Components/ReviewSection/ReviewSection';


export default function Home() {
    return (
        <section>
            <HeroSection />
            <BrandsHero />
            <HomeSection title="New Arrivals" />
            <Separator />
            <HomeSection title="Top Selling " />
            <CategoriesSection />
            <ReviewSection />
        </section>
    )
}
