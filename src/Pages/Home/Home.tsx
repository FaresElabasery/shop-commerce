import HeroSection from "@/Components/HeroSection/HeroSection";
import BrandsHero from './../../Components/BrandsHero/BrandsHero';
import HomeSection from "@/Components/HomeSection/HomeSection";
import ReviewSection from './../../Components/ReviewSection/ReviewSection';
import { Separator } from "@/components/ui/separator";
import CategoriesSection from "@/Components/Footer/CategoriesSection/CategoriesSection";
import useProduct from "@/hooks/useProduct";


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
